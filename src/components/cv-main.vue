<script lang="ts" setup>
import { useInfoStore } from '@/stores/info-store';

const store = useInfoStore();
</script>
<template>
  <div class="p-6">
    <div class="bg-gray-100 flex flex-col rounded-md w-96">
      <div class = "bg-teal-500 w-full h-24 p-3 flex flex-col items-center">
        <div class="text-white text-3xl">
          {{`${store.firstName} ${store.lastName}`}}
        </div>
      </div>
      <div >
        General info
      </div>
    </div>
  </div>

</template>
