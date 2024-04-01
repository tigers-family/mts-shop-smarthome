<script lang="ts">
	import BtnSm from './BtnSm.svelte';

	let className = '';
	export { className as class };

	const brands = ['Xiaomi', 'Яндекс', 'TCL', 'Samsung', 'DeLonghi', 'Huawei', 'TP-Link', 'Dreame'];
</script>

<div
	class={'flex flex-row gap-3 items-start justify-start relative whitespace-nowrap w-max ' +
		className}
>
	{#each brands as brand}
		<BtnSm>{brand}</BtnSm>
	{/each}
</div>
