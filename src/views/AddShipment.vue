<template>
<div class="contanier bg-main-page flex justify-center items-center bg-cover h-screen w-full bg-center">
    <div class="sub-contanier drop-shadow-2xl ">
       <div class="flex justify-around pt-20 ">
         <input type="text" placeholder="From (City,Country)" class=" w-2/5 p-6 text-l h-10 border-2  border-slate-400  rounded-lg  bg-gray-100">
        <input type="text" placeholder="To (City,Country)" class="    w-2/5 p-6 text-l h-10 border-2 border-slate-400  rounded-lg  bg-gray-100">
       </div>
       <div class="flex justify-around pt-20 ">
         <input type="number" placeholder="Item Weight" class=" w-2/5 p-6 text-l h-10 border-2  border-slate-400  rounded-lg  bg-gray-100">
        <input type="date" placeholder="Dates" class="  w-2/5 p-6 text-l h-10 border-2 border-slate-400  rounded-lg  bg-gray-100">
       </div>
       <div class="flex justify-around pt-20 ">
         <input type="text" placeholder="Price in USD" class=" w-2/5 p-6 text-l h-10 border-2  border-slate-400  rounded-lg  bg-gray-100">
        <input type="text" placeholder="Item Name" class="  w-2/5 p-6 text-l h-10 border-2 border-slate-400  rounded-lg  bg-gray-100">
       </div>
       <div class="flex justify-around pt-20 ">
        <input type="text" placeholder="Item Link" class="  w-11/12 p-6 text-l h-10 border-2 border-slate-400  rounded-lg  bg-gray-100">
       </div>
        
       
        <div class="flex justify-around pt-20 ">
         <button class=" w-2/5  text-l h-16 rounded-lg  bg-teal-400 hover:bg-teal   -500 text-xl">Add Shipment</button>
       </div>

       
        
    </div>
</div>
    
</template>
<script setup>

</script>
<style scoped>

.sub-contanier{
    width: 50%;
    height: 820px;
    margin: auto;
    border: solid 2px rgba(245, 234, 234, 0.061);
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.712);

}
</style>