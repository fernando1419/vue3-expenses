<template>
   <div>
      <h3 class="text-gray-800 text-center text-2xl font-bold">Sign in</h3>
      <form @submit.prevent="login">
         <!-- Username -->
         <div>
            <label class="text-gray-800 text-sm block">User name</label>
            <div class="relative flex items-center">
               <input name="username" type="text" v-model="username" required
                  class="w-full text-gray-800 text-sm border border-gray-300 px-2 py-1 rounded-md outline-blue-600"
                  placeholder="Enter user name" />
               <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4"
                  viewBox="0 0 24 24">
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path
                     d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                     data-original="#000000"></path>
               </svg>
            </div>
         </div>
         <!-- Password -->
         <div>
            <label class="text-gray-800 text-sm mt-2 block">Password</label>
            <div class="relative flex items-center">
               <input name="password" type="password" v-model="password" required
                  class="w-full text-gray-800 text-sm border border-gray-300 px-2 py-1 rounded-md outline-blue-600"
                  placeholder="Enter password" />
               <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4"
                  viewBox="0 0 128 128">
                  <path
                     d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                     data-original="#000000"></path>
               </svg>
            </div>
         </div>
         <!-- submit button -->
         <div class="mt-4">
            <button type="submit"
               class="w-full py-2 px-2 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
               Sign in
            </button>
         </div>
      </form>

      <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '@/types/User';
import axios from "axios";

const username = ref('');
const password = ref('');
const errorMessage = ref('');

const login = async () => {
   try {
      const baseUrl = import.meta.env.VITE_API_URL;
      const users = await axios.get(`${baseUrl}/users`);
      const user = users.data.find((user: User) => user.email === username.value && user.password === password.value);
      if (!user) {
         errorMessage.value = 'Invalid Credentials.';
      } else {
         const token = `fake-token-for-${user.id}`;  // fake token
         localStorage.setItem('authToken', token);
         errorMessage.value = '';
         window.location.href = '/';
      }
   } catch (error) {
      errorMessage.value = 'Error connecting to the API server';
   }
};
</script>
