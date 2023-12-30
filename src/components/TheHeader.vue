<script setup>
import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
} from "@headlessui/vue"
</script>

<template>
  <div class="bg-white dark:bg-gray-900 lg:pb-4">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <header class="flex items-center justify-between py-4 md:py-8">
        <!-- logo - start -->
        <router-link
          to="/"
          class="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold dark:text-gray-200 md:text-3xl"
          aria-label="logo"
        >
          <svg
            width="95"
            height="94"
            viewBox="0 0 95 94"
            class="h-auto w-6 text-indigo-500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
          </svg>
          TailVue
        </router-link>
        <!-- logo - end -->

        <!-- nav - start -->
        <nav class="hidden gap-12 lg:flex">
          <router-link to="/" active-class="nav-link-active" class="nav-link">
            Home
          </router-link>
          <router-link
            to="/about"
            active-class="nav-link-active"
            class="nav-link"
          >
            About
          </router-link>
        </nav>
        <!-- nav - end -->

        <!-- buttons - start -->
        <div
          class="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start"
        >
          <button
            id="theme-toggle"
            type="button"
            class="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            @click="toggleDark()"
          >
            <svg
              v-if="isDark"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              />
            </svg>
            <svg
              v-else
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <a
            href="#"
            class="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 dark:text-gray-300 md:text-base"
          >Sign in</a>

          <a
            href="#"
            class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >Sign up</a>
        </div>

        <!-- Mobile menu button -->
        <Popover v-slot="{ open }" class="relative lg:hidden">
          <PopoverButton>
            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 md:text-base lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              Menu
            </button>
          </PopoverButton>
          <PopoverOverlay
            class="bg-black"
            :class="open ? 'fixed inset-0 opacity-30' : 'opacity-0'"
          />
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
          >
            <PopoverPanel
              class="absolute right-0 top-12 z-10 rounded-lg bg-white shadow-lg dark:bg-gray-800"
            >
              <div class="grid w-64 min-w-max grid-cols-1 gap-4 p-4">
                <PopoverButton>
                  <router-link
                    active-class="nav-link-active"
                    class="nav-link"
                    to="/"
                  >
                    Home
                  </router-link>
                </PopoverButton>
                <PopoverButton>
                  <router-link
                    active-class="nav-link-active"
                    class="nav-link"
                    to="/about"
                  >
                    About
                  </router-link>
                </PopoverButton>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <!-- buttons - end -->
      </header>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.nav-link {
  @apply text-lg font-semibold text-gray-600 transition  duration-100
 hover:text-indigo-500  active:text-indigo-700 dark:text-gray-400 dark:hover:text-indigo-500;
}
.nav-link-active {
  @apply text-indigo-700 dark:text-indigo-400;
}
</style>
