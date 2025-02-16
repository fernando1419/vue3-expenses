<script setup lang="ts">
import ExpenseList from "@components/ExpenseList.vue";
import Login from "@/auth/Login.vue";
</script>

<template>
   <main class="mx-auto w-1/2">
      <section class="flex flex-col gap-4">
         <Login />
         <ExpenseList />
      </section>
   </main>
</template>

<style scoped></style>
