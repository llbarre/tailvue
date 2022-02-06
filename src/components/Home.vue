<template>
    <div class="bg-white dark:bg-gray-900 pb-6 sm:pb-8 lg:pb-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <section
                class="min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-24"
            >
                <!-- image - start -->
                <img
                    src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500"
                    loading="lazy"
                    alt="Photo by Fakurian Design"
                    class="w-full h-full object-cover object-center absolute inset-0"
                />
                <!-- image - end -->

                <!-- overlay - start -->
                <div class="bg-indigo-500 mix-blend-multiply absolute inset-0"></div>
                <!-- overlay - end -->

                <!-- text start -->
                <div class="sm:max-w-xl flex flex-col items-center relative p-4">
                    <p
                        class="text-indigo-200 text-lg sm:text-xl text-center mb-4 md:mb-8"
                    >Very proud to introduce</p>
                    <h1
                        class="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12"
                    >Revolutionary way to build the web</h1>

                    <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
                        <a
                            href="#"
                            class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                        >Start now</a>

                        <a
                            href="#"
                            class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                        >Take tour</a>
                    </div>
                </div>
                <!-- text end -->
            </section>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>