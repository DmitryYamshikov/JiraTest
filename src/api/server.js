let baseUrl = `http://65.21.188.112/api/`;
//базовый запрос
//TODO оптимизировать запрос. Уменьшить повторения. Переместить все запросы в server.js
export default function makeRequest(url = "", options = {}) {
  return fetch(baseUrl + url, options);
}
// const user = {
//    email: "admin@admin.com",
//    password: "admin"
// }
// users/login?email=${user.email}&password=${user.password}
// method: 'POST',
//   headers: {
//    'accept': 'application/json',
//
// },
