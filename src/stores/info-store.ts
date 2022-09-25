/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useInfoStore = defineStore('info', () => {
  const firstName = ref('');
  const lastName = ref('');
  const jobTitle = ref('');
  const description = ref('');
  const experiences = ref([{
    from: 'From',
    to: 'To',
    id: 1,
    title: 'Teacher',
    location: '1234 Test Lane',
    description: 'I was a teacher here',
  },
  ]);
  return {
    firstName, lastName, jobTitle, description, experiences,
  };
});
