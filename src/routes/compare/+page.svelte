<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import H1 from '$lib/components/H1.svelte';

	import ItemCardCompare from '$lib/components/ItemCardCompare.svelte';
	import ArrowImg from '$lib/components/img/ArrowImg.svelte';

	const tableData = [
		{
			name: 'Дисплей',
			show: true,
			data: [
				{
					name: 'Тип матрицы экрана',
					items: ['OLED', 'Dynamic AMOLED 2X']
				},
				{
					name: 'Сенсорный экран',
					items: ['Да', 'Да']
				},
				{
					name: 'Тип сенсорного экрана',
					items: ['Емкостный', 'Емкостный']
				}
			]
		},
		{
			name: 'Система',
			show: true,
			data: [
				{
					name: 'Платформа',
					items: ['iOS', 'Android']
				},
				{
					name: 'Операционная система',
					items: ['iOS 17', 'Android 13']
				}
			]
		},
		{
			name: 'Процессор',
			show: true,
			data: [
				{
					name: 'Процессор',
					items: ['Apple A17 Pro', 'Qualcomm Snapdragon 8 Gen 2']
				},
				{
					name: 'Архитектура процессора',
					items: ['3 нм', '4 нм. 3.2 ГГц, 2.8 ГГц, 2 ГГц']
				},
				{
					name: 'Количество ядер',
					items: ['6', '8']
				}
			]
		}
	];

	const showTable = (i: number) => {
		tableData[i].show = !tableData[i].show;
	};
</script>

<div
	class="px-4 md:px-0 mx-auto md:max-w-[624px] lg:max-w-[944px] xl:max-w-[1196px] overflow-hidden"
>
	<div class="pt-0">
		<H1 class="py-0">Сравнение</H1>

		<Button
			class="my-6 bg-white hover:bg-white !text-cool-grey-10 border-solid border-[#E6E8F0] border-[2px]"
			>Добавить товар</Button
		>

		<div class="flex gap-3 justify-center">
			<ItemCardCompare />
			<ItemCardCompare />
		</div>
	</div>
</div>
<div>
	<div
		class="flex flex-col gap-8 mb-12 mt-8 mx-auto md:max-w-[624px] lg:max-w-[944px] xl:max-w-[1196px]"
	>
		{#each tableData as table, i}
			<div>
				<div on:click={() => showTable(i)} class="flex items-center gap-1 mb-3 px-4 cursor-pointer">
					{table.name}
					<ArrowImg class="h-[15px] w-[15px] {table.show ? 'rotate-90' : ''} fill-black" />
				</div>
				{#each table.data as td, k}
					<div
						class="
            h-[118px]
            sm:h-[100px]
            lg:h-[72px]
            {table.show ? '' : 'hidden'} {k % 2
							? 'bg-white'
							: 'bg-[#F7F8FB]'} py-6 px-4 flex flex-col gap-4
             "
					>
						<div class="text-[16px] text-cool-grey-8 lg:hidden">{td.name}</div>
						<div class="flex justify-between font-normal">
							<div class="text-[16px] text-cool-grey-8 basis-1/3 hidden lg:block">
								{td.name}
							</div>
							<div class="basis-1/2 lg:basis-1/3">{td.items[0]}</div>
							<div class="basis-1/2 lg:basis-1/3">{td.items[1]}</div>
						</div>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
