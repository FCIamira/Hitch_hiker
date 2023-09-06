<template>
    <div>login and signup</div>
   
  <button @click="goToMain">Login</button>
  </template>
  <script setup>
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  let router=useRouter()
  let goToMain=ref(()=>{
    router.push({name:"mainPage"})
  });
  
  </script>
  