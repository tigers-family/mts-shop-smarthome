<script lang="ts">
	import Breadcrumb from './Breadcrumb.svelte';
	import Button from './Button.svelte';
	import CompareImg from './CompareImg.svelte';
	import ArrowImg from './img/ArrowImg.svelte';
	import CartImg from './img/CartImg.svelte';

	import LikeImg from './img/LikeImg.svelte';
	import List from './img/list.svelte';
	import SearchBar from './SearchBar.svelte';
	import ShopLabelHeader from './shopLabelHeader.svelte';

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

	let isOpen = false;
	let dropdownMenu: HTMLElement;
	let dropdownButton: HTMLElement;

	const toggleDropdown = () => {
		isOpen = !isOpen;
	};

	let selectedFirstCat: any = [];
	let selectedSecondCat: any = [];

	const setFirstCat = (item: any) => {
		if (item?.items) {
			selectedFirstCat = item.items;
			selectedSecondCat = [];
		}
	};
	const setSecondCat = (item: any) => {
		if (item?.items) {
			selectedSecondCat = item.items;
		}
	};
</script>

<div
	class="fixed z-[999] {isOpen
		? ''
		: 'hidden'} left-0 top-0 flex h-full w-full items-center justify-center bg-[#1F2637] bg-opacity-80 py-10"
></div>

<div
	class="h-[95px] mx-auto xl:w-[1195px] md:h-[76px] lg:h-[72px] w-screen p-4 xl:px-0 xl:py-[14px] lg:p-[14px] xl:shadow-none [box-shadow:0px_4px_4px_0px_rgba(29,_38,_72,_0.1)]"
>
	<div class="flex flex-col justify-between">
		<ShopLabelHeader class="md:hidden" />
		<div class="flex gap-6 justify-between items-center">
			<div class="flex gap-3 xl:gap-6 items-center">
				<a href="./">
					<img src="./logo.svg" alt="logo" class="w-[85px] h-6 lg:w-[129px] lg:h-[33px]" />
				</a>
				<ShopLabelHeader class="hidden md:block lg:text-base px-2" />
			</div>

			<div class="hidden xl:block w-[564px]">
				<SearchBar />
			</div>

			<div class="flex gap-6 xl:gap-10">
				<a href="./compare" class="flex gap-3 xl:gap-4 items-center">
					<LikeImg ignore class="h-[22px]" />
					<CompareImg class="h-6 w-6" />
					<CartImg class="h-[22px] hidden xl:block fill-white" />
				</a>
				<Button>Войти</Button>
			</div>
		</div>
	</div>
</div>

<div class="bg-black h-14 relative hidden xl:block text-white">
	<div class="mx-auto w-[1195px] h-full flex justify-between items-center">
		<div class="relative group z-[999] h-full flex">
			<div
				class="flex flex-row gap-2 items-center cursor-pointer"
				on:mouseenter={() => (isOpen = true)}
			>
				<List class="w-[14px] !text-white" />
				<div bind:this={dropdownButton}>Каталог товаров</div>
			</div>
			<div
				on:mouseleave={toggleDropdown}
				bind:this={dropdownMenu}
				class="
        absolute
        -left-2
        {isOpen ? '' : 'hidden'}
        mt-4
        rounded-b-xl
        shadow-[#141F3B80]
        shadow-lg
      bg-white
        text-nowrap
        text-[16px]
        flex
        flex-col
        font-normal
        text-cool-grey-8
        "
			>
				<div class="flex text-black">
					<div class="{selectedFirstCat.length ? 'border-[#E1E4ED] border-r-[1px]' : ''} py-6">
						{#each menuItems as item, i}
							<div
								on:mouseenter={() => setFirstCat(item)}
								class="
                font-medium
                hover:bg-[#E1E4ED]
                pl-[31px]
                cursor-pointer
                hover:text-black
                flex flex-row gap-1 items-center
                py-2
                pr-[31px]
                "
								on:click={toggleDropdown}
							>
								{item.name}

								{#if item.items.length}
									<ArrowImg class="" />
								{/if}
							</div>
						{/each}
					</div>
					{#if selectedFirstCat.length}
						<div
							class="{selectedSecondCat.length
								? 'border-[#E1E4ED] border-r-[1px]'
								: ''} py-6 whitespace-nowrap"
						>
							{#each selectedFirstCat as item, i}
								<div
									on:mouseenter={() => setSecondCat(item)}
									class="

                hover:bg-[#E1E4ED]
                cursor-pointer
                font-medium
                hover:text-black
                flex flex-row gap-1 items-center
                py-2
                pl-[20px]
                pr-[31px]
                "
									on:click={toggleDropdown}
								>
									{item.name}

									{#if item.items.length}
										<ArrowImg class="" />
									{/if}
								</div>
							{/each}
						</div>
					{/if}
					{#if selectedSecondCat.length}
						<div class="py-6">
							{#each selectedSecondCat as item, i}
								<div
									class="
              hover:bg-[#E1E4ED]
              cursor-pointer
              hover:text-black
              flex flex-row gap-1 items-center
              py-2
              pl-[20px]
              pr-[31px]
              "
									on:click={toggleDropdown}
								>
									{item.name}

									{#if item.items.length}
										<ArrowImg class="" />
									{/if}
								</div>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>

		<div class="flex gap-[43px]">
			<a href="#" target="_blank" rel="noopener noreferrer">Адреса магазинов</a>
			<a href="#" target="_blank" rel="noopener noreferrer">Статус заказа</a>
			<a href="#" target="_blank" rel="noopener noreferrer">Как оплатить и получить</a>
			<a href="#" target="_blank" rel="noopener noreferrer">Обзоры</a>
			<a href="#" target="_blank" rel="noopener noreferrer">Акции</a>
			<a href="#" target="_blank" rel="noopener noreferrer">Покупателям</a>
		</div>
	</div>
</div>

<div class="p-4 xl:p-0 md:px-0 md:max-w-[624px] lg:max-w-[944px] xl:max-w-[1195px] mx-auto">
	<div class="xl:hidden">
		<SearchBar />
	</div>

	<Breadcrumb />
</div>
