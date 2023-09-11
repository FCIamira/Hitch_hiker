<template>
  <div class="backg grid grid-cols-2 grid-flow-col gap-4">
    <div><img src="../assets/login-page.png" /></div>
    <!-- <div class="bg-black h-screen w-full"> -->
    <form
      @submit.prevent="login"
      class="bg-white mt-24 p-2 w-3/4 h-4/6 mar order-solid border-2 rounded-lg drop-shadow-2xl"
    >
      <div id="label1" class="pt-8 w-full text-center pb-2">
        <label for="username" class="block text-sm font-bold text-black">
        </label>
        <input
          type="text"
          class="p-4 w-10/12 border-2 border-slate-400 placeholder-black"
          v-model="username"
          placeholder="Enter your name"
        />
        <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
          Please provide a valid .
        </p>
        <div class="w-12"></div>
      </div>

      <div id="label2" class="pt-8 w-full text-center pb-2">
        <!-- <label for="password" class="block text-sm font-bold text-black">password</label> -->
        <input
          v-model="password"
          placeholder="Enter your password"
          type="password" min="8"
          class="w-10/12 border-2 border-slate-400 placeholder-black"
        />
        <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
          Please provide a valid password .
        </p>
        <div class="labrl3 p-4 ml-11 flex flex-row-1">
            <label for="checkbox" class="mr-24  ">
              <input id="checkbox" type="checkbox" class="w-4 h-4 mr-3" />Remember me</label
            >
            <a href="#" style="color: blue"> ForgetPassword?</a>
        </div>
        <div class="w-full text-center pb-2">
          <button
            @click="login"
            class="mt-5 p-4 w-10/12 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Login
          </button>
        </div>
      </div>
      
      <div class="registerlink p-4 ml-44">
        <p>
          Do not Have an account?!
          <a href="./signup" style="color: blue"> Register?</a>
        </p>
      </div>

    </form>
  </div>
  
  <p>{{ loginError }}</p>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

let username = ref("");
let password = ref("");
let errormsg = ref("errrrrror");

// let UsernameValid = ref(true);
// let PasswordValid = ref(true);
let loginError = ref("");

let router = useRouter();

const login = () => {
  if (
    username.value  &&
    password.value 
  ) {
    router.push({ name: "home" });
  }
    else {
    alert(errormsg.value)
  }
};

// const goToMain = () => {
//   router.push({ name: "mainPage" });
// };
</script>
<style>
input {
  width: 350px;
  height: 50px;
  padding: 20px;
}
.w-12 {
  position: absolute;
  right: 29px;
  margin-top: -81px;
}
</style>
