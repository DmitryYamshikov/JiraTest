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
      valid: 123,

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
      onSubmit: (store, router) => {
         if (store.state.fields[0].value.length>1 || store.state.fields[1].value.length>1) {
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
                 console.log(data)
                 store.rootState.login = !store.rootState.login;
                 store.rootState.currentUser = data.user;
                 store.rootState.token = data.token;
                 localStorage.setItem('token', data.token);
                 localStorage.setItem('currentUser', JSON.stringify(data.user));

                 router.push({name:'Dash'})
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
