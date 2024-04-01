<script lang="ts">
	import { fly } from 'svelte/transition';
	import Button from './Button.svelte';

	export let title = 'title';
	export let desc = 'desc';
	export let img = './cat/0.png';

	let animateImg = false;

	function actionWhenInViewport(element: HTMLElement) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						animateImg = true;
					}
				});
			},
			{
				threshold: 1
			}
		);

		observer.observe(element);
	}
</script>

<div
	class="w-full max-w-[358px] md:w-[304px] lg:w-[224px] xl:w-[287px] h-[298px] md:h-[398px] lg:h-[338px] xl:h-[398px] relative overflow-hidden"
	use:actionWhenInViewport
>
	<div class="bg-[#f7f8fb] rounded-2xl absolute right-0 left-0 bottom-0 top-0">
		<div class="flex flex-col gap-3 items-start justify-start absolute top-5 px-5">
			<div class="text-lg leading-[18px] font-bold">{title}</div>
			<div class="text-base font-normal">{desc}</div>
		</div>

		{#if animateImg}
			<img
				class="object-cover h-[260px] md:h-[331px] lg:h-[260px] xl:h-[332px] absolute -right-[55px] -bottom-[65px]"
				src={img}
				in:fly={{ y: 200, duration: 2000 }}
			/>
		{/if}

		<Button class="absolute left-5 top-[234px] md:top-[314px] lg:top-[274px] xl:top-[314px]"
			>Перейти в категорию</Button
		>
	</div>
</div>
