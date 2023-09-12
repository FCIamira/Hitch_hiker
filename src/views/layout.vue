<template>
  <!-- #231f3a; -->
  <div class="display h-[100vh]">
    <dashboard />

    <router-view></router-view>
  </div>
</template>
<script setup>
import dashboard from "@/components/dashboard.vue";
</script>

<style>
.display {
  display: grid;
  grid-template-columns: auto 1fr;
}
/* .p{
  background-color: blue;
  width: 200px;
  height: 200px;
  text-align: center;
  padding: 100px;
} */
</style>

<!-- <button @click="show = !show" v-if="!show">
  <i class="fas fa-arrow-right"></i>
</button>
<button @click="show = !show" v-if="show">
  <i class="fas fa-arrow-left"></i>
</button>

const closeModel = () => {
  show.value = !show.value;
};
@closeModel="closeModel" -->
