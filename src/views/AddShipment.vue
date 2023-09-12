<template>
  <div class="contanier h-auto w-full bg-center bg-gray-100">
    <div class="flex justify-around pt-10">
      <p class="text-4xl text-teal-400 font-bold font-light">Add Shipment</p>
    </div>
    <div
      class="sub-contanier h-auto md:p-4 p-2 gap-4 w-full flex md:flex-row flex-col flex-wrap drop-shadow-2xl"
    >
      <input
        type="text"
        placeholder="From (City,Country)"
        class="text-lg md:w-[48%] w-full my-2 h-14 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
      />
      <input
        type="text"
        placeholder="To (City,Country)"
        class="text-lg md:w-[48%] w-full my-2 h-14 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
      />

      <input
        type="number"
        placeholder="Item Weight"
        class="text-lg md:w-[48%] w-full my-2 h-14 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
      />
      <input
        type="date"
        placeholder="Dates"
        class="text-lg md:w-[48%] w-full my-2 h-14 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
      />

      <input
        type="text"
        placeholder="Price in USD"
        class="text-lg md:w-[48%] w-full my-2 h-14 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
      />
      <input
        type="text"
        placeholder="Item Name"
        class="text-lg md:w-[48%] w-full my-2 h-14 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
      />

      <input
        type="text"
        placeholder="Item Link"
        class="text-lg w-[98%] h-14 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
      />
      <button
        class="h-16 w-full rounded-lg bg-teal-400 hover:bg-teal-500 text-xl"
      >
        Add Shipment
      </button>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.sub-contanier {
  border-radius: 50px;
}
</style>
