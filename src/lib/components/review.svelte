<script>
	export let stars = 5;
	export let title = 'title';
	export let desc = 'desc';
	export let name = 'name';
</script>

<div
	class="rounded-2xl border-solid border-[#e6e8f0] border-2 p-5 md:p-10 min-w-[244px] md:min-w-[508px]"
>
	<div class="text-xl leading-6 font-bold relative underline">
		{@html title}
	</div>

	<div class="flex gap-1 mt-2 mb-4">
		{#each Array(stars) as _}
			<img src="./star.svg" alt="star" />
		{/each}
	</div>

	<div class="text-black text-base leading-6 font-normal">
		{@html desc}
	</div>

	<div class="text-gray text-base leading-6 font-normal mt-4">{name}</div>
</div>
