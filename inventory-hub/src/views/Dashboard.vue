<template>
  <div class="dashboard-page">
    <h1 class="dashboard-page__title">Главная панель</h1>

    <!-- Карточки с метриками -->
    <div class="dashboard-page__metrics-summary">
      <div class="metrics-card">
        <h3>Общее количество товаров</h3>
        <p>{{ totalProductsQuantity }}</p>
      </div>
      <div class="metrics-card">
        <h3>Количество категорий</h3>
        <p>{{ totalUniqueCategories }}</p>
      </div>
      <div class="metrics-card">
        <h3>Общая стоимость товаров</h3>
        <p>${{ totalInventoryValue }}</p>
      </div>
      <div class="metrics-card">
        <h3>Самый популярный товар</h3>
        <p>{{ mostPopularProductName }}</p>
      </div>
    </div>

    <!-- Графики и диаграммы -->
    <div class="dashboard-page__charts-section">
      <MetricsChart />
    </div>

    <!-- Список последних товаров -->
    <div class="dashboard-page__recent-products">
      <h2>Последние добавленные товары</h2>
      <ProductsTable :products="recentlyAddedProducts" />
      <button @click="navigateToProductsPage">Смотреть все товары</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

// Импорты компонентов
import MetricsChart from '@/components/Metrics.vue'
import ProductsTable from '@/components/Table.vue'

// Инициализация Vuex Store
const store = useStore()
const router = useRouter()

// Метрики (рассчитываются на основе данных из Vuex Store)
const totalProductsQuantity = computed(() => {
  return store.state.products.reduce((total, product) => total + product.quantity, 0)
})

const totalUniqueCategories = computed(() => {
  const uniqueCategories = new Set(store.state.products.map(product => product.category))
  return uniqueCategories.size
})

const totalInventoryValue = computed(() => {
  return store.state.products.reduce((total, product) => total + (product.price * product.quantity), 0)
})

const mostPopularProductName = computed(() => {
  return store.state.products.length > 0 ? store.state.products[0].name : 'Нет данных'
})

// Последние добавленные товары (показываем последние 5 позиций)
const recentlyAddedProducts = computed(() => {
  return store.state.products.slice(-5)
})

// Загрузка товаров при монтировании компонента
onMounted(() => {
  store.dispatch('fetchProducts')
})

// Метод для перехода на страницу товаров
function navigateToProductsPage() {
  router.push('/products')
}
</script>

<style lang="scss" scoped>
.dashboard-page {
  padding: 2rem;

  &__title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  &__metrics-summary {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .metrics-card {
    flex: 1;
    padding: 1.5rem;
    background-color: #f3f4f6;
    border-radius: 12px;
    text-align: center;

    h3 {
      margin-bottom: 0.75rem;
      color: #555;
      font-size: 1.2rem;
    }

    p {
      font-size: 2rem;
      font-weight: bold;
      margin: 0;
    }
  }

  &__recent-products {
    margin-top: 4rem;

    button {
      margin-top: 1rem;
      padding: 0.75rem 2rem;
      background-color: #1976D2;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;

      &:hover {
        background-color: #1565C0;
      }
    }
  }
}
</style>
