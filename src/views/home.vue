<template>
  <div>
    <filterFrom @search="search" @type="typeCard" />
    <div class="home-content">
      <div v-if="selected" class="trips">
        <Card
          class="bg-blue-800"
          v-for="trip in trips"
          :key="trip.id"
          :data="trip"
          @click="router.push({ name: 'tripInfo', params: { id: trip.id } })"
        />
      </div>
      <div v-else class="shipments">
        shipments
        <Card v-for="shipment in shipments" :key="shipment.index" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Card from "@/components/Card.vue";
import filterFrom from "@/components/filterFrom.vue";
const router = useRouter();
const selected = ref(true);

const trips = ref([
  {
    id: 1,
    name: "tripInfo",
  },
]);
const shipments = ref([]);
let show = ref(true);
console.log(show);
// onMounted(() => {
//   if (show) {
//     axios.post("http://localhost:8080" / shipments);
//   } else {
//     axios.post("http://localhost:8080" / shipments);
//   }
// });
const search = (data) => {
  console.log(data);
};
const typeCard = (value) => {
  if (value === "trips") {
    selected.value = true;
  } else {
    selected.value = false;
  }
};
</script>
