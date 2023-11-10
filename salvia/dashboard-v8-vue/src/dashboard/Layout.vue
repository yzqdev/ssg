<script setup>
import Overlay from './provider/Overlay.vue';
import DashboardProvider from './provider/Provider.vue';
import TopNavigation from './topnavigation/Index.vue';
import SideNavigation from './sidenavigation/Index.vue';
</script>

<template>
  <DashboardProvider>
    <div class="relative h-screen overflow-hidden bg-gray-100">
      <div class="relative h-screen overflow-hidden lg:rounded-2xl">
        <div class="flex items-start">
          <Overlay />
          <side-navigation mobile-position="right" />
          <div class="flex h-screen w-full flex-col pl-0 lg:w-99 lg:space-y-4">
            <top-navigation />
            <main
              class="h-screen overflow-auto px-2 pb-36 pt-8 md:px-8 md:pb-8 md:pt-4 lg:pt-0"
            >
              <slot />
            </main>
          </div>
        </div>
      </div>
    </div>
  </DashboardProvider>
</template>
