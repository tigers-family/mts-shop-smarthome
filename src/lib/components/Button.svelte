<script>
	let className = '';
	export { className as class };
</script>

<button
	on:click
	class={'bg-red hover:bg-[#c8052b] text-white text-xs font-bold rounded py-3.5 px-5 flex flex-row gap-2.5 items-center justify-center overflow-hidden ' +
		className}
>
	<slot />
</button>

<style></style>
