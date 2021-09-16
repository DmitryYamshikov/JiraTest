export default function formDate(date) {

  let dateMls = new Date(Date.parse(date)),
    day = dateMls.getDate()<10 ? '0'+dateMls.getDate() : dateMls.getDate(),
    month = Number(dateMls.getMonth()+1)<10 ? ('0'+dateMls.getMonth()) : (dateMls.getMonth())+1;

  return `${day}.${month}.${dateMls.getFullYear()}`;
}
