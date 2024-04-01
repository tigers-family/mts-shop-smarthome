<script lang="ts">
	import Button from './Button.svelte';

	let className = '';
	export { className as class };

	let value: string;
</script>

<div class="relative flex items-center">
	<img class="w-[22px] absolute ml-4" src="./search.svg" />
	<input
		bind:value
		type="text"
		placeholder="Что будем искать?"
		class="rounded
    border-solid
    border-[#e6e8f0]
    border-2
    py-[9px]
    px-4
    pl-[46px]
    flex
    flex-row
    gap-2
    hover:border-cool-grey-8
    hover:placeholder:text-cool-grey-8
    focus:outline-[#1481B4]
    text-left
    text-base
    font-medium
    w-full
    {className}"
	/>

	{#if value}
		<Button class="absolute right-0 h-9 mr-4">Найти</Button>
	{/if}
</div>

<!-- <div class="flex flex-row gap-2 items-start justify-start relative h-[22px]">
		<img class="w-[22px] relative overflow-visible" src="./search.svg" />
	</div> -->
