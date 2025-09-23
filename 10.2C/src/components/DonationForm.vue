<template>
  <div class="donation-form-container">
    <h3>Donation Form</h3>
    <form @submit.prevent="submitForm">
      <label for="donor-name">Name:</label>
      <input type="text" id="donor-name" v-model="name" required>

      <label for="donor-email">Email:</label>
      <input type="email" id="donor-email" v-model="email" required>

      <label for="donation-amount">Donation Amount:</label>
      <input type="number" id="donation-amount" v-model.number="amount" min="1" required>

      <button type="submit">Donate Now</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const amount = ref(null);

const emit = defineEmits(['submit-donation']);

function submitForm() {
  const formData = {
    name: name.value,
    email: email.value,
    amount: amount.value
  };
  emit('submit-donation', formData);
  
  name.value = '';
  email.value = '';
  amount.value = null;
}
</script>

<style scoped>
.donation-form-container {
  padding-top: 20px;
}

form {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
}

button {
  background-color: #2a9d8f;
}

button:hover {
  background-color: #264653;
}
</style>