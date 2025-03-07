<template>
   <form @submit.prevent="submitForm">
      <div class='bg-white rounded-lg'>
         <h3 class="mb-1 text-left text-green-800 bg-blue-200 font-bold">Enter an expense:</h3>
         <div>
            <input v-model.trim="description" placeholder='Description'
               class="w-full text-gray-800 text-sm border border-gray-300 px-2 py-1 rounded-md outline-blue-600" />
            <p v-if="errors.description" class="text-red-500 text-xs font-semibold">{{ errors.description }}</p>
         </div>
         <div>
            <input v-model.number="amount" type='number'
               class='w-full text-gray-800 text-sm border border-gray-300 px-2 py-1 rounded-md outline-blue-600 mt-2' />
            <p v-if="errors.amount" class="text-red-500 text-xs font-semibold">{{ errors.amount }}</p>
         </div>
         <button type="submit"
            class="py-2 px-4 my-2 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none float-right">
            Add
         </button>
      </div>
   </form>
</template>

<script setup lang="ts">
import { ref, reactive, watch, nextTick } from 'vue';
import type { Expense } from "@/types/Expense";

type Error = { description?: string; amount?: string; };
type FieldsToValidate = 'description' | 'amount';

const description = ref('');
const amount = ref(0);
let errors = reactive(<Error>{});
const emit = defineEmits(["expenseAdded"]);
const descriptionErrorMessage = 'Description field is required and must be at least 3 characters long.';
const amountErrorMessage = 'Amount field is required and must be greater than 0.';

const validateForm = () => {
   errors = {};
   validateField('description');
   validateField('amount');
};

const validateField = (field: FieldsToValidate) => {
   if (field === 'description') {
      errors.description = description.value.length < 3 ? descriptionErrorMessage : '';
   }
   if (field === 'amount') {
      errors.amount = amount.value <= 0 ? amountErrorMessage : '';
   }
};

watch(description, () => validateField('description'));
watch(amount, () => validateField('amount'));

const submitForm = async (): Promise<void> => {
   validateForm();
   if (!errors.description && !errors.amount) {
      const newExpense: Expense = {
         id: crypto.randomUUID(),
         description: description.value,
         amount: amount.value,
         isDeleted: false
      };
      // Add expense to LocalStorage:
      localStorage.setItem('expenses', JSON.stringify([...JSON.parse(localStorage.getItem('expenses') || '[]'), newExpense]));
      description.value = '';
      amount.value = 0;
      errors = {};
      await nextTick();
      emit("expenseAdded");
   }
};

</script>
