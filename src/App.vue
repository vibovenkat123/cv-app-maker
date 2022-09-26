<script lang="ts" setup>
import CvMain from './components/cv-main.vue';
import InputMain from './components/input-main.vue';
import HeaderItem from './components/header-item.vue';
</script>
<template>
  <div class="flex flex-col">
    <HeaderItem/>
    <div class="flex-col flex xl:flex-row">
      <InputMain/>
      <CvMain></CvMain>
  </div>
  </div>
</template>
