<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
       <RouterLink active-class="active" to="/">Home</RouterLink>
       <RouterLink active-class="active" to="/about">About</RouterLink>
       <RouterLink active-class="active" to="/cars">Cars</RouterLink>
    </nav>
</template>

<style scoped>
    nav {
        background-color: #333;
        padding: 10px;
    }

    nav a {
        color: white;
        text-decoration: none;
        margin-right: 10px;
    }

    nav a:hover {
        color: lightgray;
    }

    .active {
        font-weight: 900;
        color: red;
    }
</style>