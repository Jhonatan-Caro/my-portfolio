"use client";

import { useEffect, useState } from "react";

export function Availability({ label }: { label: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Madrid",
        }).format(new Date()),
      );
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="flex items-center gap-2 font-mono text-label text-muted">
      <span className="relative flex size-2" aria-hidden="true">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-positive/60 motion-reduce:hidden" />
        <span className="relative inline-flex size-2 rounded-full bg-positive" />
      </span>
      {label}
      {time && <span className="text-muted/70">· {time} España</span>}
    </p>
  );
}
