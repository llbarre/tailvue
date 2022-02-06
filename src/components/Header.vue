<template>
    <div class="bg-white dark:bg-gray-900 lg:pb-4">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <header class="flex justify-between items-center py-4 md:py-8">
                <!-- logo - start -->
                <router-link
                    to="/"
                    class="inline-flex items-center text-black-800 dark:text-gray-200 text-2xl md:text-3xl font-bold gap-2.5"
                    aria-label="logo"
                >
                    <svg
                        width="95"
                        height="94"
                        viewBox="0 0 95 94"
                        class="w-6 h-auto text-indigo-500"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                    </svg>
                    TailVue
                </router-link>
                <!-- logo - end -->

                <!-- nav - start -->
                <nav class="hidden lg:flex gap-12">
                    <router-link to="/" active-class="nav-link-active" class="nav-link">Home</router-link>

                    <router-link to="/about" active-class="nav-link-active" class="nav-link">About</router-link>
                </nav>
                <!-- nav - end -->

                <!-- buttons - start -->
                <div
                    class="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8"
                >
                    <button
                        @click="toggleModes"
                        id="theme-toggle"
                        type="button"
                        class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                    >
                        <svg
                            ref="themeToggleDarkIcon"
                            class="w-5 h-5 hidden"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                            />
                        </svg>
                        <svg
                            ref="themeToggleLightIcon"
                            class="w-5 h-5 hidden"
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
                        class="inline-block focus-visible:ring ring-indigo-300 dark:text-gray-300 text-gray-500 hover:text-indigo-500 active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3"
                    >Sign in</a>

                    <a
                        href="#"
                        class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                    >Sign up</a>
                </div>

                <button
                    type="button"
                    class="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
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
                <!-- buttons - end -->
            </header>
        </div>
    </div>
</template>

<script setup>
import { useDarkMode } from '../composables/useDarkMode';

const { toggleModes, themeToggleDarkIcon, themeToggleLightIcon } = useDarkMode()

</script>

<style lang="css" scoped>
.nav-link {
    @apply text-gray-600 dark:text-gray-400 dark:hover:text-indigo-500 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100
text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100;
}
.nav-link-active {
    @apply text-indigo-700 dark:text-indigo-400;
}
</style>