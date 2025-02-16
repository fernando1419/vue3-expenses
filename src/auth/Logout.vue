<template>
   <div>
      <button @click="logout">Logout</button>
   </div>
</template>

<script setup>
const logout = () => {
   localStorage.removeItem('authToken');
   window.location.href = '/login'; // Redirect to login page
};
</script>
