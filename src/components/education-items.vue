<script lang="ts" setup>
import { useInfoStore } from '@/stores/info-store';

const store = useInfoStore();
</script>
  <template>
    <ul v-for="eductation in store.eductation" :key="eductation.id">
      <div class="flex mb-2">
        <div class="font-semibold text-lg">{{eductation.from}} - {{eductation.to}}</div>
        <div class="flex flex-col ml-9">
          <div class="font-semibold text-lg">{{eductation.degree}}</div>
          <div class="italic mt-3 mb-3">{{eductation.location}}</div>
        </div>
      </div>
    </ul>
  </template>
