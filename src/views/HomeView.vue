<template>
  <div v-if="change" class="bg-home-page bg-cover h-screen w-full bg-center">
    <div class="pt-24 pr-8 flex space-x-11 justify-end">
      <button
        class="bg-teal-500 hover:bg-teal-700 text-white font-semibold w-48 h-12 rounded text-2xl"
        @click="login"
      >
        Login
      </button>
      <button
        class="bg-teal-500 hover:bg-teal-700 text-white font-semibold w-48 h-12 rounded text-2xl"
        @click="signup"
      >
        Signup
      </button>
    </div>
    <div class="flex justify-center items-center pt-44">
      <img class="img1" src="../assets/logo.png" alt="" />
    </div>
  </div>
  <div class="bg-text-gray-900 bg-teal-800 w-full h-screen" v-else>
    <svg viewBox="0 0 3387 1270">
      <path
        id="planePath"
        class="planePath"
        d="M-226 626c439,4 636,-213 934,-225 755,-31 602,769 1334,658 562,-86 668,-698 266,-908 -401,-210 -893,189 -632,630 260,441 747,121 1051,91 360,-36 889,179 889,179"
      />
      <g id="plane">
        <polygon
          class="fil1"
          points="-141,-10 199,0 -198,-72 -188,-61 -171,-57 -184,-57 "
        />
        <polygon class="fil2" points="199,0 -141,-10 -163,63 -123,9 " />
        <polygon
          class="fil3"
          points="-95,39 -113,32 -123,9 -163,63 -105,53 -108,45 -87,48 -90,45 -103,41 -94,41 "
        />
        <path
          class="fil4"
          d="M-87 48l-21 -3 3 8 19 -4 -1 -1zm-26 -16l18 7 -2 -1 32 -7 -29 1 11 -4 -24 -1 -16 -18 10 23zm10 9l13 4 -4 -4 -9 0z"
        />
        <polygon
          class="fil1"
          points="-83,28 -94,32 -65,31 -97,38 -86,49 -67,70 199,0 -123,9 -107,27 "
        />
      </g>
      <animateMotion
        xlink:href="#plane"
        dur="5s"
        repeatCount="indefinite"
        rotate="auto"
      >
        <mpath xlink:href="#planePath" />
      </animateMotion>
    </svg>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { onUpdated, ref } from "vue";
let router = useRouter();
const login = ref(() => {
  router.push({ name: "login" });
});
const signup = ref(() => {
  router.push({ name: "signup" });
});
let change = ref(false);
setTimeout(() => {
  change.value = !change.value;
}, 5000);
onUpdated(() => {
  router.replace({ name: "home" });
});
</script>
<style scoped>
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
.planePath {
  stroke: #D9DADA;
  stroke-width: 0.1%;
  stroke-width: 0.5%;
  stroke-dasharray: 1% 2%;
  stroke-linecap: round;
  fill: none;
}
.fil1 {
  fill: #D9DADA;
}
.fil2 {
  fill: #C5C6C6;
}
.fil4 {
  fill: #9D9E9E;
}
.fil3 {
  fill: #AEAFB0;
}
.img1 {
  cursor: pointer;
  transition: transform 0.5s;
}
.img1:hover {
  transform: scale(1.05);
}
</style>