<template>
   <div class='mt-4'>
      <div v-if='expensesList && expensesList.length > 0'>
         <h3 class="text-center text-green-800 bg-amber-200 font-bold">List of Expenses</h3>
         <div v-for='expense in expensesList' :key='expense.id'
            class='flex justify-between bg-gray-100 p-2 rounded my-2'>
            <span>{{ expense.description }} - ${{ expense.amount }}</span>
            <button @click='deleteExpense(expense.id)' type="button"
               class='text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-2 py-1 text-center me-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
               Delete
            </button>
         </div>
         <div class='text-right font-bold mt-2'>Total: ${{ 200 }}</div>
      </div>
      <div v-else>No expenses found.</div>

   </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Expense } from "@/types/expense";

const expensesList = ref([]);
const expensesTotal = ref(0);
const getExpensesList = () => JSON.parse(localStorage.getItem('expenses') || '[]');
const getExpensesTotal = () => getExpensesList().reduce((acc: number, expense: Expense) => acc + expense.amount, 0);

const deleteExpense = (id: string) => {
   expensesList.value = getExpensesList();
   if (expensesList.value.length === 0) return;

   console.log(id);
   const expenseToDelete = expensesList.value.find((expense: Expense) => expense.id === id);
   if (expenseToDelete) {
      expenseToDelete.isDeleted = true;
      localStorage.setItem('expenses', JSON.stringify(expensesList.value));
      expensesList.value = getExpensesList().filter((expense: Expense) => !expense.isDeleted);
   }
};

onMounted(() => {
   expensesList.value = getExpensesList().filter((expense: Expense) => !expense.isDeleted);
   console.log(expensesList.value);
   expensesTotal.value = getExpensesTotal();
});
</script>
