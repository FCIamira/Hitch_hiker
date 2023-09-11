<template>
<div class="contanier bg-main-page flex justify-center items-center bg-cover h-screen w-full bg-center">
    <div class="sub-contanier drop-shadow-2xl ">
        <div class="flex justify-around pt-10 ">
        <p class="text-4xl text-white font-light ">Add Trips</p>
       </div>
       <div class="flex justify-around pt-20 ">
         <input type="text" placeholder="From (City,Country)" class=" w-2/5 p-6 text-l h-10 border-2  border-slate-400  rounded-lg  bg-gray-100">
        <input type="text" placeholder="To (City,Country)" class="    w-2/5 p-6 text-l h-10 border-2 border-slate-400  rounded-lg  bg-gray-100">
       </div>
       <div class="flex justify-around pt-20 ">
         <input type="number" placeholder="Available Weight" class=" w-2/5 p-6 text-l h-10 border-2  border-slate-400  rounded-lg  bg-gray-100">
        <input type="date" placeholder="Dates" class="  w-2/5 p-6 text-l h-10 border-2 border-slate-400  rounded-lg  bg-gray-100">
       </div>
        <div class="flex justify-around pt-20 ">
        <textarea placeholder="Trip note" class="w-11/12 h-40 p-4 text-xl rounded-lg  bg-gray-200  "></textarea>
       </div>
        <div class="flex justify-around pt-20 ">
         <button class=" w-2/5  text-l h-16 rounded-lg  bg-teal-400 hover:bg-teal-500 text-xl">Add Trip</button>
       </div>

       
        
    </div>
</div>
    
</template>
<script setup>

</script>
<style scoped>

.sub-contanier{
    width: 50%;
    height: 750px;
    margin: auto;
    border: solid 2px rgba(245, 234, 234, 0.061);
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.712);

}
</style>