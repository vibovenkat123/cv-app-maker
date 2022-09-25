/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useInfoStore = defineStore('info', () => {
  const firstName = ref('');
  const lastName = ref('');
  const jobTitle = ref('');
  const description = ref('');
  const id = ref(0);
  const experiences = ref([{
    from: 'From',
    to: 'To',
    id,
    title: 'Teacher',
    location: '1234 Test Lane',
    description: 'I was a teacher here',
  },
  ]);
  const eductation = ref([{
    from: 'From',
    to: 'To',
    id,
    degree: 'PHD in The Science Of Coolness',
    location: 'Cool University',
  }]);
  return {
    firstName, lastName, jobTitle, description, experiences, eductation,
  };
});
