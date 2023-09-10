<template>
    <div class="dashborad p-4 text-white
     drop-shadow-2xl  text-lg bg-black">
        <div>
            <span class="pl-3 text-4xl"> 𝒽𝒾𝓉𝒸𝒽𝒽𝒾𝓀𝑒𝓇 </span>
        </div>
        <router-link 
        class="hover:bg-white hover:text-black hover:rounded-lg pl-2"
         :to="{
            name: 'mainPage',
        }">Home</router-link>
        <router-link 
        class="hover:bg-white hover:text-black hover:rounded-lg pl-2" 
        :to="{
            name: 'shipment',
        }">Shipment</router-link>
        <router-link 
        class="hover:bg-white hover:text-black hover:rounded-lg pl-2"
         :to="{
            name: 'trips',
        }">Trips</router-link>
        <!-- <img src="../assets/profile_img.jpg" alt="profile-img" class="w-16"> -->

    </div>
</template>

<script setup>
</script>

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

