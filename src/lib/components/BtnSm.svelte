<script>
	let className = '';
	export { className as class };

	let isClicked = false;
	export let ignoreClick = false;

	const clickHandler = () => {
		isClicked = !isClicked;
	};
</script>

<div
	class="{isClicked && !ignoreClick
		? 'text-white border-red border-solid border bg-red hover:bg-[#c8052b]'
		: 'text-gray hover:text-black border-gray hover:border-black border-solid border'}
    text-left text-sm leading-[18px] font-normal rounded cursor-pointer py-[7px] px-6 flex flex-row gap-1 w-max
    {className}"
	on:click={clickHandler}
	on:click
>
	<slot />
</div>

<style></style>
