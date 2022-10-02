<script lang="ts">
  import {
    createExperience,
    createEducation,
    generalInfo,
    personalInfo,
    education,
    experiences,
  } from "../stores/info";
  const phonePattern = String.raw `^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$`
  function addWithInput() {
    createExperience(
      "From",
      "To",
      "Job Title",
      "Location",
      "Short Description"
    );
  }
  function deleteItem(id:number, item:any, itemAsStore:any){
    let index = 0;
    Object.keys(item).forEach((i) => {
      if (item[parseInt(i, 10)].id === id) {
        index = parseInt(i, 10);
      }
    });
    itemAsStore.update((v: any[]) => {
      v.splice(index, 1);
      return v
    })
    return item;
  }
</script>

<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
  />
  <div class="xl:w-3/4 p-6 w-full">
    <div class="flex flex-col bg-gray-200 p-3 rounded-md">
      <form>
        <div class="flex flex-col">
          General Info
          <div class="bg-gray-300 p-3 rounded-md">
            <label for="firstName">
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                bind:value={$generalInfo.firstName}
                class="rounded-md p-1 w-full mt-3"
              />
            </label>
            <label for="lastName" class="mt-3">
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                bind:value={$generalInfo.lastName}
                class="rounded-md p-1 w-full mt-3"
              />
            </label>
            <label for="jobTitle" class="mt-3">
              <input
                type="text"
                id="jobTitle"
                placeholder="Job Title"
                bind:value={$generalInfo.jobTitle}
                class="rounded-md p-1 w-full mt-3"
              />
            </label>
            <label for="description" class="mt-3">
              <textarea
                type="text"
                id="description"
                placeholder="Description"
                bind:value={$generalInfo.description}
                class="rounded-md p-1 w-full break-auto
                mt-3"
              />
            </label>
          </div>
        </div>
        <div class="flex flex-col">
          Work Experience(s)
          <div>
            <div class="mt-5">
              {#each $experiences as experience}
                <div class="bg-gray-300 p-3 rounded-md mb-2 flex flex-col">
                  <label for="fromYear">
                    <input
                      type="text"
                      id="fromYear"
                      placeholder="From"
                      bind:value={experience.from}
                      class="rounded-md p-1 w-full mt-3"
                    />
                  </label>
                  <label for="toYear">
                    <input
                      type="text"
                      id="toYear"
                      placeholder="Last Name"
                      bind:value={experience.to}
                      class="rounded-md p-1 w-full mt-3"
                    />
                  </label>
                  <label for="jobTitile">
                    <input
                      type="text"
                      id="jobTitle"
                      placeholder="Job Title"
                      bind:value={experience.title}
                      class="rounded-md p-1 w-full mt-3"
                    />
                  </label>
                  <label for="location">
                    <textarea
                      type="text"
                      id="location"
                      placeholder="Description"
                      bind:value={experience.location}
                      class="rounded-md p-1 w-full break-auto mt-3"
                    />
                  </label>
                  <label for="description">
                    <textarea
                      type="text"
                      id="description"
                      placeholder="Short Description"
                      bind:value={experience.description}
                      class="rounded-md p-1 w-full break-auto mt-3"
                    />
                  </label>
                  <button
                    type="button"
                    on:click={() => {
                      deleteItem(experience.id, $experiences, experiences)
                    }}
                  >
                    <span
                      class="material-symbols-outlined bg-black w-1/5 rounded-md text-white"
                    >
                      delete
                    </span>
                  </button>
                </div>
              {/each}
            </div>
          </div>
          <button type="button" on:click={addWithInput}>
            <span
              class="bg-teal-500 material-symbols-outlined w-1/4 rounded-md text-white"
            >
              add
            </span></button
          >
        </div>
        <div class="flex flex-col">
          Education
          <div>
            <div class="mt-5">
              {#each $education as educationVal}
                <div class="bg-gray-300 p-3 rounded-md mb-2 flex flex-col">
                  <label for="fromYear">
                    <input
                      type="text"
                      id="fromYear"
                      placeholder="From"
                      bind:value={educationVal.from}
                      class="rounded-md p-1 w-full mt-3"
                    />
                  </label>
                  <label for="toYear">
                    <input
                      type="text"
                      id="toYear"
                      placeholder="Last Name"
                      bind:value={educationVal.to}
                      class="rounded-md p-1 w-full mt-3"
                    />
                  </label>
                  <label for="jobTitile">
                    <input
                      type="text"
                      id="jobTitle"
                      placeholder="Degree"
                      bind:value={educationVal.degree}
                      class="rounded-md p-1 w-full mt-3"
                    />
                  </label>
                  <label for="location">
                    <textarea
                      type="text"
                      id="location"
                      placeholder="Description"
                      bind:value={educationVal.location}
                      class="rounded-md p-1 w-full break-auto mt-3"
                    />
                  </label>
                  <button
                    type="button"
                    on:click={() => {
                      deleteItem(educationVal.id, $education, education)
                    }}
                  >
                    <span
                      class="material-symbols-outlined bg-black w-1/5 rounded-md text-white"
                    >
                      delete
                    </span>
                  </button>
                </div>
              {/each}
            </div>
          </div>
          <button type="button" on:click={() => {createEducation("From", "To", "Degree", "Name of school")}}>
            <span
              class="bg-teal-500 material-symbols-outlined w-1/4 rounded-md text-white"
            >
              add
            </span></button
          >
        </div>
        <div class="flex flex-col">
          <div class="bg-gray-300 rounded-md p-3">
            <label for="Email">
              <input
                type="email"
                name=""
                id="Email"
                placeholder="Email"
                class="rounded-md p-1 w-full mt-3
                valid:bg-green-400
                 invalid:bg-red-500 invalid:text-white"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                bind:value={$personalInfo.email}
              />
            </label>
            <label for="Phone">
              <input
                type="tel"
                id="Phone"
                placeholder="Phone"
                pattern="{phonePattern}"
                class="rounded-md p-1 w-full mt-3 valid:bg-green-400
                invalid:bg-red-500 invalid:text-white"
                bind:value={$personalInfo.phone}
              />
            </label>
            <label for="Address">
              <input
                type="text"
                name=""
                id="Address"
                placeholder="Address"
                class="rounded-md p-1 w-full mt-3"
                bind:value={$personalInfo.address}
              />
            </label>
          </div>
        </div>
      </form>
      <div class="w-full flex justify-center">
        <button
          type="button"
          class="relative xl:hidden mt-3 bg-teal-500 rounded-md
         text-white p-5">Preview</button
        >
      </div>
    </div>
  </div>
</template>
