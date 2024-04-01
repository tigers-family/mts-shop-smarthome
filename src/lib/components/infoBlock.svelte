<script>
	export let title = 'title';
	export let desc = 'desc';
	export let img = './cat/0.png';
</script>

<div
	class="bg-[#F7F8FB] p-5 rounded-2xl sm:flex gap-1 sm:gap-2 justify-between lg:w-[464px] xl:w-[388px]"
>
	<div class="flex flex-col gap-3 items-start left-5 top-5">
		<div class="text-lg leading-5 font-bold">{title}</div>
		<div class="text-sm leading-5 font-normal">
			{@html desc}
		</div>
	</div>

	<img class="w-[104px] md:w-[84px] mx-auto sm:mx-0 object-cover" src={img} />
</div>
