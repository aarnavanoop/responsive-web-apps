<template>
  <main>
    <section id="feature">
      <h2>Featured: Whale Conservation</h2>
      <p>Learn about our efforts to protect whale populations worldwide and how you can help. Our mission is to raise awareness and support for whale conservation through education, advocacy, and community involvement.</p>
      <div class="feature-content">
        <img src="https://media.istockphoto.com/id/1301664341/photo/humpback-whale-mother-and-calf-swimming-in-clear-blue-ocean.jpg?s=2048x2048&w=is&k=20&c=vLK4jDJFVTVelVJNUxo-l00xgnRVNt_eq5ZbnXjz1vY=" alt="Whale in the ocean">
        <a href="#donate" class="feature-link">Help the Whale</a>
      </div>
    </section>
    
    <section id="about">
      <h2>About Us</h2>
      <p>We are dedicated to preserving whale species and their habitats through education and advocacy. Founded in 2001, our organisation has been at the forefront of whale conservation, working with global partners to ensure the survival of these majestic creatures.</p>
      <h3>Our Mission</h3>
      <p>Our mission is to protect whales and their habitats through comprehensive conservation strategies, public education, and policy advocacy. We aim to reduce the impact of human activities on whale populations and ensure a future where whales thrive.</p>
      <h3>Our Impact</h3>
      <ul>
        <li>Over 500 whales rescued and rehabilitated</li>
        <li>Numerous awareness campaigns reaching millions worldwide</li>
        <li>Active collaboration with international conservation organisations</li>
      </ul>
    </section>
    
    <section id="donate">
      <h2>Donate</h2>
      <p>Your contribution helps fund important research and conservation projects. Every donation, big or small, makes a difference in protecting whale populations and preserving their natural habitats.</p>
      
      <DonationForm @submit-donation="handleDonation" />

      <div v-if="donationSummary" class="donation-summary">
        <h3>Donation Summary</h3>
        <p><strong>Thank you, {{ donationSummary.name }}!</strong></p>
        <p>Email: {{ donationSummary.email }}</p>
        <p>Donation Amount: ${{ donationSummary.amount }}</p>
      </div>
    </section>
    
    <ContactForm />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import ContactForm from './ContactForm.vue';
import DonationForm from './DonationForm.vue';

const donationSummary = ref(null);

function handleDonation(formData) {
  donationSummary.value = formData;
}
</script>

<style scoped>
main {
  padding: 0;
}

.feature-content {
  text-align: center;
}

.feature-link {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 25px;
  background-color: #2a9d8f;
  color: white;
  font-weight: bold;
  border-radius: 5px;
}

.feature-link:hover {
  background-color: #264653;
  text-decoration: none;
}

.donation-summary {
  margin-top: 25px;
  padding: 20px;
  background-color: #eaf4f4;
  border: 1px solid #94d2bd;
  border-radius: 8px;
}

.donation-summary h3 {
  margin-top: 0;
  color: #005f73;
}
</style>