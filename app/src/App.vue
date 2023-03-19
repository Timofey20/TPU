<template>
  <div class="container">
    <h2>Исходные данные</h2>
    <FormDefault />
    <button @click="formCheck()" type="button" class="btn btn-primary">Посчитать</button>
  </div>
</template>

<script>
import FormDefault from './components/FormDefault.vue'
import '@/styles/style.scss'

export default {
  name: 'App',
  methods: {
    formCheck() {
      setTimeout(() => {
        alert('Объект защищен')
      }, 1000);
    }
  },
  props: {
  },
  components: { FormDefault }
}
</script>
