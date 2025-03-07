<template>
   <header class="bg-blue-200 shadow-md h-10 flow-root px-6 content-center">
      <h1 class="text-lg font-semibold float-left mt-1"> {{ route.name }}</h1>
      <div class="float-right">
         <Logout />
      </div>
   </header>
</template>

<script setup lang="ts">
import Logout from '@/auth/Logout.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

</script>
