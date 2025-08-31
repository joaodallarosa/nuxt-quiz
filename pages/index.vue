<script setup lang="ts">

</script>
<template>
    <UApp>
        <UContainer>
            <div class="w-full px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted lg:mt-16">
                    <span class="text-primary">Nuxt</span> Question Please
                </h1>
                <div class="text-lg sm:text-xl/8 text-muted mt-6 text-balance">A free Nuxt 3 quiz.</div>

                <div class="flex flex-col gap-y-8 lg:grid lg:grid-cols-2 mt-10">
                    <div class="grid p-6 lg:p-8 xl:p-10 gap-6 bg-default ring ring-default">
                        <div class="flex flex-col min-w-0">
                            <div class="flex items-center gap-3">
                                <div class="text-highlighted text-2xl sm:text-3xl text-pretty font-semibold">
                                    <UIcon name="uil-paint-tool" class="size-6" />
                                    Free Mode
                                </div>
                            </div>
                            <ul class="list-disc list-inside flex flex-col gap-3 flex-1 mt-6 text-left">
                                <li class="text-muted text-sm">
                                    No Time Restriction
                                </li>
                                <li class="text-muted text-sm">
                                    Real-time statistics
                                </li>
                                <li class="text-muted text-sm">
                                    Check Correct Answer instantly
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
                                <div class="text-highlighted text-2xl sm:text-3xl text-pretty font-semibold">
                                    <UIcon name="uil-graduation-cap" class="size-6" />
                                    Certification Mode
                                </div>
                            </div>
                            <ul class="list-disc list-inside flex flex-col gap-3 flex-1 mt-6 text-left">
                                <li class="text-muted text-sm">
                                    30 Minutes Duration
                                </li>
                                <li class="text-muted text-sm">
                                    Statistics and Results at the end
                                </li>
                            </ul>
                        </div>
                        <div class="flex flex-col gap-6 items-center justify-end">
                            <UButton to="/certification-mode" disabled class="px-3 py-2 text-sm w-full justify-center"
                                color="neutral">
                                <span class="truncate">(Under Construction)</span>
                            </UButton>
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </Uapp>
</template>
