    <!-- <div v-if="isLoggedIn">
      <p>Welcome, {{ username }}!</p>
      <button >Logout</button>
    </div> -->
    <!-- <div v-if="!isLoggedIn && loginAttempted">
      <p>Invalid username or password.</p>
    </div> -->

    <!--let isLoggedIn: ref(false),
let loginAttempted: ref(false),
///////////////////////////////////


<template>

  < class=" bg-cover-img bg-cover h-screen w-full"
  <div class="bg-black h-screen w-full">
    <form @submit.prevent="login" class="bg-opacity-50 bg-rgba(255, 255, 255, 0.8)  drop-shadow-2xl mx-80 mt-36   ">
      <div id="label1" class="ml-44">
      <label for="username" class="block text-sm font-bold text-black">
    Username</label>
    <input type="text" class= "border-2 border-slate-400 placeholder-black " v-model="username" placeholder="Enter your name"/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid .
    </p>
</div>
    <div id="label2" class="ml-44">
      <label for="password" class="block text-sm font-bold text-black">password</label>
    <input v-model="password" required placeholder="Enter your password" type="password" class= "border-2 border-slate-400 placeholder-black "/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid password .
    </p>
  </div>
      <br>
      <button @click="goToMain" class="ml-60 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
Login</button>
    </form>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

let username=ref('')
let password=ref('')

let router=useRouter()
let goToMain=ref(()=>{
  router.push({name:"mainPage"})
});

</script>

//////////////////////////////////
<template>
  <div class="bg-black h-screen w-full">
    <form @submit.prevent="login" class="bg-opacity-50 bg-rgba(255, 255, 255, 0.8) drop-shadow-2xl mx-80 mt-36">
      <div class="ml-44">
        <label for="username" class="block text-sm font-bold text-black">Username</label>
        <input type="text" class="border-2 border-slate-400 placeholder-black" v-model="username" placeholder="Enter your name"/>
        <p class="mt-2 text-pink-600 text-sm" v-if="!isUsernameValid">Please provide a valid username.</p>
      </div>
      <div class="ml-44">
        <label for="password" class="block text-sm font-bold text-black">Password</label>
        <input v-model="password" required placeholder="Enter your password" type="password" class="border-2 border-slate-400 placeholder-black"/>
        <p class="mt-2 text-pink-600 text-sm" v-if="!isPasswordValid">Please provide a valid password.</p>
      </div>
      <br>
      <button @click="goToMain" class="ml-60 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Login
      </button>
      <p class="mt-2 text-pink-600 text-sm" v-if="loginError">{{ loginError }}</p>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

let username = ref('');
let password = ref('');
let isUsernameValid = ref(true); // Flag to track username validation
let isPasswordValid = ref(true); // Flag to track password validation
let loginError = ref(''); // Error message for login

let router = useRouter();

const login = () => {
  // Basic validation
  if (!username.value) {
    isUsernameValid.value = false;
    return;
  } else {
    isUsernameValid.value = true;
  }

  if (!password.value) {
    isPasswordValid.value = false;
    return;
  } else {
    isPasswordValid.value = true;
  }

  // Simulate login (you should replace this with your actual authentication logic)
  if (username.value === 'your_username' && password.value === 'your_password') {
    // Successful login, navigate to the main page
    router.push({ name: "mainPage" });
  } else {
    // Failed login
    loginError.value = 'Invalid username or password.';
  }
};

const goToMain = () => {
  router.push({ name: "mainPage" });
};
</script>
<style>

</style>
-->

