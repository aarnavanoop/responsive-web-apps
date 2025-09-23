<template>
  <section id="contact">
    <h2>Contact Us</h2>
    <p>If you have any questions or would like to get involved, please reach out to us. We would love to hear from you!</p>
    <form @submit.prevent="handleSubmit">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>

      <label for="message">Message:</label>
      <textarea id="message" v-model="message" rows="4" required></textarea>

      <button type="submit">Send Message</button>
    </form>
    <div v-show="showConfirmation" class="confirmation-message">
      <p>We have received your message and will get back to you shortly.</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const showConfirmation = ref(false);

function handleSubmit() {
  showConfirmation.value = true;
  name.value = '';
  email.value = '';
  message.value = '';
}
</script>

<style scoped>
.confirmation-message {
  margin-top: 20px;
  padding: 15px;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  text-align: center;
}

button {
    background-color: #0a9396;
}

button:hover {
    background-color: #005f73;
}
</style>