<script setup lang="ts">
// import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

// const authStore = useAuthStore();
const router = useRouter();

const goToDashboard = () => {
   router.push('/dashboard');
   // window.location.href = '/dashboard';
};

const goToLogin = () => {
   router.push('/login');
   // window.location.href = '/login';
};
</script>

<template>
   <router-view />

   <div
      class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div class="text-center max-w-2xl p-6">
         <h1 class="text-4xl font-bold mb-4 animate-fade-in">Welcome to Expense Tracker</h1>
         <p class="text-lg mb-6">Manage your expenses effortlessly.</p>

         <div class="space-x-4">
            <button v-if="true" @click="goToDashboard"
               class="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg transition">
               Go to Dashboard
            </button>

            <button v-else @click="goToLogin"
               class="px-6 py-3 bg-white text-blue-600 hover:bg-gray-200 rounded-lg shadow-lg transition">
               Sign In
            </button>
         </div>
      </div>
   </div>
</template>

<style scoped>
@keyframes fade-in {
   from {
      opacity: 0;
      transform: translateY(-10px);
   }

   to {
      opacity: 1;
      transform: translateY(0);
   }
}

.animate-fade-in {
   animation: fade-in 1s ease-in-out;
}
</style>
