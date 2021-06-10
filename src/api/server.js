const user = {
   email: "admin@admin.com",
   password: "admin"
}
let baseUrl = `http://65.21.188.112/api/users/login?email=${user.email}&password=${user.password}`;
export default function makeRequest(url = '', options = {
   method: 'POST',
   headers: {
      'accept': 'application/json',
      
   },
   body: JSON.stringify(user)
}) {
   fetch(baseUrl + url, options)
      .then((data) => data.json())
      .then((data) => console.log(data))
      .catch(error => {
         console.log(`ошибка: ${error}`);

      })
}

