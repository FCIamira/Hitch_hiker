<template>
  <div
    class="backg grid items-center md:grid-cols-2 grid-cols-1 grid-flow-col gap-4"
  >
    <div class="md:block hidden">
      <img src="../assets/login-page.png" />
    </div>
    <Form
      :validation-schema="schema"
      @submit="login"
      class="bg-white p-2 w-3/4 h-4/4 md:m-0 mx-auto order-solid border-2 rounded-lg drop-shadow-2xl"
    >
      <div id="label3" class="pt-5 w-full text-center pb-2">
        <p class="text-3xl flex justify-center text-blue-700 font-bold">
          LOGIN
        </p>
        <Field
          type="text"
          name="firstname"
          class="p-4 m-4 w-10/12 border-2 border-slate-400 rounded-lg placeholder-slate-600"
          v-model="firstname"
          placeholder="enter username or phone number"
        />
        <ErrorMessage
          name="firstname"
          class="text-red-600 block"
          v-if="!firstname.isVaalid"
        >
        </ErrorMessage>
        <Field
          type="password"
          name="password"
          class="p-4 m-2 w-10/12 border-2 border-slate-400 rounded-lg placeholder-slate-600"
          v-model="password"
          placeholder="Enter your password"
        />
        <ErrorMessage
          name="password"
          v-if="!password.isVaalid"
          class="text-red-600 block"
        >
        </ErrorMessage>
      </div>
      <div class="labrl3 p-4 ml-11 flex flex-row-1">
        <label for="checkbox" class="mr-24">
          <input id="checkbox" type="checkbox" class="w-4 h-4 mr-3" />Remember
          me</label
        >
        <!-- <button @click="ForgetPassword" style="color: blue"> ForgetPassword?</button> -->
      </div>
      <div class="w-full text-center pb-2">
        <button
          class="mt-5 p-4 w-10/12 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          v-if="schema"
          @click.prevent="login"
        >
          login
        </button>
      </div>
      <div class="registerlink p-2 ml-[100px]">
        <p class="">
          Do not Have an account?!
          <a href="./signup" style="color: blue"> Register?</a>
        </p>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import axios from "axios";

const router = useRouter();
import { useStore } from "vuex";
const store = useStore();
const password = ref("");
let firstname = ref("");
const schema = yup.object().shape({
  firstname: yup
    .string()
    .required((data) => `${data.path} not required `)
    .label("text"),
  password: yup
    .string()
    .min(8, (data) => `Password minimal ${data.min} character`)
    .required((data) => `${data.label} please enter valid password`)
    .oneOf([yup.ref("password"), null])
    .matches(/[a-z]/, " please enter valid password")
    .oneOf([yup.ref("password"), null])
    .matches(/[A-Z]/, " please enter valid password")
    .oneOf([yup.ref("password"), null])
    .matches(/[$ ^ * !  @ %]/, " please enter valid password")
    .label("Password"),
});
const goToHome = () => {
  router.push({
    name: "home",
  });
};

let login = () => {
  axios
    .post(
      "https://857d-105-35-78-149.ngrok-free.app/login/",
      {
        username: firstname.value,
        password: password.value,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "any",
        },
      }
    )
    .then((res) => {
      console.log(res.status);
      console.log(store);
      store.commit("setToken", res.data.access);
      console.log(store.state.token);
      goToHome();
    })
    .catch((error) => {
      alert(`${error} ya et4awy`);
    });
};

// // const requestData = {
//   firstname: firstname.value,
//   password: password.value,
// // };
// axios
//   .post(
//     "https://1890-156-209-8-159.ngrok-free.app/api/customers/",
//     requestData,
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   )
//   .then((response) => {
//     // Handle the successful response here, e.g., redirect to home page
//     console.log("POST Response:", response.data);
//     router.push({ name: "home" }); // Redirect to the home page
//   })
//   .catch((error) => {
//     // Handle errors here, e.g., display an error message
//     console.error("POST Error:", error);
//   });
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
</style>
