<script lang="ts" setup>
import { useInfoStore } from '@/stores/info-store';

const store = useInfoStore();
function example() {
  store.firstName = 'John';
  store.lastName = 'Smith';
  store.jobTitle = 'Teacher';
}
example();
</script>
<template>
  <div class="p-6 w-full">
    <div class="bg-gray-100 flex flex-col rounded-md w-full">
      <div class = "bg-teal-500 w-full h-24 p-3 flex flex-col items-center">
        <div class="text-white text-3xl">
          {{`${store.firstName} ${store.lastName}`}}
        </div>
        <div class="text-white text-2xl">
          {{store.jobTitle}}
        </div>
      </div>
      <div >
        General info
      </div>
    </div>
  </div>

</template>
