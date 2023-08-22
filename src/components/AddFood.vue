<template>
  <form @submit.prevent="handleSubmit">
    <input id="food" type="text"/>
    <button>ADD</button>
  </form>
</template>

<script setup>
import { useFoodStore } from "@/store/food";

const counter = useFoodStore();
</script>

<script>
export default {
  name: food,
  setup() {
    const food = useFoodStore();
    return { food };
  },
  methods: {
    async addFood() {
      let food = document.getElementById("food").value;
      
    },
  },
};
</script>

<style scoped lang="scss"></style>
