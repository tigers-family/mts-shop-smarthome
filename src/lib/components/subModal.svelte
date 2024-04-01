<script lang="ts">
	import { subModal } from '$lib/modalStore';

	let modalState = false;

	subModal.subscribe((value) => {
		modalState = value;
	});

	const toggleModal = () => {
		subModal.set(!modalState);
	};
</script>

<div
	on:click={toggleModal}
	class="fixed z-[9999] {modalState
		? ''
		: 'hidden'} left-0 top-0 flex h-full w-full items-center justify-center bg-[#1F2637] bg-opacity-80 py-10"
>
	<div
		on:click|stopPropagation|preventDefault
		class="max-h-full w-full mx-4 md:mx-0 md:w-[624px] lg:w-[944px] xl:w-[1196px] overflow-y-auto rounded-2xl bg-[#F7F8FB]"
	>
		<div class="py-[66px] text-center">
			<div class="font-black text-[40px] leading-[42px]">Спасибо!</div>
			<div class="font-normal text-[16px] leading-[24px]">Вы успешно подписаны на рассылку.</div>
		</div>
	</div>
</div>
