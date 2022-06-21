export function arrayOfObjectsHasDuplicatePropertyValues(arrayOfObjects: Array<Record<string, unknown>>, key: string): boolean {
  let foundCounter = 0;

  const uniqueValues = new Set(arrayOfObjects.map(v => {
    if (key in v) {
      foundCounter++;
      return v[key];
    }
  }));

  uniqueValues.delete(undefined);

  return (uniqueValues.size < foundCounter);
}
