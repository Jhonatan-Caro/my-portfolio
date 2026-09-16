#!/usr/bin/env bash
#
# Despliega el portfolio estático a S3 (+ invalidación opcional de CloudFront).
#
# Uso:
#   S3_BUCKET=mi-bucket npm run deploy
#   S3_BUCKET=mi-bucket CLOUDFRONT_DISTRIBUTION_ID=E123ABC npm run deploy
#
# Variables:
#   S3_BUCKET                    (obligatoria) nombre del bucket destino
#   CLOUDFRONT_DISTRIBUTION_ID   (opcional) invalida la caché de CloudFront tras subir
#   AWS_PROFILE / AWS_REGION     (opcional) los respeta la AWS CLI

set -euo pipefail

# --- Carga de .env.deploy (si existe) ---------------------------------------
# Las variables ya presentes en el entorno tienen prioridad sobre el archivo,
# así que solo se aplican las claves del archivo que aún no estén definidas.
ENV_FILE="$(dirname "$0")/../.env.deploy"
if [[ -f "$ENV_FILE" ]]; then
  echo "▶ Cargando configuración de .env.deploy..."
  while IFS='=' read -r key value || [[ -n "$key" ]]; do
    # Ignora líneas vacías y comentarios
    [[ -z "$key" || "$key" == \#* ]] && continue
    # Recorta espacios alrededor de la clave
    key="${key//[[:space:]]/}"
    # Solo define la variable si no viene ya del entorno
    if [[ -z "${!key:-}" ]]; then
      export "$key=$value"
    fi
  done < "$ENV_FILE"
fi

# --- Validaciones -----------------------------------------------------------
if [[ -z "${S3_BUCKET:-}" ]]; then
  echo "❌ Falta la variable S3_BUCKET."
  echo "   Ej: S3_BUCKET=mi-bucket npm run deploy"
  exit 1
fi

if ! command -v aws >/dev/null 2>&1; then
  echo "❌ AWS CLI no está instalada. Instálala: https://aws.amazon.com/cli/"
  exit 1
fi

if ! aws sts get-caller-identity >/dev/null 2>&1; then
  echo "❌ No hay credenciales AWS válidas. Configura 'aws configure' o AWS_PROFILE."
  exit 1
fi

# --- Build ------------------------------------------------------------------
echo "▶ Generando build estático..."
npm run build

if [[ ! -d "out" ]]; then
  echo "❌ No se encontró el directorio 'out/'. ¿Está 'output: export' en next.config.ts?"
  exit 1
fi

# --- Sync: assets con hash → caché inmutable de 1 año -----------------------
echo "▶ Subiendo assets con hash (caché larga) a s3://${S3_BUCKET}..."
aws s3 sync out/ "s3://${S3_BUCKET}/" \
  --delete \
  --exclude "*.html" \
  --exclude "*.txt" \
  --cache-control "public,max-age=31536000,immutable"

# --- Sync: HTML y payloads → siempre revalidar ------------------------------
echo "▶ Subiendo HTML y payloads (sin caché)..."
aws s3 sync out/ "s3://${S3_BUCKET}/" \
  --exclude "*" \
  --include "*.html" \
  --include "*.txt" \
  --cache-control "no-cache"

# --- Invalidación de CloudFront (opcional) ----------------------------------
if [[ -n "${CLOUDFRONT_DISTRIBUTION_ID:-}" ]]; then
  echo "▶ Invalidando caché de CloudFront (${CLOUDFRONT_DISTRIBUTION_ID})..."
  aws cloudfront create-invalidation \
    --distribution-id "${CLOUDFRONT_DISTRIBUTION_ID}" \
    --paths "/*" >/dev/null
  echo "  Invalidación creada."
fi

echo "✅ Deploy completado en s3://${S3_BUCKET}"
