<script>
	import { fly } from 'svelte/transition';
	import Button from './Button.svelte';
	import { onMount } from 'svelte';

	let animateFirstBlock = false;

	onMount(() => {
		animateFirstBlock = true;
	});
</script>

<div
	class="w-full
  max-w-[358px]
  md:max-w-[624px]
  lg:max-w-[944px]
  xl:max-w-[1196px]
  h-[380px]
  sm:h-[412px]
  md:h-[624px]
  lg:h-[358px]
  relative
  mx-auto
  bg-block-1-bg
  bg-cover
  bg-center
  rounded-2xl
  overflow-hidden
  "
>
	<div
		class="flex flex-col gap-3 absolute px-5 py-10 md:px-10 md:py-20 lg:py-[112px] lg:px-[34px] xl:py-[106px] xl:px-[64px]"
	>
		<div
			class="text-[20px] leading-[22px] md:text-[40px] md:leading-[42px] lg:leading-[34px] lg:text-[32px] xl:text-[40px] xl:leading-[42px] font-bold"
		>
			Товары для умного дома
		</div>
		<div
			class="text-base md:text-[22px] md:leading-[24px] lg:text-[16px] lg:leading-[20px] xl:text-[22px] xl:leading-[24px] text-cool-grey-10 font-normal"
		>
			Комфортный быт с минимумом усилий
		</div>
		<Button class="mt-3 w-max">Узнать подробнее</Button>
	</div>

	{#if animateFirstBlock}
		<img
			in:fly={{ y: 200, duration: 2000 }}
			class="object-cover
    absolute
    -bottom-[60px]
    md:-bottom-[120px]
    scale-[1.2]
    lg:w-[400px]
    lg:right-[47px]
    lg:-bottom-[60px]
    xl:w-[470px]
    xl:right-[120px]
    xl:-bottom-[70px]"
			src="./block-1.png"
		/>
	{/if}
</div>
