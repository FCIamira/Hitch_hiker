<template>
  <div>
    <Form
      :validation-schema="schema"
      @submit="submitForm"
      class="container h-auto w-full bg-center bg-gray-100"
    >
      <div class="flex justify-around pt-10">
        <p class="flex justify-around mx-auto text-4xl font-bold">Add Trips</p>
      </div>
      <div
        class="sub-container h-auto md:p-4 p-2 gap-4 w-full flex md:flex-row flex-col flex-wrap drop-shadow-2xl"
      >
        <div class="lg:w-[50%] w-full">
          <Field
            name="from"
            type="text"
            v-model="formData.from"
            placeholder="From (City, Country)"
            class="text-lg md:w-11/12 w-full my-2 h-14 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
          />
          <ErrorMessage name="from" class="text-red-600 block" />
        </div>
        <div class="lg:w-[48%] w-full">
          <Field
            type="text"
            name="to"
            v-model="formData.to"
            placeholder="To (City, Country)"
            class="text-lg md:w-11/12 w-full my-2 h-14 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
          />
          <ErrorMessage name="to" class="text-red-600 block" />
        </div>
        <div class="lg:w-[50%] w-full">
          <Field
            type="number"
            name="itemWeight"
            v-model="formData.itemWeight"
            placeholder="Item Weight"
            class="text-lg md:w-11/12 w-full my-2 h-14 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
          />
          <ErrorMessage name="itemWeight" class="text-red-600 block" />
        </div>
        <div class="lg:w-[48%] w-full">
          <Field
            type="date"
            name="date"
            v-model="formData.date"
            placeholder="Date"
            class="text-lg md:w-11/12 w-full my-2 h-14 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
          />
          <ErrorMessage name="date" class="text-red-600 block" />
        </div>
        <textarea
          type="text"
          placeholder="Trip note"
          class="text-xl md:w-[96%] resize-none my-2 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
        />
        <button
          class="h-16 w-[98%] rounded-lg bg-gray-800 hover:bg-gray-500 text-3xl text-white"
          v-if="schema"
        >
          Add Trips
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

const router = useRouter();

const formData = ref({
  from: "",
  to: "",
  itemWeight: null,
  date: null,
});

const schema = yup.object().shape({
  from: yup.string().required("From is required").label("text"),
  to: yup.string().required("To is required").label("text"),
  itemWeight: yup.number().required("Item Weight is required").label("number"),
  date: yup.date().required("Date is required").label("date"),
});

const submitForm = () => {
  router.push({
    name: "trips",
  });
};
</script>
<style scoped>
.sub-contanier {
  border-radius: 50px;
}
</style>
