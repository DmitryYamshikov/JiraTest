export default function formDate(date) {
  let dateMls = new Date(Date.parse(date));
  return `${dateMls.getDate()}.${dateMls.getMonth() +
    1}.${dateMls.getFullYear()}`;
}
