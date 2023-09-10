<template>

    <div class="dashborad p-4 text-white
     drop-shadow-2xl  text-lg bg-black"> 
            <div>
        <span class="pl-3 text-4xl">  𝒽𝒾𝓉𝒸𝒽𝒽𝒾𝓀𝑒𝓇 </span>
    </div>
            <router-link
             class="hover:bg-white hover:text-black hover:rounded-lg pl-3" :to="{
                name: 'shipment',
            }">shipment</router-link>
            <router-link 
            class="hover:bg-white hover:text-black hover:rounded-lg pl-3"
            :to="{
                name: 'trips',
            }">trips</router-link>
            <router-link
            class="hover:bg-white hover:text-black hover:rounded-lg pl-3"
            :to="{
                name: 'mainPage',
            }">Home</router-link>

         <router-view></router-view>
    
    <!-- <img src="../assets/profile_img.jpg" alt="profile-img" class="w-16"> -->

        </div>
</template>

<script setup>
// import { defineProps } from 'vue';
// const props = defineProps(["dashborad"]);////any variable
// props.dashborad

</script>

<style lang="css">

.dashborad{
  display: flex;
  height: 100vh;
  width: 200px;
  flex-direction: column;
  gap:50px;

}
/* router-link{
    font-size: larger;

}
router-link{
    font-size: larger;
    
} */

</style>

