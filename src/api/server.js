
let baseUrl = `http://65.21.188.112/api/`;
export default function makeRequest(url = '', options = {}){
   try {
      return fetch(baseUrl + url, options)
   } catch (e) {
      console.log(e)
   }
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
