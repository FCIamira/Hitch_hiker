<template>
  <img class="opps" src="../assets/oops.jpg" alt="" />
  <h1>404-PAGE NOT FOUND</h1>
  <p>
    The page you are looking for might have been removed had its name changed or
    is temporarily unavailable.
  </p>
  <button class="btn1" @click="error">GO TO HOME PAGE</button>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
let router = useRouter();
let error = ref(() => {
  router.push({ name: "home" });
});
</script>
<style>
h1 {
  color: black;
  font-size: 30px;
  text-align: center;
  margin-top: 2%;
  padding-left: 4%;
}
.opps {
  margin: auto;
  margin-top: 6%;
}
p {
  width: 69%;
  padding-left: 39%;
  font-size: 17px;
}
.btn1 {
  color: white;
  width: 18%;
  background-color: blue;
  font-size: 26px;
  border-radius: 22px;
}
.btn1:hover {
  color: rgb(191, 191, 191);
  background-color: white;
}
</style>
