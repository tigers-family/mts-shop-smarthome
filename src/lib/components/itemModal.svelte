<script lang="ts">
	import Button from './Button.svelte';
	import { itemModal } from '$lib/modalStore';

	let modalState = false;

	itemModal.subscribe((value) => {
		modalState = value;
	});

	const toggleModal = () => {
		itemModal.set(!modalState);
	};
</script>

<div
	on:click={toggleModal}
	class="
  fixed
  z-[9999] {modalState ? '' : 'hidden'}
  left-0
  top-0
  flex
  h-full
  w-full
  items-center
  justify-center
bg-[#1F2637]
  bg-opacity-80"
>
	<div
		class="py-12 px-4 h-[630px] md:h-[408px] md:w-[574px] md:p-[56px] rounded-2xl bg-[#F7F8FB] flex flex-col gap-6 relative justify-between"
		on:click|stopPropagation|preventDefault
	>
		<img
			on:click={toggleModal}
			src="./cross.svg"
			class="w-6 absolute top-0 right-0 m-4 cursor-pointer"
			alt="close"
		/>
		<div class="text-2xl leading-[26px] font-bold">
			Быстрое оформление Apple iPhone 13 128GB (темная ночь)
		</div>

		<div class="flex flex-col md:flex-row w-full gap-4 md:gap-10 items-center">
			<img src="./iphone.png" class="w-[152px]" alt="product" />

			<div class="flex flex-col gap-4 w-full">
				<div class="flex flex-col gap-3">
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

				<div class="text-[#1481B4] text-[16px] flex justify-between w-full">
					<div>Добавить еще номер МТС?</div>
					<img src="./question.svg" class="w-[19px]" alt="question" />
				</div>

				<Button class="w-full min-h-[44px]">Заказать</Button>
			</div>
		</div>
	</div>
</div>
