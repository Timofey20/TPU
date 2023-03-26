<template>
  <div class="container">
    <h2>Исходные данные</h2>
    <FormDefault />
  </div>
</template>

<script>
import FormDefault from './components/FormDefault.vue'
import '@/styles/style.scss'

export default {
  name: 'App',
  components: { FormDefault }
}
</script>
