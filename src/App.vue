<script setup lang="ts">
import ExpenseList from "@components/ExpenseList.vue";
import ExpenseForm from "@components/ExpenseForm.vue";
</script>

<template>
   <main class="mx-auto w-1/2">
      <section class="flex flex-col gap-5">
         <ExpenseList />
         <ExpenseForm />
      </section>
   </main>
</template>

<style scoped></style>
