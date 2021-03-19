import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        career_form: {
            name: '',
            phone: '',
        },
    },
    mutations: {
        setCareerName(state, name) {
            state.career_form.name = name;
        },
        setCareerPhone(state, phone) {
            state.career_form.phone = phone;
        },
    },
    actions: {},
});
