<script>
  import "../app.css";
	import AccommodationsList from "../components/accommodationsList.svelte";
</script>

<div class="flex min-h-screen flex-col items-center justify-between">
  <header class="bg-sky-600 w-full p-6">
    <div class="max-w-6xl mx-auto font-bold text-2xl">HOTELS</div>
  </header>
  <main class="p-24 flex-1 bg-gray-200 w-full">
    <div class="max-w-6xl mx-auto">
      <AccommodationsList />
    </div>
  </main>
</div>
