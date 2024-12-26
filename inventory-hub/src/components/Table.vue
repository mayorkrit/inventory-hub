<template>
    <table class="table">
      <thead class="table__head">
        <tr>
          <th class="table__th">ID</th>
          <th class="table__th">Name</th>
          <th class="table__th">Category</th>
          <th class="table__th">Quantity</th>
          <th class="table__th">Price</th>
          <th class="table__th">Actions</th>
        </tr>
      </thead>
      <tbody class="table__body">
        <tr
          class="table__row"
          v-for="product in products"
          :key="product.id"
        >
          <td class="table__td">{{ product.id }}</td>
          <td class="table__td">{{ product.name }}</td>
          <td class="table__td">{{ product.category }}</td>
          <td class="table__td">{{ product.quantity }}</td>
          <td class="table__td">{{ product.price }}</td>
          <td class="table__td">
            <button class="table__btn" @click="$emit('edit-product', product)">Edit</button>
            <button class="table__btn table__btn--danger" @click="$emit('delete-product', product.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup lang="ts">
  import { PropType } from 'vue'
  interface Product {
    id: number
    name: string
    category: string
    quantity: number
    price: number
  }
  
  const props = defineProps({
    products: {
      type: Array as PropType<Product[]>,
      default: () => []
    }
  })
  
  // События: edit-product, delete-product
  </script>
  
  <style lang="scss" scoped>
  .table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
  
    &__head {
      background-color: #eee;
    }
  
    &__th, &__td {
      border: 1px solid #ccc;
      padding: 0.5rem;
      text-align: left;
    }
  
    &__row:hover {
      background-color: #fafafa;
    }
  
    &__btn {
      margin-right: 0.5rem;
      padding: 0.3rem 0.6rem;
      background-color: #1976d2;
      color: #fff;
      border: none;
      cursor: pointer;
  
      &--danger {
        background-color: #d32f2f;
      }
    }
  }
  </style>
  