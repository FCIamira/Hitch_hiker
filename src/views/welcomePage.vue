<template>
  <div
    v-if="change"
    class="bg-home-page bg-cover min-h-[100vh] w-full bg-fixed relative"
  >
    <div class="pt-24 pr-8 flex space-x-11 justify-end">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-semibold w-48 h-12 rounded text-2xl"
        @click="login"
      >
        Login
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-semibold w-48 h-12 rounded text-2xl"
        @click="signup"
      >
        Signup
      </button>
    </div>
    <div class="flex justify-center items-center pt-44">
      <img class="img1" src="../assets/logo.png" alt="" />
    </div>
    <div
      class="sub-welcome bg-cover w-full bg-fixed relative lg:gap-xl-12 gap-x-6 md:grid-cols-1 xl:grid-cols-2"
    >
      <div
        data-aos="fade-down-right"
        class="bg-gray-100 m-4 md:m-40 w-10/12 md:w-4/12 h-2/5 border-2 rounded-2xl shadow-2xl p-6"
      >
        <div class="text-4xl font-bold mx-48 text-blue-500">HitchHiker</div>
        <p class="text-gray-600 mt-10 text-2xl">
          HitchHiker is a social network that connects Shoppers with Travelers.
          Shoppers can buy all their needs from all around the world and ship
          with a Traveler already heading their way. Shoppers save money
          shipping. Travelers make money traveling.
        </p>
      </div>
      <div
        data-aos="fade-up-left"
        class="bg-gray-100 m-4 md:m-40 md:ml-auto w-10/12 md:w-4/12 h-2/6 border-2 rounded-2xl shadow-2xl p-6"
      >
        <div class="text-4xl font-bold mx-48 text-blue-500">Availability</div>
        <p class="text-gray-600 mt-10 text-2xl">
          Can't find your favorite brand, product, size or color in your city?
          Shop from all over the world and ship with HitchHiker to your city.
          Save Money Shipping.
        </p>
      </div>
      <div
        data-aos="fade-up-right"
        class="bg-gray-100 m-4 md:m-40 w-10/12 md:w-4/12 h-2/6 border-2 rounded-2xl shadow-2xl p-6"
      >
        <div class="text-4xl font-bold mx-40 text-blue-500">Earn Money</div>
        <p class="text-gray-600 mt-10 text-2xl">
          You can easily earn up to $800 from a single trip and even more by
          helping shoppers get their needs and carrying their items to where you
          are already heading. Your luggage space can make you money.
        </p>
      </div>
      <div
        data-aos="flip-up"
        class="text-4xl flex justify-center text-blue-900"
      >
        <p>Team Member</p>
      </div>

      <div data-aos="flip-left" class="container my-24 mx-auto md:px-6">
        <section class="mb-32 text-center">
          <div class="lg:gap-xl-12 grid gap-x-6 md:grid-cols-2 xl:grid-cols-3">
            <div class="mb-12">
              <img
                src="../assets/hesham2.jpeg"
                class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-28 w-28"
              />

              <p class="mb-2 font-bold">Hesham Abdelnasser</p>
              <p class="text-neutral-500 dark:text-neutral-300">
                Front-End Developer
              </p>
            </div>

            <div class="mb-12">
              <img
                src="../assets/amira.jpg"
                class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-28 w-28"
              />

              <p class="mb-2 font-bold">Amira Hashem</p>
              <p class="text-neutral-500 dark:text-neutral-300">
                Front-End Developer
              </p>
            </div>

            <div class="mb-12">
              <img
                src="../assets/ahmed.jpeg"
                class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-28 w-28"
              />
              <p class="mb-2 font-bold">Ahmed Tarek</p>
              <p class="text-neutral-500 dark:text-neutral-300">
                Back-End Developer
              </p>
            </div>

            <div class="mb-12">
              <img
                src="../assets/david.jpeg"
                class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-28 w-28"
              />
              <p class="mb-2 font-bold">David Ayman</p>
              <p class="text-neutral-500 dark:text-neutral-300">
                Back-End Developer
              </p>
            </div>

            <div class="mb-12">
              <img
                src="../assets/mon.jpeg"
                class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20 h-28 w-28"
              />
              <p class="mb-2 font-bold">Mahmoud Ayman</p>
              <p class="text-neutral-500 dark:text-neutral-300">
                Back-End Developer
              </p>
            </div>
          </div>
        </section>
      </div>
      <!-- <div class="flex">
          
           
          <div
                  data-aos="fade-left"
                  class="bg-gray-100  m-40  ml-auto w-4/12  rounded-3xl shadow-2xl p-6"
                >
                  <div class="text-2xl font-bold mx-50 pl-32 text-blue-500">Hesham Abdelnasser  </div>
                  <div class="text-4xl font-bold mx-40 text-blue-500"></div>

                  <img class=" mt-10 ml-44 w-44 h-44  rounded-3xl" src="../assets/hesham2.jpeg" alt="">
                  <p class="text-xl ml-44">Front end developer </p>
                </div>
                <div
                  data-aos="fade-right"
                  class="bg-gray-100 m-4 md:m-40 md:ml-auto w-10/12 md:w-4/12 h-2/6 border-2 rounded-2xl shadow-2xl p-6"
                >
                  <div class="text-4xl font-bold mx-36 text-blue-500 ">Amira Hashem</div>

                  <img class=" mt-10 ml-44 w-44 h-44" src="../assets/Amira Hashem.jpg" alt="">
                  <p class="text-xl ml-44 ">Front end developer </p>
                  
                </div>
           </div>
      <div class="flex">
          <div
                  data-aos="fade-left"
                  class="bg-gray-100 m-4 md:m-40 md:ml-auto w-10/12 md:w-4/12 h-2/6 border-2 rounded-2xl shadow-2xl p-6"
                >
                  <div class="text-4xl font-bold mx-40 text-blue-500">Ahmed Tarek </div>
                  <div class="text-4xl font-bold mx-48 text-blue-500"> </div>

                  <img class=" mt-10 ml-44 w-44 h-44" src="../assets/ahmed.jpeg" alt="">
                  <p class="text-xl ml-44">Back end developer </p>
            </div>
                <div
                  data-aos="fade-right"
                  class="bg-gray-100 m-4 md:m-40 md:ml-auto w-10/12 md:w-4/12 h-2/6 border-2 rounded-2xl shadow-2xl p-6"
                >
                  <div class="text-4xl font-bold mx-40 text-blue-500">Dived dived</div>

                  <img class=" mt-10 ml-44 w-44 h-44" src="../assets/iphone.avif" alt="">
                  <p class="text-xl ml-44">Back end developer </p>
                </div>
                
                
       </div>
       <div class="flex justify-center">
                  <div
                  data-aos="fade-right"
                  class="bg-gray-100  md:m-40 w-10/12 md:w-4/12 h-2/6 border-2 rounded-2xl shadow-2xl p-6"
                >
                  <div class="text-4xl font-bold mx-36 text-blue-500">Mahmoud Ayman</div>
                  <img class=" mt-10 ml-44 w-44 h-44" src="../assets/mon.jpeg" alt="">
                  <p class="text-xl ml-44">Back end developer </p>
                </div>
       </div> -->

      <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="#" class="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  class="h-8 mr-3"
                  alt="FlowBite Logo"
                />
                <span
                  class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                  >HitchHiker</span
                >
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2
                  class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
                >
                  Resources
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="https://flowbite.com/" class="hover:underline"
                      >HitchHiker</a
                    >
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline"
                      >Tailwind CSS</a
                    >
                  </li>
                </ul>
              </div>
              <div>
                <h2
                  class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
                >
                  Follow us
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      class="hover:underline"
                      >Github</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                      >Discord</a
                    >
                  </li>
                </ul>
              </div>
              <div>
                <h2
                  class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
                >
                  Legal
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline"
                      >Terms &amp; Conditions</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr
            class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
          />
          <div class="sm:flex sm:items-center sm:justify-between"></div>
        </div>
      </footer>
      <footer
        class="flex flex-col items-center bg-neutral-900 text-center text-white"
      >
        <div class="container px-6 pt-6">
          <div class="mb-6 flex justify-center">
            <a
              href="#!"
              type="button"
              class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                />
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                />
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!--Copyright section-->
        <div
          class="w-full p-4 text-center"
          style="background-color: rgba(0, 0, 0, 0.2)"
        >
          <a class="text-whitehite" href="https://tailwind-elements.com/"></a>
        </div>
      </footer>
    </div>
  </div>

  <div class="bg-text-gray-200 bg-blue-500 w-full h-screen" v-else>
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
}, 0.0);
onUpdated(() => {
  router.replace({ name: "welcomePage" });
});
</script>
<style scoped>
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
.planePath {
  stroke: #d9dada;
  stroke-width: 0.1%;
  stroke-width: 0.5%;
  stroke-dasharray: 1% 2%;
  stroke-linecap: round;
  fill: none;
}
.fil1 {
  fill: #d9dada;
}
.fil2 {
  fill: #c5c6c6;
}
.fil4 {
  fill: #9d9e9e;
}
.fil3 {
  fill: #aeafb0;
}
.img1 {
  cursor: pointer;
  transition: transform 0.5s;
}
.img1:hover {
  transform: scale(1.05);
}
</style>
img