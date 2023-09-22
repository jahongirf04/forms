
<script setup>
import { ref } from 'vue';

let cars = ["bmw", "ford", "mesr", "Telsa"]
</script>

<template>
    <div>
        <p v-for="item in cars">

           <router-link :to="{name: 'car', params: {name: item}}">{{ item }}</router-link>
        </p>
    </div>
</template>

<style scoped>
div{
    flex-direction: column;
}
</style>