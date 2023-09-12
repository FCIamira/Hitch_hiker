<template>
<div
class="backg grid items-center md:grid-cols-2 grid-cols-1 grid-flow-col gap-4"
>
<div class="md:block hidden">
<img src="../assets/signup-img.png" />
</div>

<!-- <div class="bg-black h-screen w-full"> -->
<Form
:validation-schema="schema" @submit="onSubmit"
@submit.prevent="login"
class="bg-white   p-2 w-3/4 h-4/4 md:m-0 mx-auto order-solid border-2 rounded-lg drop-shadow-2xl"
>
<div id="label3" class="pt-5 w-full text-center pb-2">

<p class="text-3xl flex justify-center text-teal-500 font-bold">
SIGN-UP
</p>
<label
for="username"
class="block text-sm font-bold text-black"
></label>
<Field
type="text"
name="firstname"
class="p-4 m-4 w-10/12 border-2 border-slate-400 rounded-lg placeholder-slate-600"
v-model="firstname"
placeholder="First Name"
/>
<ErrorMessage name="firstname" class="text-red-600 block" >
</ErrorMessage>
<Field
type="text"
name="lastname"
class="p-4 m-2 w-10/12 border-2 border-slate-400 rounded-lg placeholder-slate-600"
v-model="lastname"
placeholder="Last Name"
/>
<ErrorMessage  name="lastname"
 class="text-red-600 block ">
</ErrorMessage>
<Field
type="number"
name="phoneNumber"
class="p-4 m-2 w-10/12 border-2 border-slate-400 rounded-lg placeholder-slate-600"
v-model="phoneNumber"
placeholder="enter phoneNumber"
/>
<ErrorMessage class="text-red-600 block" name="phoneNumber"
>
</ErrorMessage>
<Field
type="email"
name="email"
class="p-4 m-2 w-10/12 border-2 border-slate-400 rounded-lg placeholder-slate-600"
v-model="email"
placeholder="enter Email "
/>
<ErrorMessage name="email"
 class="text-red-600 block">
</ErrorMessage>
<Field
type="password"
name="password"
class="p-4 m-2 w-10/12 border-2 border-slate-400 rounded-lg placeholder-slate-600"
v-model="password"
placeholder="Enter your password"
/>
<ErrorMessage name="password"
 class="text-red-600 block">
</ErrorMessage>
<Field
type="password"
name="confirm_password"
class="p-4 m-2 w-10/12 border-2 border-slate-400 rounded-lg placeholder-slate-600"
v-model="confirm_password"
placeholder="Enter your confirm_password"
/>
<ErrorMessage name="confirm_password"
 class="text-red-600 block">
</ErrorMessage>
</div>
<div class="w-full text-center pb-2">
<button
@click="login"
class="mt-5 p-4 w-10/12 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
>
Sign-Up
</button>
</div>
<div class="registerlink p-4 mx-5 ml-12">
<ErrorMessage>
Alrady have an account ?!
<a href="./login" style="color: blue"> Login?</a>
</ErrorMessage>
</div>
<!-- </div> -->
<div class="registerlink p-4 mx-5 ml-12">
          <p>
            Alrady have an account ?!
            <a href="./login" style="color: blue"> Login?</a>
          </p>
        </div>
</Form>
</div>
<p>{{ loginError }}</p>
</template>

<script setup>
// import { useRouter } from "vue-router";
import { ref } from "vue";
import { Form, Field ,ErrorMessage} from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
firstname:yup.string().required(),
lastname:yup.string().required(),
email: yup.string().email().required(),
phoneNumber:yup.string().required(),
password: yup.string().required().min(8),
confirm_password:yup.string()
    .required()
    .min(8)
    .oneOf([yup.ref('password'), null], 'Passwords must match'), // Ensure password and confirm_password match
});

let onSubmit=ref((values)=> {
alert(JSON.stringify(values, null, 2));
})

</script>
<style>
Field {
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