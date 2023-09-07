<template>
  <img class="opps" src="../assets/oops.jpg" alt="" />
  <h1>404-PAGE NOT FOUND</h1>
  <p>
    The page you are looking for might have been removed had its name changed or
    is temporarily unavailable.You Can Return To Home Page.
  </p>
  <button class="btn1 	" @click="error">GO TO HOME PAGE</button>

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
  color: rgb(255, 0, 0);
  font-size: 40px;
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
  background-color: teal;
  font-size: 26px;
  border-radius: 22px;
  margin-left: 40%;
  margin-top: 3%;
}
.btn1:hover {
  color: white;
  background-color: rgb(6, 32, 32);
}
</style>
