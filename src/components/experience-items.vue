<script lang="ts" setup>
import { useInfoStore } from '@/stores/info-store';

const store = useInfoStore();
</script>
<template>
  <ul v-for="experience in store.experiences" :key="experience.id">
    <div class="flex mb-2">
      <div class="font-semibold text-lg">{{experience.from}} - {{experience.to}}</div>
      <div class="flex flex-col ml-9">
        <div class="font-semibold text-lg">{{experience.title}}</div>
        <div class="italic mt-3 mb-3">{{experience.location}}</div>
        <div>{{experience.description}}</div>
      </div>
    </div>
  </ul>
</template>
