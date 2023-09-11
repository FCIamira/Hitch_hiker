<template>
  <div class="Card">
    <h1>Card</h1>
    <p>{{ props.data.name }}</p>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps(["data"]);
console.log(props);
</script>
