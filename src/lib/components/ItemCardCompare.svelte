<script>
	import BtnSm from './BtnSm.svelte';
	import CartImg from './img/CartImg.svelte';
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

<div class="flex flex-col items-center">
	<div class="font-bold text-xs text-cool-grey-8 pb-3 cursor-pointer">Убрать</div>

	<div
		class="bg-white
    relative
    text-left
    rounded-2xl
    border-solid
    border-[#e6e8f0]
    border-2
    px-[14px]
    py-5
    flex
    flex-row
    gap-4
    flex-wrap
  
    min-w-[138px]
    max-w-[287px]
    {className}"
	>
		<LikeImg class="w-6 absolute top-0 right-0 m-4 cursor-pointer hidden md:block" />
		<div class="mx-auto">
			<img class="h-[95px] md:h-[177px]" src="./iphone.png" />
		</div>
		<div class="flex flex-col gap-2 sm:gap-3 w-full">
			<div class="flex flex-col gap-2 sm:gap-4">
				<div class="flex flex-col gap-2">
					<div class="text-gray text-sm font-normal">Смартфон</div>
					<div class=" text-xs sm:text-sm font-medium leading-[18px] text-black">
						Apple iPhone 13 128GB (темная ночь)
					</div>
				</div>
				<div class="flex flex-col gap-2">
					<div class="text-red text-xs sm:text-[18px] font-bold leading-[14px]">2 500.00 руб.</div>
					<div class="w-[155px] text-sm font-normal leading-[18px] text-black hidden md:block">
						или 128 руб./мес.
					</div>
				</div>
			</div>

			<BtnSm
				on:click={toggleModal}
				class="px-[6px] hover:fill-black text-[12px] sm:text-[14px] leading-[18px] fill-gray bg-red hover:bg-[#c8052b] text-white hover:text-white border-none !w-full justify-center"
			>
				<CartImg class="h-[18px] w-[16px] stroke-white fill-white" />
				Купить сразу
			</BtnSm>
		</div>
	</div>
</div>
