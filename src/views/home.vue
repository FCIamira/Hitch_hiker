<template>
  <div>
    <filterFrom @search="search" />
    <div class="home-content">
      <div class="trips">
        <Card
          class="bg-blue-800"
          v-for="trip in trips"
          :key="trip.id"
          :data="trip"
          @click="router.push({ name: 'tripInfo', params: { id: trip.id } })"
        />
      </div>
      <div class="shipments">
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
</script>
