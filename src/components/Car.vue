<script setup>
import { useRoute, useRouter } from 'vue-router';
import { RouterView } from 'vue-router'; // Importing RouterView for nested routes
import cars from '../data/cars.json';

const route = useRoute();
const router = useRouter();

const carId = parseInt(route.params.id)
const car = cars.find(c => c.id === carId ); 

// using a conditional statement to conditional to render contact
const showContact = () => {
    if(carId === 4) return;
    router.push(`/cars/${carId}/contact`)
}


</script>

<template>
    <div v-if="car">
       <h1>Our Car</h1>
       <p>{{ car.name }}</p>
       <p>{{ car.price }}</p>
       <p>{{ car.year }}</p>
       <button @click="showContact">Click to get dealer info.</button>
       <!-- <button @click="router.push(`/cars/${carId}/contact`)">Click to get dealer info.</button> -->
       <RouterView /> <!-- Rendering nested routes -->
    </div>
    <div v-else>
        <h1>car not found</h1>
    </div>
</template>
