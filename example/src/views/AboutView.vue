<template>
  <div class="about">
    <h1>This is an about page</h1>
    <kye-button>test</kye-button>
    <kye-input v-model="name"></kye-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
</script>
