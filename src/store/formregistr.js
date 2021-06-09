export default ({
   namespaced: true,
   state: {
      login:false,
      fields: [{
         name: 'login',
         placeholder: 'Enter Login',
         type: 'text',
         value: '',
         title: 'Login'
      },
      {
         name: 'password',
         placeholder: 'Enter password',
         type: 'password',
         value: '',
         title: 'Password'
      }]
   },
   getters: {
      login: state => state.login,
      fields: state => state.fields,
   },
   mutations: {
      signIn: (state) => state.login = !state.login,
      onInput: (state, {index, value}) => state.fields[index].value = value,
   },
   actions: {
      signIn(context) {
         context.commit('signIn')
      },
      onInput({commit}, {index, value}) {
         commit('onInput', {index,value})
      }
   },
   modules: {
   },
})