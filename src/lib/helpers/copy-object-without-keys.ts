export function copyObjectWithoutKeys<T>(obj: Record<string, unknown>, keys: Array<string>): T {
  const exclude = new Set(keys);

  return Object.fromEntries(Object.entries(obj)
    .filter(e => !exclude.has(e[0]))
  ) as unknown as T;
}
