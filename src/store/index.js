import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

const store = new Vuex.Store({
  state: {
    carts: [],
    products: [
      {
        id: 1,
        name: "Strawberry",
        price: 1,
        url: "https://images.pexels.com/photos/59945/strawberry-fruit-delicious-red-59945.jpeg",
        quantity: 1,
      },
      {
        id: 2,
        name: "Orange",
        price: 2,
        url: "https://images.pexels.com/photos/52533/orange-fruit-vitamins-healthy-eating-52533.jpeg",
        quantity: 1,
      },
      {
        id: 3,
        name: "Kiwi",
        price: 3,
        url: "https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        quantity: 1,
      },
    ],
  },
  getters: {
    carts: (state) => state.carts,
    products: (state) => state.products,
  },
  actions: {
    addToCart({ commit }, product) {
      commit("ADD_TO_CART", product);
    },
    setQuantity({ commit }, product) {
      commit("SET_QUANTITY", product);
    },
    removeFormCart({ commit }, product) {
      commit("REMOVE_FROM_CART", product);
    },
  },
  mutations: {
    ADD_TO_CART(state, data) {
      const newItem = data;
      const index = state.carts.findIndex((x) => x.id === newItem.id);
      if (index !== -1) {
        state.carts[index].quantity += 1;
      } else {
        state.carts.push(newItem);
      }
    },
    SET_QUANTITY(state, data) {
      const { id, quantity } = data;
      const index = state.carts.findIndex((x) => x.id === id);
      if (index !== -1) {
        state.carts[index].quantity += quantity;
      }
    },
    REMOVE_FROM_CART(state, data) {
      const { id } = data;
      const index = state.carts.findIndex((x) => x.id === id);
      if (index !== -1) {
        state.carts[index].quantity = 1;
      }
      state.carts = state.carts.filter((x) => x.id !== id);
    },
  },
  plugins: [createPersistedState()],
});

export default store;
