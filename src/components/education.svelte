<script lang="ts" setup>
  import { education } from "../stores/info";
</script>

<main>
  <ul>
    {#each $education as education}
      <div class="flex mb-2 justify-between">
        <div class="font-semibold text-lg">
          {education.from} - {education.to}
        </div>
        <div class="flex flex-col w-1/2">
          <div class="font-semibold text-lg break-words">
            {education.degree}
          </div>
          <div class="italic mt-3 mb-3">{education.location}</div>
        </div>
      </div>
    {/each}
  </ul>
</main>
