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
      <h3>How Your Donation Helps</h3>
      <p>Donations support various initiatives, including:</p>
      <ul>
        <li>Whale tracking and research programmes</li>
        <li>Rescue and rehabilitation of stranded whales</li>
        <li>Public education and outreach programmes</li>
        <li>Advocacy for stronger conservation policies</li>
      </ul>
      <h3>Donation Form</h3>
      <form>
        <label for="donor-name">Name:</label>
        <input type="text" id="donor-name" name="donor-name" required>

        <label for="donor-email">Email:</label>
        <input type="email" id="donor-email" name="donor-email" required>

        <label for="donation-amount">Donation Amount:</label>
        <input type="number" id="donation-amount" name="donation-amount" min="1" required>

        <button type="submit">Donate Now</button>
      </form>
    </section>
    
    <ContactForm />
  </main>
</template>

<script setup>
import ContactForm from './ContactForm.vue';
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

#donate form button {
    background-color: #2a9d8f;
}

#donate form button:hover {
    background-color: #264653;
}
</style>