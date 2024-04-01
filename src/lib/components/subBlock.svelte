<script lang="ts">
	import Button from './Button.svelte';
	import { subModal } from '$lib/modalStore';

	let modalState = false;

	subModal.subscribe((value) => {
		modalState = value;
	});

	const toggleModal = () => {
		subModal.set(!modalState);
	};
</script>

<div class="bg-[#F7F8FB] p-5 md:py-10 md:px-12 lg:px-[208px] xl:px-[334px] rounded-2xl">
	<div class="text-2xl md:text-[40px] leading-[26px] font-black">Подпишитесь на новости</div>

	<div class="md:flex md:gap-3 mt-4">
		<input
			class="rounded
      w-full
      text-center
      border-solid
    border-[#e6e8f0]
      hover:border-cool-grey-8
      hover:placeholder:text-cool-grey-8
      focus:outline-[#1481B4]
      border-2
      h-11
      flex
      justify-center
      md:justify-start
      items-center
      md:flex-grow-[1]"
			placeholder="Введите ваш e-mail"
		/>

		<Button on:click={toggleModal} class="w-full md:w-auto mt-6 md:mt-0">Подписаться</Button>
	</div>

	<div class="text-cool-grey-6 text-xs leading-3 font-normal mt-3">
		Нажимая на&nbsp;кнопку &laquo;Подписаться&raquo;, я&nbsp;даю согласие на&nbsp;получение новостей
		и&nbsp;акционных предложений от&nbsp;компании
	</div>
</div>
