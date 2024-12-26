<template>
  <div class="modal" v-if="visible">
    <div class="modal__content">
      <h2 class="modal__title">Добавить товар</h2>
      <form @submit.prevent="onSave" class="modal__form">
        <label class="modal__label">
          Название:
          <input type="text" v-model="formData.name" required />
        </label>

        <label class="modal__label">
          Категория:
          <input type="text" v-model="formData.category" required />
        </label>

        <label class="modal__label">
          Количество:
          <input type="number" v-model="formData.quantity" required />
        </label>

        <label class="modal__label">
          Цена:
          <input type="number" step="0.01" v-model="formData.price" required />
        </label>

        <div class="modal__buttons">
          <button type="submit" class="modal__btn">Сохранить</button>
          <button type="button" class="modal__btn" @click="onCancel">Отмена</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  visible: Boolean
})
const emits = defineEmits(['save', 'cancel'])

const formData = ref({
  name: '',
  category: '',
  quantity: 0,
  price: 0
})

function onSave() {
  emits('save', { ...formData.value })
  resetForm()
}

function onCancel() {
  emits('cancel')
  resetForm()
}

function resetForm() {
  formData.value = {
    name: '',
    category: '',
    quantity: 0,
    price: 0
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    background-color: #fff;
    padding: 2rem;
    width: 400px;
    border-radius: 5px;
  }

  &__title {
    margin: 0 0 1rem;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }

  &__label {
    margin-bottom: 1rem;
  }

  &__buttons {
    display: flex;
    justify-content: flex-end;
  }

  &__btn {
    padding: 0.5rem 1rem;
    margin-left: 1rem;
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
