import { defineStore } from "pinia";

export const useFoodStore = defineStore("food", {
  state: () => ({ users: [] }),
  getters: {
    getFoods: (state) => state.foods,
  },
  actions: {
    addFood(food) {
      this.foods.push(food);
    },
  },
});
