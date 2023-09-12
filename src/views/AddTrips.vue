<template>
  <div class="contanier h-auto w-full bg-center bg-gray-100">
    <div class="flex justify-around pt-10 mx-auto text-4xl font-bold">
      Add Trips
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
        class="text-lg md:w-[48%] focus:outline-0 w-full my-2 h-14 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
      />
      <input
        type="date"
        placeholder="Dates"
        class="text-lg md:w-[48%] w-full my-2 h-14 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
      />

      <textarea
        type="text"
        placeholder="Trip note"
        class="text-xl md:w-[96%] resize-none my-2 p-4 placeholder:text-black border-2 border-slate-400 rounded-lg bg-gray-100"
      />

      <button
        class="h-16 w-[96%] rounded-lg bg-gray-800 hover:bg-gray-500 text-3xl text-white"
      >
        Add Trips
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
