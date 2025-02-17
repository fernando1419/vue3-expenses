<script setup>
const handleLogout = () => {
   window.location.href = '/dashboard';
};
</script>

<template>
   <div>
      <h2>Dashboard</h2>
      <p>Welcome, user: {{ }}</p>
      <button @click="handleLogout">Logout</button>
   </div>
</template>
