export function getUniqueId(prefix: string) {
  return `${prefix}_${Date.now()}`;
}
