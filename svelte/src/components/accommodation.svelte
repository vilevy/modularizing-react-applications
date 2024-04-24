<script lang="ts">
	import type { Accommodation } from "$lib/entities/Accommodation";

  export let accommodation: Accommodation;
</script>

<div class="rounded-lg flex flex-col items-center w-60">
  <img
    src={accommodation.image}
    alt={accommodation.name}
    class={`w-full rounded-t-lg aspect-square bg-gray-300 object-cover ${
      !accommodation.isAvailable ? 'grayscale' : ''
    }`}
    width={250}
    height={250}
  />
  <div class="py-4 px-4 bg-white flex flex-col justify-between rounded-b-lg text-gray-900 w-full flex-wrap gap-3">
    <h3 class="text-xl font-bold">{accommodation.name}</h3>
    <div class="flex items-center justify-between w-full">
      <span
        class={`text-xs italic ${!accommodation.isAvailable ? 'text-red-800' : ''}`}
      >
        {accommodation.isAvailable
          ? `${accommodation.restingCapacity} lugares disponíveis`
          : 'Indisponível'}
      </span>
      <span class="rounded-full w-8 py-0.5 text-center text-white font-bold text-xs self-end bg-sky-600">
        {accommodation.rating}
      </span>
    </div>
  </div>
</div>
