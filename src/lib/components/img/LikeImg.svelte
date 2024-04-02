<script>
	let className = '';
	export { className as class };
	export let ignore = false;

	let isClicked = false;

	const toggleLike = () => {
		isClicked = !isClicked;
	};
</script>

<svg
	class="{className} {isClicked && !ignore
		? 'text-red stroke-none '
		: 'text-white stroke-gray'} {ignore ? '' : 'hover:stroke-none hover:text-red'}"
	on:click={toggleLike}
	width="22"
	height="21"
	viewBox="0 0 22 21"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M10.4193 1.93959L10.42 1.94027C10.4961 2.01 10.5698 2.08131 10.6403 2.15422L11.0015 2.52817L11.3611 2.15255C11.4296 2.08094 11.5009 2.01205 11.5749 1.94604L11.5749 1.94609L11.5806 1.94081C14.433 -0.686839 19.2559 0.463689 20.9191 3.93203C21.7365 5.63669 21.8068 7.95556 20.3668 10.7306C18.9465 13.4676 16.059 16.6371 10.9998 20.0246C5.94073 16.6374 3.05306 13.4683 1.63268 10.7315C0.192612 7.95674 0.262755 5.63804 1.08011 3.93338C2.74314 0.465027 7.5662 -0.686222 10.4193 1.93959Z"
		fill="currentColor"
	/>
</svg>
