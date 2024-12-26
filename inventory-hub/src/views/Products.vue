<template>
    <div class="products">
      <add-product-modal
        :visible="showModal"
        @save="handleSave"
        @cancel="handleCancel"
      />
      <table-component
        :products="productList"
        @edit-product="onEdit"
        @delete-product="onDelete"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  import { useStore } from 'vuex'
  import TableComponent from '@/components/Table.vue'
  import AddProductModal from '@/components/AddProductModal.vue'
  
  const store = useStore()
  const showModal = ref(false)
  
  // Загружаем товары при монтировании
  onMounted(() => {
    store.dispatch('fetchProducts')
  })
  
  // Геттер для продуктов из Vuex
  const productList = computed(() => store.state.products)
  
  function handleSave(product) {
    // Проверяем, если редактируем или добавляем
    if (product.id) {
      // store.dispatch('updateProduct', product)
    } else {
      store.dispatch('addProduct', product)
    }
    showModal.value = false
  }
  
  function handleCancel() {
    showModal.value = false
  }
  
  function onDelete(productId) {
    store.dispatch('deleteProduct', productId)
  }
  
  function onEdit(product) {
    // Логика: можно открыть ту же форму, но заполнить данными для редактирования
    // В simplest way, нужна отдельная модалка. Или можно переиспользовать ту же, но с состоянием:
    showModal.value = true
    // можно заполнить данные product в AddProductModal (через props или provide/inject)
  }
  </script>
  
  <style lang="scss" scoped>
  .products {
    // стили
  }
  </style>
  