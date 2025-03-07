<template>
   <div>
      <button @click="logout"
         class="w-full px-1 py-2 text-md font-semibold rounded-lg text-white bg-red-700 hover:bg-red-800 hover:cursor-pointer focus:outline-none">Logout</button>
   </div>
</template>

<script setup>
const logout = () => {
   localStorage.removeItem('authToken');
   window.location.href = '/login'; // Redirect to login page
};
</script>
