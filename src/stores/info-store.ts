/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useInfoStore = defineStore('info', () => {
  let id = 0;
  const generalInfo = ref({
    firstName: ref(''),
    lastName: ref(''),
    jobTitle: ref(''),
    description: ref(''),
  });
  const experiences = ref([{
    from: ref('From'),
    to: ref('To'),
    id,
    title: ref('Job Title'),
    location: ref('Location'),
    description: ref('Short Description'),
  },
  ]);
  function createExperience(
    from:string,
    to:string,
    title:string,
    location:string,
    description:string,
  ) {
    id += 1;
    experiences.value.push({
      from,
      to,
      id,
      title,
      location,
      description,
    });
  }
  const education = ref([{
    from: ref('From'),
    to: ref('To'),
    id,
    degree: ref('PHD in The Science Of Coolness'),
    location: ref('Cool University'),
  }]);
  const personalInfo = ref({
    address: ref(''),
    phone: ref(),
    email: ref(''),
  });
  function createEducation(
    from:string,
    to:string,
    degree:string,
    location:string,
  ) {
    id += 1;
    education.value.push({
      from,
      to,
      id,
      degree,
      location,
    });
  }
  return {
    generalInfo, experiences, education, personalInfo, createExperience, createEducation,
  };
});
