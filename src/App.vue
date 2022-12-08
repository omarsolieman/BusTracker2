<template>
    <nav>
      <link href="./output.css" rel="stylesheet">
      <div class="px-6 pt-6 lg:px-8">
        <div>
          <nav class="flex h-9 items-center justify-between -mt-24" aria-label="Global">
            <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
              </a>
            </div>
            <div class="flex lg:hidden">
              <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Open main menu</span>
                <!-- Heroicon name: outline/bars-3 -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              <router-link to="/" class="font-semibold text-gray-900 hover:text-gray-900">Home </router-link>

              <router-link to="/feed" class="font-semibold text-gray-900 hover:text-gray-900">Feed </router-link>
                <a @click="handleSignOut" to="/" href="#" class="font-semibold text-gray-900 hover:text-gray-900">Log out </a>
              <router-link to="/register" class="font-semibold text-gray-900 hover:text-gray-900">Register </router-link>
            </div>
            <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <router-link to="/sign-in" class="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">Log in</router-link>
            </div>
          </nav>
          <!-- Mobile menu, show/hide based on menu open state. -->
          <!-- <div role="dialog" aria-modal="true">
            <div focus="true" class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div class="flex h-9 items-center justify-between">
                <div class="flex">
                  <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
                  </a>
                </div>
                <div class="flex">
                  <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                    <span class="sr-only">Close menu</span>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                  <div class="space-y-2 py-6">
                    <router-link to="/" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Home </router-link>

                    <router-link to="/feed" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Feed </router-link>
                    <span v-if="isLoggedIn">
                      <button @click="handleSignOut" to="/" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Log out </button>
                    </span>
                    <span v-else>
                    <router-link to="/register" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">Register </router-link>
                    </span>
                  </div>
                  <div class="py-6">
                    <router-link to="/sign-in" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10">Log in</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </nav>
    <main>
    <router-view />
    </main>
</template>

<script setup>
import { ref, watchEffect } from 'vue' // used for conditional rendering
import { getAuth,onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

const isLoggedIn = ref(true)

// runs after firebase is initialized
onAuthStateChanged(getAuth(),function(user) {
    if (user) {
      isLoggedIn.value = true // if we have a user
    } else {
      isLoggedIn.value = false // if we do not
    }
})

const handleSignOut = () => {
  signOut(getAuth())
  router.push('/')
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>