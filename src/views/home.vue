<template>
  <div>
    <filterFrom @search="search" :data="data" @type="typeCard" />
    <div class="home-content">
      <div v-if="selected" class="trips grid lg:grid-cols-3 grid-cols-2">
        <Card
          class="bg-blue-800"
          v-for="trip in trips"
          :key="trip.id"
          :data="trip"
          @click="router.push({ name: 'tripInfo', params: { id: trip.id } })"
        />
      </div>
      <div v-else class="shipments grid lg:grid-cols-3 grid-cols-2">
        <Card
          v-for="shipment in shipments"
          :data="shipment"
          :key="shipment.id"
          @click="
            router.push({ name: 'shipmentInfo', params: { id: shipment.id } })
          "
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Card from "@/components/Card.vue";
import axios from "axios";
import filterFrom from "@/components/filterFrom.vue";
const router = useRouter();
const selected = ref(true);
const trips = ref([
  {
    From: "cairo",
    To: "Usa",
    Weight: "5Kg",
    id: 1,
    name: "trip1",
    img: "src='../assets/iphone.avif'",
  },
  {
    From: "BAHRAIN",
    To: "Italy",
    Weight: "3Kg",
    id: 2,
    name: "trip2",
  },
  {
    From: "egypt",
    To: "sudan",
    Weight: "5Kg",
    id: 3,
    name: "trip3",
  },
  {
    From: "cairo",
    To: "Usa",
    Weight: "5Kg",
    id: 4,
    name: "trip4",
  },
  {
    From: "cairo",
    To: "Usa",
    Weight: "5Kg",
    id: 5,
    name: "trip5",
  },
  {
    From: "cairo",
    To: "Usa",
    Weight: "5Kg",
    id: 6,
    name: "trip6",
  },
]);
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
  if (value === "trip") {
    selected.value = true;
    axios
      .get(
        `https://6385-105-35-78-149.ngrok-free.app/trip/${selected.value}/`,
        {
          /////////////////////////////////
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "any",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        trips.value = res.data;
      });
  } else {
    selected.value = false;
    axios
      .get(`https://6385-105-35-78-149.ngrok-free.app/${selected.value}/`, {
        ////////////////////////////////////////
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "any",
        },
      })
      .then((res) => {
        console.log(res.data);
        shipments.value = res.data;
      });
  }
};
</script>
