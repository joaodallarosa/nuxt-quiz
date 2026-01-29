<script setup lang="ts">
definePageMeta({
  colorMode: "dark",
});
</script>
<template>
    <UApp>
        <UContainer>
            <div class="w-full text-center">
                <h1 class="text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted lg:mt-16">
                    <span class="text-primary">Nuxt</span> Question Please
                </h1>
                <div class="text-lg sm:text-xl/8 text-muted mt-6 text-balance">A free Nuxt quiz.</div>

                <div class="flex flex-col gap-y-8 lg:grid lg:grid-cols-2 mt-10">
                    <div class="grid p-6 lg:p-8 xl:p-10 gap-6 bg-default ring ring-default">
                        <div class="flex flex-col min-w-0">
                            <div class="flex items-center gap-3">
                                <div class="text-primary text-2xl sm:text-3xl text-pretty font-bold">
                                    <UIcon name="uil-award-alt" class="size-6" />
                                    Mid Level
                                </div>
                            </div>
                            <ul class="list-disc list-inside flex flex-col gap-3 flex-1 mt-6 text-left">
                                <li class="text-muted text-sm">
                                    Nuxt 3 routing, layouts, and navigation
                                </li>
                                <li class="text-muted text-sm">
                                    Data fetching, state management, and composables
                                </li>
                                <li class="text-muted text-sm">
                                    Server API routes, middleware, and Nitro configuration
                                </li>
                                <li class="text-muted text-sm">
                                    SEO, head management, and meta handling
                                </li>
                                <li class="text-muted text-sm">
                                    Error handling, caching, and deployment options
                                </li>
                            </ul>
                        </div>
                        <div class="flex flex-col gap-6 items-center justify-end">
                            <UButton to="/free-mode" class="px-3 py-2 text-sm w-full justify-center bg-primary">
                                <span class="truncate">Start</span>
                            </UButton>
                        </div>
                    </div>
                    <div class="grid p-6 lg:p-8 xl:p-10 gap-6 bg-default ring ring-default">
                        <div class="flex flex-col min-w-0">
                            <div class="flex items-center gap-3">
                                <div class="text-orange-400 text-2xl sm:text-3xl text-pretty font-bold">
                                    <UIcon name="uil-award" class="size-6" />
                                    Senior Level
                                </div>
                            </div>
                            <ul class="list-disc list-inside flex flex-col gap-3 flex-1 mt-6 text-left">
                                <li class="text-muted text-sm">
                                    Nuxt and TypeScript
                                </li>
                                <li class="text-muted text-sm">
                                    Advanced Data Fetching and Nuxt Caching
                                </li>
                                <li class="text-muted text-sm">
                                    Nuxt Client & Server Plugins
                                </li>
                                <li class="text-muted text-sm">
                                    Server Pages and Components
                                </li>
                                <li class="text-muted text-sm">
                                    Nitro
                                </li>
                                <li class="text-muted text-sm">
                                    Nuxt Modules
                                </li>
                                <li class="text-muted text-sm">
                                    Nuxt Layers
                                </li>
                                <li class="text-muted text-sm">
                                    Cookies and Headers
                                </li>
                                <li class="text-muted text-sm">
                                    Testing in Nuxt
                                </li>
                            </ul>
                        </div>
                        <div class="flex flex-col gap-6 items-center justify-end">
                            <UButton to="/certification-mode" disabled class="px-3 py-2 text-sm w-full justify-center"
                                color="neutral">
                                <span class="truncate">(Work In Progress)</span>
                            </UButton>
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </Uapp>
</template>
