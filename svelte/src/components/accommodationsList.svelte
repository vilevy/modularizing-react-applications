
<script lang="ts">
	import { getAccommodations } from "$lib/services/get-accommodations";
	import { GetAccommodationsUseCase } from "$lib/use-cases/get-accommodations";
	import Accommodation from "./accommodation.svelte";

  const useCase = new GetAccommodationsUseCase(getAccommodations)
</script>

<div class="flex gap-4">
  {#await useCase.execute()}
    <p>...waiting</p>
  {:then accommodations}
    {#each accommodations as accommodation }
      <Accommodation accommodation={accommodation} />
    {/each}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>
