<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()

const props = defineProps({
    activity: {
        type: Object,
        required: true,
    },

});

const goToContact = () => {
  router.push('/contact');
}

</script>

<template>

    <v-card
    class="mx-auto my-12" 
    max-width="250" :style="{ borderRadius: '15px', border: '2px solid blue', height: '500px'  }">
    
    <v-card-item class="title"> 
        <v-card-title>{{ activity.name }}</v-card-title>
    </v-card-item>

    <v-card-text>
        <div class="my-2 text-subtitle-1">{{ activity.location }}</div>
    </v-card-text>

<div class="when">
    <v-card-title>{{ activity.days }}</v-card-title>
    <v-card-title>{{ activity.month }}</v-card-title>
    <v-card-title>{{ activity.selectedTime }}</v-card-title>
</div>


<div class="rang-cap">
    <v-card-title>{{ activity.ageRange }}</v-card-title>
    <v-card-title>{{ activity.capacity }}</v-card-title>
</div>

<v-card-text>
<div>{{ activity.description }}</div>
</v-card-text>

<v-btn
color="primary" absolute :style="{ left: '50%', transform: 'translateX(-50%)', width: '100px', fontSize: 'x-small' }" class="mb-2" @click="goToContact">Contacto
</v-btn>

</v-card>


</template>

<style scoped lang="scss">
    .title{
        padding: 0;
        margin-left: 5%;
    }
    .when{
        display: flex;
        justify-content: space-between;
    }
</style>