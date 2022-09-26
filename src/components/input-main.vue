<script lang="ts" setup>
import { useInfoStore } from '@/stores/info-store';

const store = useInfoStore();
function addWithInput() {
  store.createExperience('From', 'To', 'Job Title', 'Location', 'Short Description');
}
function deleteExperience(id:number) {
  let index = 0;
  Object.keys(store.experiences).forEach((i) => {
    if (store.experiences[parseInt(i, 10)].id === id) {
      index = parseInt(i, 10);
    }
  });
  store.experiences.splice(index, 1);
}
function deleteEducation(id:number) {
  let index = 0;
  Object.keys(store.education).forEach((i) => {
    if (store.education[parseInt(i, 10)].id === id) {
      index = parseInt(i, 10);
    }
  });
  store.education.splice(index, 1);
}
function addEducation() {
  store.createEducation('From', 'To', 'Degree', 'Name of school');
}
</script>
<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  <div class="xl:w-3/4 p-6 w-full">
    <div class="flex flex-col bg-gray-200 p-3 rounded-md">
      <form>
        <div class="flex flex-col">
          General Info
          <div class="bg-gray-300 p-3 rounded-md">
            <label for = 'firstName'>
              <input type="text" id="firstName" placeholder="First Name"
              v-model="store.generalInfo.firstName" class="rounded-md p-1 w-full mt-3">
            </label>
            <label for="lastName" class="mt-3">
              <input type="text" id="lastName" placeholder="Last Name"
              v-model="store.generalInfo.lastName" class="rounded-md p-1 w-full mt-3">
            </label>
            <label for="jobTitile" class="mt-3">
              <input type="text" id="jobTitle" placeholder="Job Title"
              v-model="store.generalInfo.jobTitle" class="rounded-md p-1 w-full mt-3">
            </label>
            <label for="description" class="mt-3">
              <textarea type="text" id="description" placeholder="Description"
              v-model="store.generalInfo.description" class="rounded-md p-1 w-full break-auto
              mt-3"/>
            </label>
          </div>
        </div>
        <div class="flex flex-col">
          Work Experience(s)
          <div>
            <div mt-5 v-for="experience in store.experiences" :key="experience.id">
              <div class="bg-gray-300 p-3 rounded-md mb-2 flex flex-col">
                <label for = 'fromYear'>
                  <input type="text" id="fromYear" placeholder="From"
                  v-model="experience.from" class="rounded-md p-1 w-full mt-3">
                </label>
                <label for="toYear">
                  <input type="text" id="toYear" placeholder="Last Name"
                  v-model="experience.to" class="rounded-md p-1 w-full mt-3">
                </label>
                <label for="jobTitile">
                  <input type="text" id="jobTitle" placeholder="Job Title"
                  v-model="experience.title" class="rounded-md p-1 w-full mt-3">
                </label>
                <label for="location">
                  <textarea type="text" id="location" placeholder="Description"
                  v-model="experience.location"
                  class="rounded-md p-1 w-full break-auto mt-3"/>
                </label>
                <label for="description">
                  <textarea type="text" id="description" placeholder="Short Description"
                  v-model="experience.description"
                  class="rounded-md p-1 w-full break-auto mt-3"/>
                </label>
                <button type="button" @click="deleteExperience(experience.id)">
                  <span class="material-symbols-outlined bg-black w-1/5 rounded-md text-white">
                    delete
                  </span>
                </button>
              </div>
            </div>
          </div>
          <button type="button" @click="addWithInput">
            <span class="bg-teal-500 material-symbols-outlined w-1/4 rounded-md text-white">
              add
            </span></button>
        </div>
        <div class="flex flex-col">
          Education
          <div>
            <div mt-5 v-for="education in store.education" :key="education.id">
              <div class="bg-gray-300 p-3 rounded-md mb-2 flex flex-col">
                <label for = 'fromYear'>
                  <input type="text" id="fromYear" placeholder="From"
                  v-model="education.from" class="rounded-md p-1 w-full mt-3">
                </label>
                <label for="toYear">
                  <input type="text" id="toYear" placeholder="Last Name"
                  v-model="education.to" class="rounded-md p-1 w-full mt-3">
                </label>
                <label for="jobTitile">
                  <input type="text" id="jobTitle" placeholder="Degree"
                  v-model="education.degree" class="rounded-md p-1 w-full mt-3">
                </label>
                <label for="location">
                  <textarea type="text" id="location" placeholder="Description"
                  v-model="education.location"
                  class="rounded-md p-1 w-full break-auto mt-3"/>
                </label>
                <button type="button" @click="deleteEducation(education.id)">
                  <span class="material-symbols-outlined bg-black w-1/5 rounded-md text-white">
                    delete
                  </span>
                </button>
              </div>
            </div>
          </div>
          <button type="button" @click="addEducation">
            <span class="bg-teal-500 material-symbols-outlined w-1/4 rounded-md text-white">
              add
            </span></button>
        </div>
        <div class="flex flex-col">
          <div class="bg-gray-300 rounded-md p-3">
            <label for="Email">
              <input type="email" name="" id="Email" placeholder="Email"
              class="rounded-md p-1 w-full mt-3
              valid:bg-green-400
               invalid:bg-red-500 invalid:text-white" pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                v-model="store.personalInfo.email">
            </label>
            <label for="Phone">
              <input type="tel" name="" id="Phone" placeholder="Phone"
              pattern=
              "^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
              class="rounded-md p-1 w-full mt-3 valid:bg-green-400
              invalid:bg-red-500 invalid:text-white"
              v-model="store.personalInfo.phone">
            </label>
            <label for="Address">
              <input type="text" name="" id="Address" placeholder="Address"
              class="rounded-md p-1 w-full mt-3"
              v-model="store.personalInfo.address">
            </label>
          </div>
        </div>
      </form>
      <div class="w-full flex justify-center">
        <button type="button" class="relative xl:hidden mt-3 bg-teal-500 rounded-md
       text-white p-5">Preview</button>
      </div>
    </div>
  </div>
</template>
