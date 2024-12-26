<template>
    <nav class="sidebar">
      <ul class="sidebar__list">
        <li class="sidebar__item">
          <router-link to="/">Dashboard</router-link>
        </li>
        <li class="sidebar__item">
          <router-link to="/products">Products</router-link>
        </li>
        <li class="sidebar__item">
          <router-link to="/metrics">Metrics</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup lang="ts"></script>
  
  <style lang="scss" scoped>
  .sidebar {
    height: 100vh;
    background-color: #333;
    color: #fff;
    padding: 1rem;
  
    &__list {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  
    &__item {
      margin-bottom: 1rem;
  
      a {
        color: #fff;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  </style>
  