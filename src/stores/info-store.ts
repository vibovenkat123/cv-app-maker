/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useInfoStore = defineStore('info', () => {
  const firstName = ref('');
  const lastName = ref('');
  const jobTitle = ref('');
  return { firstName, lastName, jobTitle };
});
