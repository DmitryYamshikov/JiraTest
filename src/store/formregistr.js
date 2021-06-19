import makeRequest from "../api/server";


export default ({
   namespaced: true,
   state: {
      fields: [{
         name: 'login',
         type: 'text',
         value: 'admin@admin.com',
         title: 'Username'
      },
      {
         name: 'password',
         type: 'password',
         value: 'admin',
         title: 'Password'
      },
      ],
      valid: 123, //валидно true или false. 123 в данном случае заглушка 

   },
   getters: {
      fields: state => state.fields,
      valid: state=> state.valid
   },
   mutations: {
      onInput: (state, { index, value }) => state.fields[index].value = value,
      validChange: (state, value)=>state.valid = value,
   },
   actions: {
      onInput({ commit }, { index, value }) {
         commit('onInput', { index, value })
      },
      //TODO сделать нормальную валидацию
      onSubmit: (store, router) => {
         if (store.state.fields[0].value.length>1 || store.state.fields[1].value.length>1) { //элементарная проверка что поля не пустые
            store.commit('validChange',true);
            makeRequest(`users/login?email=${store.state.fields[0].value}&password=${store.state.fields[1].value}`,
     {
               method:"POST",
               headers: {
                  'accept':'application/json'
               }
            })
              .then(data=>{
                 if (data.ok) {
                    return data.json()
                 } else {
                    store.commit('validChange',false);
                    throw new Error();
                 }
              })
              .then(data=>{
                 store.rootState.login = !store.rootState.login;  //меняем статус Login, что пользователь зашел
                 store.rootState.currentUser = data.user; //TODO сохраняем пользователя
                 store.rootState.token = data.token; //TODO ненужное сохранение
                 localStorage.setItem('token', data.token); //сохраняем token для последующих запросов
                 localStorage.setItem('currentUser', JSON.stringify(data.user)); //сохраняем текущего пользователя
                 router.push({name:'Dash'}) //переход на главную страницу
              })
              .catch((error)=>{
                  console.log(error)
              })

         } else {store.commit('validChange',false)}

      }

   },
   modules: {
   },
})
