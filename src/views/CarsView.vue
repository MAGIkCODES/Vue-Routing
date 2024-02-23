<script setup>
import cars from '../data/cars.json' 
import { RouterLink } from 'vue-router'
</script>


<template>
    <div>
        <h1>Our latest cars</h1>
        <div class="cars">
            <!-- route to a unique id -->
            <RouterLink :to="`/cars/${car.id}`"  v-for="car in cars" :key="car.id" >
                {{ car.name }}
            </RouterLink>
        </div>
    </div>
</template>

<style scope>
    .cars {
    display: flex;
    /* flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 10px; */
   }

   .cars a {
    text-decoration: none;
    /* color: black; */
    font-weight: 900;
    width: 100%;
    box-shadow: 1px 1px 10px rgba(2, 2, 2, 0.1);
    margin: 10px;
    padding: 15px;
    
   }

   .cars a:hover {
    color: black;
   }
</style>