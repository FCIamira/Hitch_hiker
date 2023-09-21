<template>
  <div>
    <Form
      :validation-schema="schema"
      @submit="goToShipment"
      class="container h-auto w-full bg-center bg-gray-100"
    >
      <div class="flex justify-around pt-10">
        <p class="flex justify-around mx-auto text-4xl font-bold">
          Add Shipment
        </p>
      </div>
      <div
        class="sub-container h-auto md:p-4 p-2 gap-4 w-full flex md:flex-row flex-col flex-wrap drop-shadow-2xl"
      >
        <div class="lg:w-[50%] w-full">
          <Field
            name="from"
            type="text"
            v-model="from"
            placeholder="From (City, Country)"
            class="text-lg md:w-11/12 w-full my-2 h-14 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
          />
          <ErrorMessage name="from" class="text-red-600 block" />
        </div>
        <div class="lg:w-[48%] w-full">
          <Field
            type="text"
            name="to"
            v-model="to"
            placeholder="To (City, Country)"
            class="text-lg md:w-11/12 w-full my-2 h-14 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
          />
          <ErrorMessage name="to" class="text-red-600 block" />
        </div>
        <div class="lg:w-[50%] w-full">
          <Field
            type="number"
            name="itemWeight"
            v-model="itemWeight"
            placeholder="Item Weight"
            class="text-lg md:w-11/12 w-full my-2 h-14 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
          />
          <ErrorMessage name="itemWeight" class="text-red-600 block" />
        </div>
        <div class="lg:w-[48%] w-full">
          <Field
            type="date"
            name="date"
            v-model="date"
            placeholder="Date"
            class="text-lg md:w-11/12 w-full my-2 h-14 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
          />
          <ErrorMessage name="date" class="text-red-600 block" />
        </div>
        <div class="lg:w-[50%] w-full">
          <Field
            type="text"
            name="price"
            v-model="price"
            placeholder="Price in USD"
            class="text-lg md:w-11/12 w-full my-2 h-14 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
          />
          <ErrorMessage name="price" class="text-red-600 block" />
        </div>
        <div class="lg:w-[48%] w-full">
          <Field
            type="text"
            name="name"
            v-model="name"
            placeholder="Item Name"
            class="text-lg md:w-11/12 w-full my-2 h-14 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
          />
          <ErrorMessage name="name" class="text-red-600 block" />
        </div>
        <div class="w-[98%]">
          <Field
            type="text"
            name="link"
            v-model="link"
            placeholder="Item Link"
            class="text-lg w-full h-14 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
          />
          <ErrorMessage name="link" class="text-red-600 block" />
        </div>

        <button
          class="h-16 w-[98%] rounded-lg bg-gray-800 hover:bg-gray-500 text-3xl text-white"
          v-if="schema"
        >
          Add Shipment
        </button>
      </div>
    </Form>
  </div>
</template>
<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { ref } from "vue";
import { useRouter } from "vue-router";
import * as yup from "yup";
// import axios from "axios";
// import { useStore } from "vuex";
// const store = useStore();
const router = useRouter();
// console.log(store.state.token);
let from = ref("");
let to = ref("");
let itemWeight = ref("");
let date = ref("");
let price = ref("");
let name = ref("");
let link = ref("");

const schema = yup.object().shape({
  from: yup.string().required("From is required").label("text"),
  to: yup.string().required("To is required").label("text"),
  itemWeight: yup.number().required("Item Weight is required").label("number"),
  date: yup.date().required("Date is required").label("date"),
  price: yup.string().required("Price is required").label("number"),
  name: yup.string().required("Item Name is required").label("text"),
  link: yup.string().label("text"),
});

// const submitForm = (() => {
//   router.push({name:"shipment"})
// });
const goToShipment = () => {
  router.push({
    name: "shipment"
  });
};
// let addShipment = () => {
//   axios
//     .post(
//       "https://857d-105-35-78-149.ngrok-free.app/shipment/",
//       {
//         from_location: from.value,
//         to_location: to.value,
//         name_shipment: name.value,
//         before_date: date.value,
//         item_name: name.value,
//         item_weight: itemWeight.value,
//         single_item_price: price.value,
//         item_link: link.value,
//         rate: 5,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${store.state.token}`,
//           "Content-Type": "application/json",
//           "ngrok-skip-browser-warning": "any",
//         },
//       }
//     )
//     .then((res) => {
//       console.log(res.status);
//       console.log(res);
//       goToShipment();
//     })
//     .catch((error) => {
//       alert(`${error} ya et4awy`);
//     });
// };
</script>
