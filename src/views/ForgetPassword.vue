<template >
<div
class="bgForgetPass grid items-center md:grid-cols-2 grid-cols-1 grid-flow-col gap-4"
>
<Form
:validation-schema="schema" @submit="goToHome"
class="bg-white   p-2 w-3/4 h-4/4  mx-auto order-solid border-2
 rounded-lg drop-shadow-2xl "
>
<div id="label3" class="pt-5 w-full text-center pb-2">
<p class="text-3xl flex justify-center text-teal-500 font-bold">
LOGIN
</p>
<Field
type="text"
name="firstname"
class="p-4 m-4 w-10/12 border-2 border-slate-400 rounded-lg placeholder-slate-600"
v-model="firstname"
placeholder="enter username or phone number"
/>
<ErrorMessage name="firstname" class="text-red-600 block" v-if="!firstname.isVaalid" >
</ErrorMessage>
<Field
type="password"
name="password"
class="p-4 m-2 w-10/12 border-2 border-slate-400 rounded-lg placeholder-slate-600"
v-model="password"
placeholder="Enter your password"
/>
<ErrorMessage name="password"
v-if="!password.isVaalid" 
class="text-red-600 block">
 
</ErrorMessage>
</div>
<div class="labrl3 p-4 ml-11 flex flex-row-1">
            <label for="checkbox" class="mr-24  ">
              <input id="checkbox" type="checkbox" class=" w-4 h-4 mr-3" />Remember me</label
            >
            <button @click="ForgetPassword" style="color: blue"> ForgetPassword?</button>
        </div>
<div class="w-full text-center pb-2">

<button
class="mt-5 p-4 w-10/12 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 
focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 "
      v-if="schema"
>
login
<!-- <a href="./home.vue"> login</a> -->
</button>
</div>
<div class="registerlink p-2 ml-[150px]">
  <p class="w-[400px] ">
    Do not Have an account?! <a href="./signup" style="color: blue"> Register?</a>
  </p>
</div>
</Form>
</div>
</template>

<script setup>
import {ref ,watch} from "vue"
import { useRouter } from "vue-router";
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const router = useRouter();
const password = ref("");
let firstname = ref("");
const schema = yup.object().shape({
  
  firstname: yup
    .string()
    .min(1, (data) => `Password minimal ${data.min} to  required`)
    .required((data) => `${data.path} please enter text`)
    .label('text'),
  password: yup
    .string()
    .min(5, (data) => `Password minimal ${data.min} karakter`)
    .required((data) => `${data.label} please enter valid password`)
    .label('Password'),
})
const goToHome = () => {
    router.push({
      name: "home"
    });
  };
  const ForgetPassword = (()=>{
  router.push({name:"ForgetPassword"})
})
  watch(firstname, () => {
        firstname.value.isVaalid        // email = `${newValue}@gmail.com`
  })
  
</script>
<style>
Field {
width: 350px;
height: 50px;
padding: 2px;
}
.w-12 {
position: absolute;
right: 29px;
margin-top: -81px;
}
.bgForgetPass{
  background-image: url("../assets/ForgetPass.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>