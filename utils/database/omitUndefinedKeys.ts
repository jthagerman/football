// When obtaining data from POST/GET you don't always know if this data is undefined.
// This utility creates an object excluding all undefined items.
export default function omitUndefinedKeys(values: { [key: string]: any }): {
  [key: string]: any;
} {
  const document: { [key: string]: any } = {};
  const keys = Object.keys(values);
  for (let i = 0; i < keys.length; i++) {
    if (values[keys[i]] !== undefined) {
      document[keys[i]] = values[keys[i]];
    }
  }
  return document;
}
