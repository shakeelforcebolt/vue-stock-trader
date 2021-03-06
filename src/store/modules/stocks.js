import stocks from "../../data/stocks";


const state = {
    stocks:[]
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    // 'RND_STOCKS' (state){

    // }
};

const actions = {
    buyStock: ({commit})=>{
        commit();
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks)
    },
    randomizeStaocks: ({commit}) =>{
        commit('RND_STOCKS')
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}