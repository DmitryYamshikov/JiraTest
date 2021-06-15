import makeRequest from "../api/server";

export default ({
    namespaced: true,
    state: {
        dashList:[]
    },
    getters:{
        dashList: state=>state.dashList
    },
    mutations: {
        getDashboard: (state, obj) =>{
            state.dashList = obj;
        }
    },
    actions:{

        getDashboard(store) {
            makeRequest('dashboards', {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(data=>data.json())
                .then(data=> {
                    console.log(data)
                    store.commit('getDashboard', data.data)
                })
        }
    }

})