<template >

  <div class="backg grid grid-cols-2 grid-flow-col gap-4">
    <div><img src="../assets/signup-img.png"></div>
  <!-- <div class="bg-black h-screen w-full"> -->
    <form  @submit.prevent="login" class=" bg-white  mt-24 p-2 w-3/4 h-4/4 mar order-solid border-2  rounded-lg drop-shadow-2xl "> 
          <p class="text-3xl  flex justify-center text-teal-500 font-bold">SIGN-UP</p>
      <div id="label1" class=" pt-8 w-full text-center pb-2">
      <label for="username" class="block text-sm font-bold text-black"></label>
    <input  type="text"  class= "p-4 w-10/12 border-2 border-slate-400 placeholder-black " v-model="firstname" placeholder="First Name"/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">Please provide a valid .</p>
    <input  type="text"  class= "p-4 w-10/12 border-2 border-slate-400 placeholder-black " v-model="lastname" placeholder="Last Name"/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">Please provide a valid .</p>
    <div class="w-12">
    </div>
   </div >

    <div id="label2"  class="pt-8 w-full text-center pb-2">
      <!-- <label for="password" class="block text-sm font-bold text-black">password</label> -->
      <input   v-model="email"  placeholder="Enter your E-mail" type="email" class= " w-10/12 border-2 border-slate-400 placeholder-black "/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">Please provide a valid email .</p>
    <input   v-model="password"  placeholder="Enter your password" type="password" class= " w-10/12 border-2 border-slate-400 placeholder-black "/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">Please provide a valid password .</p>
    <div class="w-full text-center pb-2">
  <button @click="login" class=" mt-5 p-4 w-10/12 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
Sign-Up</button>
</div>
   <div class="registerlink p-4 mx-5 ml-12 ">
    <p>Alrady have an account ?! 
    <a href="./login" style="color:blue"> Login?</a></p>
   </div>
  </div>
 
  

    </form> 


  </div>
  <p>{{ loginError }}</p>

</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

let username = ref('');
let password = ref('');
// let UsernameValid = ref(true); 
// let PasswordValid = ref(true); 
let loginError = ref(''); 

let router = useRouter();

const login = () => {


  if (username.value === 'your_username' && password.value === 'your_password') {
    router.push({ name: "mainPage" });
  }
};

// const goToMain = () => {
//   router.push({ name: "mainPage" });
// };
</script>
<style>
input{
  width: 350px;
  height: 50px;
  padding:20px
  
}
.w-12{
  position: absolute;
  right: 29px;
  margin-top:-81px ;
}
</style>