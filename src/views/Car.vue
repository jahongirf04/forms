<script setup>
import { useRoute } from 'vue-router';

const rout = useRoute()
</script>


<template>
    <div>
        <p>{{ rout.params.name }}</p>
        <router-link to="/cars">back</router-link>
    </div>
</template>