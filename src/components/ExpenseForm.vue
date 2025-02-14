<template>
   <div class='p-4 bg-white rounded-lg w-1/2'>
      <h3 class="mb-1">Enter an Expense</h3>
      <input v-model='description' placeholder='Description' class='border p-2 rounded w-full h-7' />
      <input v-model.number='amount' type='number' placeholder='Amount' class='border p-2 rounded w-full mt-2 h-7' />
      <button @click='add'
         class='my-2 px-4 py-1 bg-blue-500 text-white rounded cursor-pointer float-right text-md'>Add</button>
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const description = ref('');
const amount = ref(0);

const add = async () => {
   if (!description.value || amount.value <= 0) return;
   console.log(description.value, amount.value);
   description.value = '';
   amount.value = 0;
};
</script>
