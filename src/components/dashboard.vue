<template>
  <div class="dashborad p-2 text-white drop-shadow-2xl text-lg bg-black">
    <div>
      <span class="pl-3 text-4xl"> 𝒽𝒾𝓉𝒸𝒽𝒽𝒾𝓀𝑒𝓇 </span>
    </div>
    <div>
      <hr />
    </div>
    <div class="flex gap-2 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 576 512"
      >
        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
          fill="white"
        />
      </svg>
      <router-link class="text-2xl" :to="{ name: 'home' }">Home </router-link>
    </div>

    <router-link
      class="hover:bg-white hover:text-black hover:rounded-lg pl-2"
      :to="{
        name: 'shipment',
      }"
      >Shipment</router-link
    >
    <router-link
      class="hover:bg-white hover:text-black hover:rounded-lg pl-2"
      :to="{
        name: 'trips',
      }"
      >Trips</router-link
    >
    <!-- <img src="../assets/profile_img.jpg" alt="profile-img" class="w-16"> -->
  </div>
</template>

<script setup></script>

<style lang="css">
.dashborad {
  display: flex;
  height: 100vmax;
  width: 320px;
  flex-direction: column;
  gap: 50px;
}

/* router-link{
    font-size: larger;

}
router-link{
    font-size: larger;
    
} */
</style>
