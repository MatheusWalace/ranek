export function serializei(obj) {
  let quaryString = '';
  for (let key in obj) {
    quaryString += `&${key}=${obj[key]}`;
  }
  return quaryString;
}
