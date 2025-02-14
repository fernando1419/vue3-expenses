<template>
   <form @submit.prevent="submitForm">
      <div class='p-4 bg-white rounded-lg w-1/2'>
         <h3 class="mb-1">Enter an Expense</h3>
         <div>
            <input v-model.trim="description" placeholder='Description' class='border p-2 rounded w-full h-7' />
            <p v-if="errors.description" class="text-red-500 text-xs font-semibold">{{ errors.description }}</p>
         </div>
         <div>
            <input v-model.number="amount" type='number' class='border p-2 rounded w-full mt-2 h-7' />
            <p v-if="errors.amount" class="text-red-500 text-xs font-semibold">{{ errors.amount }}</p>
         </div>
         <button type="submit" class='my-2 px-4 py-1 bg-blue-500 text-white rounded cursor-pointer float-right text-md'>
            Add
         </button>
      </div>
   </form>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';

type Errors = { description: string; amount: number; };
type FieldsToValidate = 'description' | 'amount';

const description = ref('');
const amount = ref(0);
const errors = ref<Errors>({});
const descriptionErrorMessage = 'Description field is required and must be at least 3 characters long.';
const amountErrorMessage = 'Amount field is required and must be greater than 0.';

const validateForm = () => {
   errors.value = {};
   validateField('description');
   validateField('amount');
};

const validateField = (field: FieldsToValidate) => {
   if (field === 'description') {
      errors.value.description = description.value.length < 3 ? descriptionErrorMessage : '';
   }
   if (field === 'amount') {
      errors.value.amount = amount.value <= 0 ? amountErrorMessage : '';
   }
};

watch(description, () => validateField('description'));
watch(amount, () => validateField('amount'));

const submitForm = async (): void => {
   validateForm();
   if (!errors.value.description && !errors.value.amount) {
      const newExpense = { description: description.value, amount: amount.value };
      // Add expense to LocalStorage:
      localStorage.setItem('expenses', JSON.stringify([...JSON.parse(localStorage.getItem('expenses') || '[]'), newExpense]));
      description.value = '';
      amount.value = 0;
      errors.value = {};
      await nextTick();
   }
};

</script>
