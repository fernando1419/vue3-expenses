<template>
   <aside class="w-64 bg-gray-800 text-white h-screen flex flex-col">
      <h2 class="p-4 text-2xl font-bold">🚀 Expenses App</h2>
      <nav class="flex flex-col h-screen">
         <router-link to="/" class="block px-4 py-3 rounded hover:bg-gray-700 transition">🏠 Home</router-link>
         <router-link to="/dashboard" class="block px-4 py-3 hover:bg-gray-700 transition">📊 Dashboard</router-link>
         <router-link to="/expenses" class="block px-4 py-3 hover:bg-gray-700 transition">💵 Expenses</router-link>
         <!-- <router-link to="/settings" class="block px-4 py-3 hover:bg-gray-700 transition">⚙️ Settings</router-link> -->
         <Logout class="block px-4 py-3 mt-auto" />
      </nav>
   </aside>
</template>

<script lang="ts" setup>
import Logout from "@/auth/Logout.vue";
</script>
