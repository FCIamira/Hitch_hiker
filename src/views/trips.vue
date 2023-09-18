<template>
<div >
    <div class="text-right">
<button class="w-20 h-20 bg-green-500 text-white   ml-auto  mt-10 mr-10 rounded-full	 text-4xl hover:bg-green-600  " @click="$router.push({ name: 'AddTrips' })"> + </button>
  </div>
  <div class="home-content ">
      <div  class="trips grid grid-cols-3">
        <Card
          class="bg-blue-800"
          v-for="trip in trips"
          :key="trip.name"
          :data="trip"
          @click="router.push({ name: 'tripInfo', params: { id: trip.id } })"
        />
      </div>
    </div>
    </div>
</template>
<script setup>

import { ref } from "vue";
import { useRouter } from "vue-router";
import Card from "@/components/Card.vue";
const router = useRouter();

const trips = ref([
  {
    id: 1,
    name: "trip1",
  },
  {
    id: 2,
    name: "trip2",
  },
  {
    id: 3,
    name: "trip3",
  },
  {
    id: 4,
    name: "trip4",
  },
  {
    id: 5,
    name: "trip5",
  },
  {
    id: 6,
    name: "trip6",
  },
]);

</script>
