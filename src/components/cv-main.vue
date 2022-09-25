<script lang="ts" setup>
import { useInfoStore } from '@/stores/info-store';
import ExperienceItem from './experience-items.vue';

const store = useInfoStore();
function example() {
  store.firstName = 'John';
  store.lastName = 'Smith';
  store.jobTitle = 'Teacher';
  store.description = 'I am a teacher, I am very cool 😎';
}
example();
</script>
<template>
  <div class="p-6 w-full">
      <div class="flex flex-col w-full">
      <div class = "bg-teal-500 w-full h-24 p-3 flex flex-col items-center rounded-t-md">
        <div class="text-white text-3xl">
          {{`${store.firstName} ${store.lastName}`}}
        </div>
        <div class="text-white text-2xl">
          {{store.jobTitle}}
        </div>
      </div>
      <div class="bg-gray-100 p-2 rounded-b-md">
        <div class="flex flex-col">
          <div>
            <div class="text-xl mb-0.5">
              About Me
            </div>
            <div class="bg-teal-500 w-24 h-0.5"></div>
            <div class="text-lg">
              {{store.description}}
            </div>
          </div>
        <div>
          <div class="text-xl mb-0.5 mt-2">
            Work Experience
          </div>
          <div class="bg-teal-500 w-40 h-0.5"></div>
          <ExperienceItem/>
        </div>
      </div>
      </div>
    </div>
    </div>
</template>
