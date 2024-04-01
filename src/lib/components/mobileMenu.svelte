<script lang="ts">
	import ArrowImg from './img/ArrowImg.svelte';
	import CartImg from './img/CartImg.svelte';
	import List from './img/list.svelte';

	let isMenuOpen = false;

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	const menuItems = [
		{ name: 'Акции интернет-магазина', items: [] },
		{
			name: 'Смартфоны',
			items: [
				{
					name: 'Xiaomi',
					items: [
						{ name: 'Xiaomi 11', items: [] },
						{ name: 'Xiaomi 12', items: [] },
						{ name: 'Xiaomi 13', items: [] },
						{ name: 'Xiaomi 14', items: [] },
						{ name: 'Xiaomi 9', items: [] }
					]
				},
				{
					name: 'Apple',
					items: [
						{ name: 'iPhone 11', items: [] },
						{ name: 'iPhone 12', items: [] },
						{ name: 'iPhone 13', items: [] },
						{ name: 'iPhone 14', items: [] },
						{ name: 'iPhone 15', items: [] }
					]
				},
				{ name: 'TCL', items: [] }
			]
		},
		{
			name: 'Телевизоры',
			items: [
				{
					name: 'Телевизоры',
					items: [
						{ name: 'Xiaomi', items: [] },
						{ name: 'Яндекс', items: [] },
						{ name: 'iFFalcon', items: [] },
						{ name: 'LG', items: [] }
					]
				},
				{ name: 'TV-приставки', items: [] },
				{ name: 'Саундбары', items: [] }
			]
		},
		{
			name: 'Товары для геймеров ',
			items: [
				{
					name: 'Телевизоры',
					items: [
						{ name: 'Xiaomi', items: [] },
						{ name: 'Яндекс', items: [] },
						{ name: 'iFFalcon', items: [] },
						{ name: 'LG', items: [] }
					]
				},
				{ name: 'TV-приставки', items: [] },
				{
					name: 'Игровые девайсы',
					items: [
						{ name: 'Razer', items: [] },
						{ name: 'Sony', items: [] }
					]
				},
				{ name: 'Мониторы', items: [] },
				{ name: 'Саундбары', items: [] }
			]
		},
		{
			name: 'Гаджеты',
			items: [
				{
					name: 'Планшеты',
					items: [
						{ name: 'Apple', items: [] },
						{ name: 'Samsung', items: [] },
						{ name: 'TCL', items: [] }
					]
				},
				{
					name: 'Умные часы',
					items: [
						{ name: 'Apple', items: [] },
						{ name: 'Samsung', items: [] },
						{ name: 'Xiaomi', items: [] }
					]
				},
				{
					name: 'Беспроводные наушники',
					items: [
						{ name: 'Apple', items: [] },
						{ name: 'Samsung', items: [] },
						{ name: 'Xiaomi', items: [] }
					]
				}
			]
		},
		{
			name: 'Аксессуары',
			items: [
				{ name: 'Распродажа аксессуаров', items: [] },
				{
					name: 'Аудио',
					items: [
						{ name: 'Наушники проводные', items: [] },
						{ name: 'Наушники беспроводные', items: [] }
					]
				},
				{
					name: 'Защита',
					items: [
						{ name: 'Чехлы', items: [] },
						{ name: 'Защитные стекла', items: [] }
					]
				}
			]
		},
		{
			name: 'Компьютеры',
			items: [
				{
					name: 'Планшеты',
					items: [
						{ name: 'Apple', items: [] },
						{ name: 'Samsung', items: [] },
						{ name: 'TCL', items: [] }
					]
				},
				{
					name: 'Ноутбуки',
					items: [
						{ name: 'Apple', items: [] },
						{ name: 'ASUS', items: [] },
						{ name: 'TCL', items: [] }
					]
				},
				{
					name: 'Мониторы',
					items: []
				}
			]
		},
		{
			name: 'Умный дом',
			items: [
				{
					name: 'Пылесосы',
					items: [
						{ name: 'Xiaomi', items: [] },
						{ name: 'Samsung', items: [] },
						{ name: 'Dyson', items: [] }
					]
				},
				{ name: 'Колонки', items: [{ name: 'Яндекс', items: [] }] },
				{
					name: 'Датчики и свет',
					items: [
						{ name: 'Xiaomi', items: [] },
						{ name: 'Яндекс', items: [] }
					]
				}
			]
		},
		{ name: 'Купить SIM', items: [] }
	];

	let currItems = menuItems;

	let isMain = true;

	const setCurrItems = (item: any) => {
		isMain = !!item?.main;
		if (item?.items?.length) {
			currItems = item.items;
		}
	};
</script>

<div
	class="{isMenuOpen
		? 'h-[calc(100vh-95px)] md:h-[calc(100vh-76px)] rounded-t-xl'
		: 'h-[76px]'} bg-black sticky bottom-0 z-[999] flex xl:hidden justify-center"
>
	{#if isMenuOpen}
		<div class="w-[358px] flex justify-center relative">
			<img
				on:click={toggleMenu}
				src="./cross.svg"
				class="w-6 absolute top-0 right-0 m-4 cursor-pointer"
				alt="close"
			/>
			{#if !isMain}
				<img
					on:click={() => {
						setCurrItems({ items: menuItems, main: true });
					}}
					src="./bigarrow.svg"
					class="absolute top-0 left-0 m-4 w-[32px] cursor-pointer"
					alt="close"
				/>
			{/if}
			<div class="text-white flex flex-col px-[16px] pt-[56px] gap-4 cursor-pointer">
				{#each currItems as item}
					<div class="flex items-center gap-1" on:click={() => setCurrItems(item)}>
						<div>{item.name}</div>
						{#if item.items.length}
							<ArrowImg class="!fill-white" />
						{/if}
					</div>
				{/each}
			</div>
		</div>
	{/if}
	<div
		class="max-w-[358px] fixed bottom-4 w-full flex text-cool-grey-6 text-xs justify-between items-center px-4 gap-[23px]"
	>
		<div class="flex flex-col h-[43px] items-center">
			<img src="./home.svg" class="h-[23px] w-[23px]" />
			Главная
		</div>
		<div class="flex flex-col h-[43px] items-center" on:click={toggleMenu}>
			<List class="h-[23px] w-[23px]" />
			Каталог
		</div>
		<div class="flex flex-col h-[43px] items-center">
			<CartImg class="h-[23px] w-[23px]" />
			Корзина
		</div>
		<div class="flex flex-col h-[43px] items-center">
			<img src="./search.svg" class="h-[23px] w-[23px]" />
			Поиск
		</div>
		<div class="flex flex-col h-[43px] items-center">
			<img src="./dots.svg" class="h-[23px] w-[23px]" />
			Еще
		</div>
	</div>
</div>
