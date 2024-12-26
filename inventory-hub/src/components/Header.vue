<template>
  <header class="header">
    <input
      class="header__search"
      type="text"
      placeholder="Поиск..."
      v-model="searchValue"
    />
    <button class="header__button" @click="emitShowAddProductModal">
      Добавить товар
    </button>
  </header>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const emits = defineEmits(['show-add-product-modal'])
const searchValue = ref('')

function emitShowAddProductModal() {
  emits('show-add-product-modal')
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;

  &__search {
    flex: 1;
    margin-right: 1rem;
    padding: 0.5rem;
  }

  &__button {
    padding: 0.5rem 1rem;
    background-color: #1976d2;
    color: #fff;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #1565c0;
    }
  }
}
</style>
