<script lang="ts" setup>
import { useInfoStore } from '@/stores/info-store';

const store = useInfoStore();
</script>
<template>
  <div class="w-3/4 p-6">
    <div class="flex flex-col bg-gray-200 p-3 rounded-md">
      <form>
        <div class="flex flex-col">
          General Info
          <label for = 'firstName' class="mt-3">
            <input type="text" id="firstName" placeholder="First Name"
            v-model="store.generalInfo.firstName" class="rounded-md p-1 w-full">
          </label>
          <label for="lastName" class="mt-3">
            <input type="text" id="lastName" placeholder="Last Name"
            v-model="store.generalInfo.lastName" class="rounded-md p-1 w-full">
          </label>
          <label for="jobTitile" class="mt-3">
            <input type="text" id="jobTitle" placeholder="Job Title"
            v-model="store.generalInfo.jobTitle" class="rounded-md p-1 w-full">
          </label>
          <label for="description" class="mt-3">
            <textarea type="text" id="description" placeholder="Description"
            v-model="store.generalInfo.description" class="rounded-md p-1 w-full break-auto"/>
          </label>
        </div>
      </form>
    </div>
  </div>
</template>
