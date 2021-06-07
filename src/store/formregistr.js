export default ({
   namespaced: true,
   state: {
      login: false,
      fields: [{
         name: 'login',
         placeholder: 'Enter Login',
         type: 'text',
         value: '123',
         title: 'Login'
      },
      {
         name: 'password',
         placeholder: 'Enter password',
         type: 'password',
         value: '2',
         title: 'Password'
      }]
   },
   getters: {
      login: state => state.login,
      fields: state => state.fields,
   },
   mutations: {
      signIn: (state) => state.login = !state.login,
   },
   actions: {
      signIn(context) {
         context.commit('signIn')
      },
   },
   modules: {
   },
})