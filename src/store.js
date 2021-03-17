import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const userM = {
    state: {
        userID: '',
        orner: null
    },
    mutations: {
        setID(state, payload) {
            state.userID = payload;
        },
        setOrner(state, payload) {
            state.orner = payload;
        }
    },
    actions: {
        setID({ commit }) {
            commit('setID');
        }
    },
    getters: {
        getID() {
            return this.state.userID;
        }
    }
};

export default new Vuex.Store({
    modules: {
        user: userM
    }
});
