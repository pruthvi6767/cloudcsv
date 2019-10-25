import {
    getTables,
    getTable,
    create,
    deleteFromDataBase
} from "@/api/Tables.api"

export default {
    namespaced: true,
    state: {
        items: [],
    },
    getters:{
        getTables(state) {
            return state.items;
        }
    },
    actions: {
        createTable({commit}, payload) {
            return create(payload);
        },
        fetchAll({ commit}) {
            return getTables();
        },
        fetch({ commit},id) {
            return getTable(id);
        },
        deleteTable({commit},id){
            return deleteFromDataBase(id);
        }
    },
    mutations: {
        SET_TABLES(state, data) {
            state.items = data;
        },
        REMOVE_TABLE(state,index){
            state.items.splice(index,1);
        }
    }
}