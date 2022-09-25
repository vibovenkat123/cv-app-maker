/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useInfoStore = defineStore('info', () => {
  const generalInfo = ref({
    firstName: ref(''),
    lastName: ref(''),
    location: ref(''),
    jobTitle: ref(''),
    description: ref(''),
  });
  const id = ref(0);
  const experiences = ref([{
    from: ref('From'),
    to: ref('To'),
    id,
    title: ref('Teacher'),
    location: ref('1234 Test Lane'),
    description: ref('I was a teacher here'),
  },
  ]);
  const education = ref([{
    from: ref('From'),
    to: ref('To'),
    id,
    degree: ref('PHD in The Science Of Coolness'),
    location: ref('Cool University'),
  }]);
  const personalInfo = ref({
    address: ref(1234),
    street: ref('Cool People Dr'),
    phone: ref(487555980),
    email: ref('john.smith@gmail.com'),
  });
  return {
    generalInfo, experiences, education, personalInfo,
  };
});
