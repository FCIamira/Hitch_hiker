<template>
    <div>main page</div>

    <div>header</div>
    <div class="dashborad">
      <router-link
        :to="{
          name: 'shipment',
        }"
        >shipment</router-link
      >
      <router-link
        :to="{
          name: 'trips',
        }"
        >trips</router-link
      >
      <router-link
        :to="{
          name: 'mainPage',
        }"
        >Home</router-link
      >
    </div>
    <router-view></router-view>
    <div>footer</div>
  
</template>
<script setup>

</script>