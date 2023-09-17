<template>
  <div
    class="dashborad p-4 min-h-screen h-full md:w-[320px] w-[58px] text-white drop-shadow-2xl text-lg bg-gray-900"
  >
    <div class="flex gap-2 w-full items-center pt-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="2em"
        viewBox="0 0 640 512"
      >
        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176H96V304c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128H544h40 40c8.8 0 16 7.2 16 16V352c0 17.7-14.3 32-32 32H576c-11.8 0-22.2-6.4-27.7-16H463.4c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16H56 96h19.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9 .2 13.2 .6z"
          fill="white"
        />
      </svg>
      <span class="pl-1 text-4xl md:block hidden"> HitchHiker </span>
    </div>
    <div>
      <hr />
    </div>
    <div
      class="flex gap-2 w-full items-center"
      :class="{
        ' bg-white h-11 pl-1  text-black rounded-xl': $route.name == 'home',
      }"
      @click="$router.push({ name: 'home' })"
    >
      <svg
        class="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 576 512"
      >
        <path
          v-if="$route.name == 'home'"
          d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
          fill="black"
        />

        <path
          v-else
          d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
          fill="white"
        />
      </svg>
      <button class="text-2xl md:block hidden">Home</button>
    </div>

    <div
      class="flex gap-2 w-full items-center"
      :class="{
        'bg-white h-11 pl-1  text-black rounded-xl': $route.name == 'shipment',
      }"
      @click="$router.push({ name: 'shipment' })"
    >
      <svg
        class="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 576 512"
      >
        <path
          v-if="$route.name == 'shipment'"
          d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0"
          fill="black"
        />

        <path
          v-else
          d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0"
          fill="white"
        />
      </svg>
      <button class="text-2xl md:block hidden">Shipment</button>
    </div>
    <div
      class="flex gap-2 w-full items-center"
      :class="{
        'bg-white h-11 pl-1  text-black rounded-xl': $route.name == 'trips',
      }"
      @click="$router.push({ name: 'trips' })"
    >
      <svg
        class="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 576 512"
      >
        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          v-if="$route.name == 'trips'"
          d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0"
          fill="black"
        />

        <path
          v-else
          d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0"
          fill="white"
        />
      </svg>
      <button class="text-2xl md:block hidden">Trips</button>
    </div>
    <div
      class="flex gap-2 w-full items-center"
      :class="{
        'bg-white h-11 pl-1  text-black rounded-xl':
          $route.name == 'AddShipment',
      }"
      @click="$router.push({ name: 'AddShipment' })"
    >
      <svg
        class="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 576 512"
      >
        <path
          v-if="$route.name == 'AddShipment'"
          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80"
          fill="black"
        />
        <path
          v-else
          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80"
          fill="white"
        />
      </svg>
      <button class="text-2xl md:block hidden">Add shipment</button>
    </div>
    <div
      class="flex gap-2 w-full items-center"
      :class="{
        'bg-white h-11 pl-1  text-black rounded-xl': $route.name == 'AddTrips',
      }"
      @click="$router.push({ name: 'AddTrips' })"
    >
      <svg
        class="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 576 512"
      >
        <path
          v-if="$route.name == 'AddTrips'"
          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80"
          fill="black"
        />
        <path
          v-else
          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80"
          fill="white"
        />
      </svg>
      <button class="text-2xl md:block hidden">Add Trips</button>
    </div>
    <div
      class="flex gap-2 w-full items-center"
      :class="{
        'bg-white h-11 pl-1  text-black rounded-xl': $route.name == 'pofile',
      }"
      @click="$router.push({ name: 'pofile' })"
    >
      <svg
        class="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 576 512"
      >
        <path
          v-if="$route.name == 'pofile'"
          d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3"
          fill="black"
        />

        <path
          v-else
          d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3"
          fill="white"
        />
      </svg>
      <button class="text-2xl md:block hidden">Profile</button>
    </div>
    <hr />
    <div class="flex gap-2 w-full items-center">
      <svg
        class="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
      >
        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
          fill="white"
        />
      </svg>
      <button
        @click="$router.push({ name: 'login' })"
        class="text-2xl md:block hidden"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="css">
.dashborad {
  display: flex;
  height: 100vh;
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
