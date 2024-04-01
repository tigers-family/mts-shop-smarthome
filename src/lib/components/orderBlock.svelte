<script lang="ts">
	import { fly } from 'svelte/transition';
	import Button from './Button.svelte';

	let animateBubbles = false;

	function actionWhenInViewport(element: HTMLElement) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						animateBubbles = true;
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

<div class="relative bg-[#F7F8FB] rounded-2xl overflow-hidden" use:actionWhenInViewport>
	<div class=" md:py-10 md:px-12 lg:px-[208px] xl:px-[334px] z-[100] relative px-5 py-10">
		<div class="text-2xl lg:mb-8 md:text-[40px] leading-[26px] font-black text-center">
			Оформите заказ
		</div>

		<div class="flex flex-col gap-3 mt-4">
			<input
				type="text"
				placeholder="*Ваше имя"
				class="rounded pl-5 hover:border-cool-grey-8
        hover:placeholder:text-cool-grey-8
        focus:outline-[#1481B4] border-solid border-[#e6e8f0] border-2 h-11 flex justify-center md:justify-start items-center"
			/>
			<input
				type="text"
				placeholder="*Ваш номер телефона"
				class="rounded pl-5 hover:border-cool-grey-8
        hover:placeholder:text-cool-grey-8
        focus:outline-[#1481B4] border-solid border-[#e6e8f0] border-2 h-11 flex justify-center md:justify-start items-center"
			/>
		</div>

		<Button class="w-full bg-[#ED7F86] mt-6 md:w-max md:mx-auto">Оформить заказ</Button>
	</div>

	{#if animateBubbles}
		<img
			src="./bubble.svg"
			in:fly={{ y: 200, duration: 2000 }}
			alt="bubble"
			class="absolute w-[14px] top-[15px] left-[35px] z-[1] md:w-[49px] lg:w-[39px] lg:left-[85px] xl:left-[185px]"
		/>

		<img
			src="./bubble.svg"
			in:fly={{ y: 200, duration: 2000 }}
			alt="bubble"
			class="absolute w-[55px] -top-[25px] right-[35px] z-[1] md:w-[193px] md:-top-[100px] md:-right-[15px] lg:right-[59px] xl:right-[111px]"
		/>

		<img
			src="./bubble.svg"
			in:fly={{ y: 200, duration: 2000 }}
			alt="bubble"
			class="absolute w-[141px] -bottom-[80px] -left-[20px] z-[1] md:w-[178px] md:-left-[10px] lg:w-[326px] lg:-left-[130px] lg:-bottom-[94px] xl:-left-[23px]"
		/>

		<img
			src="./bubble.svg"
			in:fly={{ y: 200, duration: 2000 }}
			alt="bubble"
			class="absolute w-[34px] bottom-[15px] right-[35px] z-[1] md:w-[66px] md:right-[15px] lg:w-[74px] lg:right-[0px] xl:right-[50px]"
		/>
	{/if}
</div>
