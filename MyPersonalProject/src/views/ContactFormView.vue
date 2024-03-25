<script setup>
import ContactForm from "@/components/home-components/ContactForm.vue";
</script>

<template>
    <div class="title-contact">
        <h1>¡Envíanos tu mensaje para contactar con nosotros!</h1>
    </div>
    <main>
    
    <ContactForm />
    </main>

</template>
<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Lakki+Reddy&family=Ribeye+Marrow&display=swap');

.title-contact {
    display: flex;
    justify-content: center;
    text-align: center;
}

h1 {
    font-family: "Lakki Reddy", serif;
  color: white;
  font-size: large;
}
</style>