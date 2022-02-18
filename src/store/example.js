export default {
    state: {
        message:"hello vuex",
        users:[],
        admin:false,

    },
    mutations: {
        setMessage(state,payload){
            state.message = payload;
        }
    },
    actions: {
        setMessage({commit},payload){
            // let mes = "Hello again";
            commit("setMessage",payload);
        }
    },
    getters: {
        getMessage(state){
            return state.message;
        }
    },
}