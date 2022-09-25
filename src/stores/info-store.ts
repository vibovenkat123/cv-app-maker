/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useInfoStore = defineStore('info', () => {
  const firstName = ref('John');
  const lastName = ref('Smith');
  return { firstName, lastName };
});
