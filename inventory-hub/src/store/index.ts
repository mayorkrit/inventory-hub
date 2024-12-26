import { createStore } from 'vuex'
import axios from 'axios'
import type { Product } from '@/types/product'

const store = createStore({
  state() { 
    return {
      products: [] as Product[]
    }
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload
    },
    ADD_PRODUCT(state, product: Product) {
      state.products.push(product)
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const { data } = await axios.get('http://localhost:3001/products')
      commit('SET_PRODUCTS', data)
    },
    async addProduct({ commit }, product) {
      const { data } = await axios.post('http://localhost:3001/products', product)
      commit('ADD_PRODUCT', data)
    }
  }
})

export default store
