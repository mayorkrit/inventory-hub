<template>
  <div class="app">
    <sidebar class="app__sidebar" />
    <div class="app__content">
      <header-component 
        class="app__header" 
        @show-add-product-modal="showModal = true" 
      />
      <router-view class="app__router-view" />
      
      <!-- Модалка для добавления товара -->
      <add-product-modal 
        :visible="showModal" 
        @save="handleSaveProduct" 
        @cancel="showModal = false" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '@/components/Sidebar.vue'
import HeaderComponent from '@/components/Header.vue'
import AddProductModal from '@/components/AddProductModal.vue'
import { useStore } from 'vuex'

// Состояние для управления модалкой
const showModal = ref(false)

// Vuex Store
const store = useStore()

// Сохранение нового товара
function handleSaveProduct(newProduct) {
  store.dispatch('addProduct', newProduct)
  showModal.value = false
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  min-height: 100vh;

  &__sidebar {
    width: 240px;
    background-color: #333;
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__router-view {
    flex: 1;
    padding: 1rem;
  }
}
</style>
