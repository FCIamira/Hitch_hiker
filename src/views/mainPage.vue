<template>
  <!-- #231f3a; -->
  <div class="flex gap-6 ">

    <dashboard />
      <div class="filtter bg-white drop-shadow-2xl w-full h-[12rem] p-2 mt-2 mr-6 rounded-lg">
        <form class="form w-full">
               
                <div class=" flex">
                  <label class="sr-only">to</label>
                 <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-5/6 border border-slate-300 rounded-md p-2 
                   mx-10 mb-2 shadow-sm focus:outline-none  focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="to..." type="text" name="to"/>
                  <label class="sr-only">From</label>
                 <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-5/6 border border-slate-300 rounded-md p-2
                 mx-10 mb-2 shadow-sm focus:outline-none  focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="from..." type="text" name="from"/>
               </div>
               <div class=" flex">
                  <label class="sr-only">all appointments</label>
                 <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-3/4 border border-slate-300 rounded-md p-2 
                   mx-10 mb-2 shadow-sm   focus:ring-sky-500 focus:ring-1 sm:text-sm"
                   placeholder="all appointments" type="date" name="all appointments"/>
                  <label class="sr-only">weight</label>
                 <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-3/4 border border-slate-300 rounded-md p-2
                 mx-10 mb-2 shadow-sm focus:outline-none  focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="weight..." type="number" name="weight"/>
               </div>
                  <div class="flex px-10 pt-2 flex-col-2 w-full justify-between items-baseline">
                  <div class=" w-fit" role="group" >
                    <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" checked>
                    <label class="" for="vbtn-radio1"> trips</label>
                    <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off">
                    <label class="b" for="vbtn-radio2"> shipments</label>
                  </div>
                
                   <div class="">
                    <button class="py-2 px-4 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-700   focus:ring-blue-400 focus:ring-opacity-75">Search</button>
                   </div>
                   </div>
               
        </form>

      </div>
  </div>
  <router-view></router-view>
</template>
<script setup>
import dashboard from '@/components/dashboard.vue';

</script>

<style>
/* .p{
  background-color: blue;
  width: 200px;
  height: 200px;
  text-align: center;
  padding: 100px;
} */
</style>



<!-- <button @click="show = !show" v-if="!show">
  <i class="fas fa-arrow-right"></i>
</button>
<button @click="show = !show" v-if="show">
  <i class="fas fa-arrow-left"></i>
</button>

const closeModel = () => {
  show.value = !show.value;
};
@closeModel="closeModel" -->