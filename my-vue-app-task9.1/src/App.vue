<template>
  <div id="app">
    <img src="./assets/image2.png" alt="Placeholder Image" class="app-image" />

    <h1>{{ message }}</h1>
    <h2>{{ subtitle }}</h2>
    <p>{{ description }}</p>
    <p><strong>Reflection:</strong> {{ reflection }}</p>

    <h3>My Subjects This Trimester</h3>
    <ul>
      <li>SIT120 - Introduction to Responsive Web Apps</li>
      <li>SIT102 - Introduction to Programming</li>
      <li>SIT192 - Discrete Mathematics</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

      message: 'Welcome to My Vue.js Project',
      subtitle: 'Task 9.1P Showcase',
      description: 'A basic application built with Vue 3 and Vite to demonstrate component structure and data binding.',

      reflection: `
        The most challenging part of this task was ensuring the new CSS file was correctly linked and that the styles were being applied, as Vite handles asset paths differently than traditional setups. I overcame this by reviewing the Vite documentation and confirming the link path in the public/index.html file. Through this task, I learned how reactive data properties in Vue 3 automatically update the template, which is a powerful feature. I also learned to organize styles effectively by separating them into a dedicated file. My custom styles significantly improved the app's appearance by adding a structured layout, a pleasant color scheme, and better typography, making the content more readable and engaging. Having used Vue CLI before, I now prefer Vite due to its near-instant server start-up and Hot Module Replacement (HMR), which makes for a much faster and more efficient development experience.
      `
    };
  }
}
</script>

<style>

#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
  color: #333;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

h1 {
  color: #007bff;
}

.app-image {
  max-width: 300px;
  border-radius: 8px;
  margin-bottom: 20px;
}
</style>