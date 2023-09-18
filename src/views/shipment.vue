<template>
<div>
    <div class="text-right">
<button class="w-20 h-20 bg-green-500 text-white   ml-auto  mt-10 mr-10 rounded-full	 text-4xl hover:bg-green-600  " @click="$router.push({ name: 'AddShipment' })"> + </button>
  </div>
  <div class="home-content">
      <div  class="shipments grid grid-cols-3">
        <Card
          class="bg-blue-800"
          v-for="shipment in shipments"
          :key="shipment.name"
          :data="shipment"
          @click="router.push({ name: 'shipmentInfo', params: { id: shipment.id } })"
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

const shipments = ref([
  {
    id: 1,
    name: "shipment1",
  },
  {
    id: 2,
    name: "shipment2",
  },
  {
    id: 3,
    name: "shipment3",
  },
  {
    id: 4,
    name: "shipment4",
  },
  {
    id: 5,
    name: "shipment5",
  },
  {
    id: 6,
    name: "shipment6",
  },
]);

</script>
