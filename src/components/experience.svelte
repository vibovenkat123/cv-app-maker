<script lang="ts" setup>
  import { each } from "svelte/internal";
  import { experiences } from "../stores/info";
</script>

<template>
  <ul>
    {#each $experiences as experience}
      <div class="flex mb-2 justify-between">
        <div class="font-semibold text-lg">
          {experience.from} - {experience.to}
        </div>
        <div class="flex flex-col w-1/2">
          <div class="font-semibold text-lg">{experience.title}</div>
          <div class="italic mt-3 mb-3">{experience.location}</div>
          <div>{experience.description}</div>
        </div>
      </div>
    {/each}
  </ul>
</template>
