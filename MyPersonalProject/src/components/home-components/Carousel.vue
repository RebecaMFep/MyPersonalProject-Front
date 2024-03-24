<script setup>
import { defineProps, ref, computed } from 'vue';

const props = defineProps({
    activities: {
        type: Array,
        required: true,
    },
});

const items = ref([
    {   
        isOutstanding : true,
        src: "http://localhost:8080/api/v1/images/activity1.jpg"
    },
    {
        isOutstanding : true,
        src: "http://localhost:8080/api/v1/images/activity2.jpg"
    },
    {
        isOutstanding : false,
        src: "http://localhost:8080/api/v1/images/activity3.jpg"
    },
    {
        isOutstanding : false,
        src: "http://localhost:8080/api/v1/images/activity4.png"
    },
    {
        isOutstanding : false,
        src: "http://localhost:8080/api/v1/images/activity5.jpeg"
    }
]);

const outstandingItems = computed(() => items.value.filter(item => item.isOutstanding));
</script>

<template>
    <v-carousel>
        <v-carousel-item v-for="(item, i) in outstandingItems" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
</template>