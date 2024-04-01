<script>
	import BtnSm from './BtnSm.svelte';
	import CartImg from './img/CartImg.svelte';
	import CompareImg from './CompareImg.svelte';
	import LikeImg from './img/LikeImg.svelte';
	import { itemModal } from '$lib/modalStore';

	let className = '';
	export { className as class };

	let modalState = false;

	itemModal.subscribe((value) => {
		modalState = value;
	});

	const toggleModal = () => {
		itemModal.set(!modalState);
	};
</script>

<div
	class="bg-white
  relative
  text-left
  rounded-2xl
  border-solid
  border-[#e6e8f0]
  border-2
  p-5
  flex
  flex-row
  gap-9
  items-start
  justify-start
  flex-wrap
  md:w-[287px]
  w-[244px]
  {className}"
>
	<LikeImg class="z-20 w-6 absolute top-0 right-0 m-4 cursor-pointer" />
	<div class="relative w-[247px]">
		<img class="mx-auto w-[131px]" src="./iphone.png" />
	</div>
	<div class="flex flex-col gap-3">
		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<div class="text-gray text-sm font-normal">Смартфон</div>
				<div class=" text-sm font-medium leading-[18px] text-black">
					Apple iPhone 13 128GB (темная ночь)
				</div>
			</div>
			<div class="flex flex-col gap-2">
				<div class="text-red w-[155px] text-lg font-bold leading-[18px]">от 2 500.00 руб.</div>
				<div class="w-[155px] text-sm font-normal leading-[18px] text-black">или 128 руб./мес.</div>
			</div>
		</div>
		<div class="flex md:flex-row flex-col justify-start md:gap-4 gap-2">
			<a href="./compare">
				<BtnSm
					ignoreClick
					class="!px-2 hover:fill-black fill-gray !w-full md:!w-max justify-center"
				>
					<CompareImg class="h-[18px] w-[18.36px]" />
					Сравнить
				</BtnSm>
			</a>
			<BtnSm
				on:click={toggleModal}
				class="px-[9px] hover:fill-black fill-gray bg-red hover:bg-[#c8052b] text-white hover:text-white border-none !w-full md:!w-max justify-center"
			>
				<CartImg class="h-[18px] w-[18.36px] stroke-white fill-white" />
				Купить сразу
			</BtnSm>
		</div>
	</div>
</div>

<style></style>
