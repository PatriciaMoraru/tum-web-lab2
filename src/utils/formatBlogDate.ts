export function formatBlogDate(raw: unknown): string {
  if (raw == null || raw === "") return "";

  let d: Date;
  if (raw instanceof Date) {
    d = raw;
  } else {
    const s = String(raw).trim();
    d = new Date(s);
  }

  if (Number.isNaN(d.getTime())) return String(raw);

  return new Intl.DateTimeFormat("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}
