<template>
   <div class="flex h-screen">
      <Sidebar />

      <!-- Main Content -->
      <div class="flex-1 flex flex-col">
         <!-- <Header /> -->

         <main class="bg-white-100 overflow-hidden flex-1">
            <!-- Page Content is rendered here:-->
            <router-view />
         </main>
      </div>
   </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';
</script>
