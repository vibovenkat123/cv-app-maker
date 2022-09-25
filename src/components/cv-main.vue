<script lang="ts" setup>
import { useInfoStore } from '@/stores/info-store';
import ExperienceItem from './experience-items.vue';
import EducationItems from './education-items.vue';

const store = useInfoStore();
function example() {
  store.generalInfo.firstName = 'John';
  store.generalInfo.lastName = 'Smith';
  store.generalInfo.jobTitle = 'Teacher';
  store.generalInfo.description = 'I am a teacher, I am very cool 😎';
}
example();
</script>
<template>
  <div class="p-6 w-full">
      <div class="flex flex-col w-full">
      <div class = "bg-teal-500 w-full h-24 p-3 flex flex-col items-center rounded-t-md">
        <div class="text-white text-3xl">
          {{`${store.generalInfo.firstName} ${store.generalInfo.lastName}`}}
        </div>
        <div class="text-white text-2xl">
          {{store.generalInfo.jobTitle}}
        </div>
      </div>
      <div class="flex">
        <div class="bg-gray-100 p-2 rounded-b-md w-3/5">
          <div class="flex flex-col">
            <div>
              <div class="text-xl mb-0.5">
                About Me
              </div>
              <div class="bg-teal-500 w-24 h-0.5"/>
              <div class="text-lg">
                {{store.generalInfo.description}}
              </div>
            </div>
          <div>
            <div class="text-xl mb-0.5 mt-2">
              Work Experience
            </div>
            <div class="bg-teal-500 w-40 h-0.5"/>
            <ExperienceItem/>
          </div>
          <div>
            <div class="text-xl mb-0.5 mt-2">
              Education
            </div>
            <div class="bg-teal-500 w-24 h-0.5"/>
            <EducationItems/>
          </div>
        </div>
        </div>
        <div class="bg-gray-300 w-2/5 flex flex-col p-2">
          <span class="text-xl text-black mb-0.5">Personal Info</span>
          <div class="bg-teal-500 w-30 h-0.5"/>
          <span class="text-lg font-semibold">Email</span>
          <a :href="`mailto:${store.personalInfo.email}`" class="break-words text-blue-500">
            {{store.personalInfo.email}}</a>
          <span class="text-lg font-semibold">Phone</span>
          <a :href="`tel:${store.personalInfo.phone}`" class="break-words text-blue-500">
            {{store.personalInfo.phone}}</a>
            <span class="text-lg font-semibold">Address</span>
          <a :href="`https://www.google.com/maps/search/${store.personalInfo.address}+${store.personalInfo.street}`" class="break-words text-blue-500">{{store.personalInfo.address}} {{store.personalInfo.street}}</a>
        </div>
      </div>
    </div>
    </div>
</template>
