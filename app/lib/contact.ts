/** A bracketed value is still a Client placeholder, so it must not become a link. */
export function isPlaceholder(value: string): boolean {
  return value.trim().startsWith("[");
}

/** Strip spaces so `tel:` dials correctly; the visible text keeps the Client's spacing. */
export function telHref(value: string): string {
  return `tel:${value.replace(/\s+/g, "")}`;
}

export function mailHref(value: string): string {
  return `mailto:${value}`;
}
