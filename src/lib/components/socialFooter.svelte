<script>
	import Fb from './img/soc/fb.svelte';
	import Inst from './img/soc/inst.svelte';
	import Ok from './img/soc/ok.svelte';
	import Tg from './img/soc/tg.svelte';
	import Tw from './img/soc/tw.svelte';
	import Vk from './img/soc/vk.svelte';
	import Yt from './img/soc/yt.svelte';

	let className = '';
	export { className as class };
</script>

<div class={className}>
	<div class="flex flex-wrap gap-3">
		<a href="#" target="_blank" rel="noopener noreferrer">
			<Vk class="hover:text-red" />
		</a>
		<a href="#" target="_blank" rel="noopener noreferrer">
			<Tw class="hover:text-red" />
		</a>
		<a href="#" target="_blank" rel="noopener noreferrer">
			<Fb class="hover:text-red" />
		</a>
		<a href="#" target="_blank" rel="noopener noreferrer">
			<Ok class="hover:text-red" />
		</a>
		<a href="#" target="_blank" rel="noopener noreferrer">
			<Yt class="hover:text-red" />
		</a>
		<a href="#" target="_blank" rel="noopener noreferrer">
			<Tg class="hover:text-red" />
		</a>
		<a href="#" target="_blank" rel="noopener noreferrer">
			<Inst class="hover:text-red" />
		</a>
	</div>

	<div class="text-gray pt-4 xl:text-right">Мы в соцсетях</div>
</div>
