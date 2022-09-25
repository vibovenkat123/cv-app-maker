/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useInfoStore = defineStore('info', () => {
  let id = 0;
  const firstTime = !localStorage.getItem('generalInfo');
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
    degree: ref('Degree'),
    location: ref('Name of school'),
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
  watch(
    generalInfo,
    (generalInfoVal) => {
      localStorage.setItem('generalInfo', JSON.stringify(generalInfoVal));
    },
    { deep: true },
  );
  watch(
    experiences,
    (experienceVal) => {
      localStorage.setItem('experiences', JSON.stringify(experienceVal));
    },
    { deep: true },
  );
  watch(
    education,
    (educationVal) => {
      localStorage.setItem('education', JSON.stringify(educationVal));
    },
    { deep: true },
  );
  watch(
    personalInfo,
    (personalInfoVal) => {
      localStorage.setItem('personalInfo', JSON.stringify(personalInfoVal));
    },
    { deep: true },
  );
  if (localStorage.getItem('generalInfo')) {
    generalInfo.value = JSON.parse(localStorage.getItem('generalInfo')!);
  }
  if (localStorage.getItem('experiences')) {
    experiences.value = JSON.parse(localStorage.getItem('experiences')!);
  }
  if (localStorage.getItem('education')) {
    education.value = JSON.parse(localStorage.getItem('education')!);
  }
  if (localStorage.getItem('personalInfo')) {
    personalInfo.value = JSON.parse(localStorage.getItem('personalInfo')!);
  }
  return {
    generalInfo, experiences, education, personalInfo, createExperience, createEducation, firstTime,
  };
});
