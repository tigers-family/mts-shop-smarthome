<script>
	import ArrowImg from './img/ArrowImg.svelte';
	import { page } from '$app/stores';
</script>

<div class="flex-wrap flex gap-[8px_4px] text-xs font-medium text-gray items-center my-4">
	<a href="#">Интернет магазин МТС</a>
	<ArrowImg class="h-3 w-3" />
	{#if $page.url.pathname === '/compare'}
		<a href="#">Сравнение товаров</a>
	{:else}
		<a href="#">Новости и акции</a>
		<ArrowImg class="h-3 w-3" />
		<a href="#">Товары для умного дома</a>
	{/if}
</div>
