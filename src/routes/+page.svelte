<script lang="ts">
  import Header from "../components/header.svelte";
  import Input from "../components/input.svelte";
  import Cv from "../components/cv.svelte";
</script>

<main>
  <div class="flex flex-col">
    <Header />
    <div class="flex-col flex xl:flex-row">
      <Input />
      <Cv />
    </div>
  </div>
</main>
