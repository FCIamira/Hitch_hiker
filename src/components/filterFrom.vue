<template>
  <div
    class="filtter md:p-6 p-2 h-auto bg-white drop-shadow-2xl w-full mr-6 mt-5 rounded-lg"
  >
    <form
      class="form w-full grid lg:grid-cols-2 grid-cols-1 md:gap-4 gap-2"
      @submit.prevent="search"
    >
      <div class="input-field">
        <label class="sr-only">From</label>
        <input
          class="placeholder:italic placeholder:text-slate-400 block w-full bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:ring-1 sm:text-l h-16"
          placeholder="From (country,City)"
          type="text"
          name="from"
          v-model="data.to"
        />
      </div>
      <div class="input-field">
        <label class="sr-only">To</label>
        <input
          class="placeholder:italic placeholder:text-slate-400 block w-full bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:ring-1 sm:text-l h-16"
          placeholder="To (country,City)"
          type="text"
          name="to"
        />
      </div>
      <div class="input-field">
        <label class="sr-only">all appointments</label>
        <input
          class="placeholder:italic placeholder:text-slate-400 block w-full bg-white border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:ring-1 sm:text-l h-16"
          placeholder="all appointments"
          type="date"
          name="all appointments"
        />
      </div>
      <div class="input-field">
        <label class="sr-only">weight</label>
        <input
          class="placeholder:italic placeholder:text-slate-400 block w-full bg-white border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:ring-1 sm:text-l h-16"
          placeholder="weight..."
          type="number"
          name="weight"
        />
      </div>

      <div
        class="grid lg:grid-cols-3 grid-cols-1 lg:col-start-1 lg:col-end-3 col-start-1 col-end-2 items-center md:text-xl text-sm"
      >
        <ul
          class="items-center grid lg:grid-cols-2 grid-cols-1 lg:col-start-1 lg:col-end-3 col-start-1 col-end-2"
        >
          <li @click="selectData('trip')">
            <input
              type="radio"
              id="trips"
              name="hosting"
              value="hosting-small"
              class="hidden peer"
              required
            />
            <label
              for="trips"
              class="inline-flex items-center w-full justify-between p-5 text-gray-700 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div class="w-full">Trips</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
              >
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0"
                  fill="black"
                />
              </svg>
            </label>
          </li>
          <li @click="selectData('shipment')">
            <input
              type="radio"
              id="Shipment"
              name="hosting"
              value="hosting-big"
              class="hidden peer"
            />
            <label
              for="Shipment"
              class="inline-flex items-center w-full justify-between p-5 ml-2 text-gray-700 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div class="w-full">Shipment</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
              >
                <path
                  d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0"
                  fill="black"
                />
              </svg>
            </label>
          </li>
        </ul>
        <button
          class="lg:col-start-3 lg:col-end-4 col-start-1 col-end-2 w-9 h-10 bd-blue-500 ml-40"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { defineEmits, ref } from "vue";
const data = ref({
  to: "",
});
const emits = defineEmits(["search", "type"]);
const search = () => {
  emits("search", data.value);
};
let selectData = (value) => {
  emits("type", value);
};
</script>
