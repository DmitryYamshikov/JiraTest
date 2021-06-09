let baseUrl = 'https://jsonplaceholder.typicode.com/posts';

export default function makeRequest(url='', options={}) {
   fetch(baseUrl + url, options)
   .then((data)=>data.json())
   .then((data)=>console.log(data))
      .catch(error => {
         console.log(`ошибка: ${error}`);

      })
   
}