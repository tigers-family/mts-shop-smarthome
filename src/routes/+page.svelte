<script lang="ts">
	import BrandList from '$lib/components/BrandList.svelte';
	import H1 from '$lib/components/H1.svelte';
	import ItemCard from '$lib/components/ItemCard.svelte';
	import CategoryCard from '$lib/components/categoryCard.svelte';
	import FirstBlock from '$lib/components/firstBlock.svelte';
	import ArrowImg from '$lib/components/img/ArrowImg.svelte';
	import InfoBlock from '$lib/components/infoBlock.svelte';
	import OrderBlock from '$lib/components/orderBlock.svelte';
	import Review from '$lib/components/review.svelte';
	import SubBlock from '$lib/components/subBlock.svelte';
	import { onMount } from 'svelte';

	const catCards = [
		{ title: 'Освещение', desc: 'Умные лампы и датчики движения', img: './cat/0.png' },
		{ title: 'Климат', desc: 'Умные термостаты и системы', img: './cat/1.png' },
		{ title: 'Безопасность', desc: 'Видеонаблюдение и умные замки', img: './cat/2.png' },
		{
			title: 'Управление голосом',
			desc: 'Умные колонки и датчики распознавания голоса',
			img: './cat/3.png'
		}
	];

	const infoBlocks = [
		{
			title: 'Комфорт и удобство',
			desc: 'Открыть шторы, пропылесосить пол, включить свет&nbsp;&mdash; доверьте все гаджетам.',
			img: './icon-0.png'
		},
		{
			title: 'Экономия энергии',
			desc: 'Вы&nbsp;можете забыть выключить свет и&nbsp;электроприборы, но&nbsp;умные розетки не&nbsp;забудут.',
			img: './icon-1.png'
		},
		{
			title: 'Безопасность',
			desc: 'Наблюдайте за&nbsp;домом в&nbsp;реальном времени, где&nbsp;бы вы&nbsp;не&nbsp;находились.',
			img: './icon-2.png'
		},
		{
			title: 'Гибкие настройки',
			desc: 'Температура, свет, влажность&nbsp;&mdash; настройте атмосферу дома под себя.',
			img: './icon-3.png'
		},
		{
			title: 'Экологичность',
			desc: 'За&nbsp;потреблением воды, тепла и&nbsp;электричества проследят специальные датчики.',
			img: './icon-4.png'
		},
		{
			title: 'Умное управление',
			desc: 'Командуйте домом с&nbsp;помощью голоса, приложений и&nbsp;эргономичных кнопок.',
			img: './icon-5.png'
		}
	];

	const reviews = [
		{
			title: 'Робот-пылесос Xiaomi Mi Robot Vacuum',
			desc: 'Этот робот-пылесос просто спасение для моего дома! Он&nbsp;справляется с&nbsp;уборкой лучше меня, а&nbsp;я&nbsp;теперь могу проводить больше времени с&nbsp;семьей. Умные функции и&nbsp;тихая работа делают его лучшим помощником!',
			name: 'Анна Иванова',
			stars: 5
		},
		{
			title: 'Умная колонка Yandex.Station',
			desc: 'Колонка Yandex привносит в&nbsp;дом много удобства. Голосовое управление работает хорошо, но&nbsp;иногда не&nbsp;понимает запросы. Хотелось&nbsp;бы больше интеграции с&nbsp;другими сервисами. Звук неплохой, но&nbsp;можно и&nbsp;лучше.',
			name: 'Петр Смирнов',
			stars: 3
		},
		{
			title: 'Зубная щетка Xiaomi Mi Electric Toothbrush',
			desc: 'Эта щетка стала для меня настоящим открытием! Она действительно эффективно чистит зубы и&nbsp;десны, при этом очень удобна в&nbsp;использовании. Различные режимы чистки и&nbsp;долгое время работы без подзарядки делают ее&nbsp;отличным выбором.',
			name: 'Елена Козлова',
			stars: 4
		}
	];

	let isOpen = false;
	let dropdownMenu: HTMLElement;
	let dropdownButton: HTMLElement;

	const toggleDropdown = () => {
		isOpen = !isOpen;
	};

	const sortList = ['сначала дорогие', 'сначала дешевые', 'новинки', 'по умолчанию'];

	const topCatList = [
		{ name: 'Зубные щетки', state: true },
		{ name: 'Кофемашины', state: false },
		{ name: 'Роботы-пылесосы', state: false },
		{ name: 'Колонки', state: false },
		{ name: 'Часы', state: false }
	];

	const setTopCatState = (i: number) => {
		topCatList.forEach((e) => (e.state = false));
		topCatList[i].state = !topCatList[i].state;
	};

	$: innerWidth = 0;

	let containerEl: HTMLElement;
	let itemsCont: HTMLElement;
	let revsCont: HTMLElement;
	let brandsCont: HTMLElement;

	const scrollItems = (side: number, el: HTMLElement) => {
		el.scroll({
			left: el.scrollLeft + side,
			behavior: 'smooth'
		});
	};

	let lArrow = false;
	let rArrow = false;

	let lArrowRev = false;
	let rArrowRev = false;

	const itemsScrollHandler = (el: HTMLElement) => {
		let itemsScrollLength = el?.scrollLeft || 0;

		if (el?.id === 'rev') {
			rArrowRev = itemsScrollLength !== 0;
			lArrowRev = itemsScrollLength < 350;

			return;
		}

		if (innerWidth >= 1024) {
			rArrow = itemsScrollLength !== 0;
			lArrow = innerWidth < 1280 ? itemsScrollLength < 1150 : itemsScrollLength < 900;

			return;
		}

		lArrow = false;
		rArrow = false;
	};

	const handleResize = () => {
		let position = containerEl.getBoundingClientRect();
		let padding = `${position.left}px`;

		if (innerWidth >= 1024) {
			padding = '0px';
		}

		itemsCont.style.paddingLeft =
			brandsCont.style.paddingLeft =
			revsCont.style.paddingLeft =
			revsCont.style.paddingRight =
			brandsCont.style.paddingRight =
				padding;
	};

	onMount(() => {
		handleResize();
		itemsScrollHandler(itemsCont);
		itemsScrollHandler(revsCont);
	});
</script>

<svelte:window bind:innerWidth on:resize={handleResize} />

<div
	class="px-4 md:px-0 mx-auto md:max-w-[624px] lg:max-w-[944px] xl:max-w-[1196px]"
	bind:this={containerEl}
>
	<FirstBlock />

	<div class="py-6 md:py-8">
		<H1>Основные категории</H1>
		<div class="flex flex-col md:flex-row md:flex-wrap gap-4 items-center">
			{#each catCards as { title, desc, img }}
				<CategoryCard {title} {desc} {img} />
			{/each}
		</div>
	</div>

	<div class="py-6 md:py-8">
		<H1>Самые популярные товары</H1>

		<div class="">
			<div
				class="flex gap-4 font-medium overflow-x-scroll text-nowrap whitespace-nowrap no-scrollbar"
			>
				{#each topCatList as cat, i}
					<div
						class="
              cursor-pointer
            {cat.state ? 'text-red border-red border-b-2 pb-2' : ''}"
						on:click={() => setTopCatState(i)}
					>
						{cat.name}
					</div>
				{/each}
			</div>
			<div class="border-[#E6E8F0] ml-4 -mt-[2px] border-b-2"></div>

			<div class=" mt-5 mb-4 flex flex-row gap-2 items-start justify-start font-medium">
				<div class="text-gray text-base">Сортировать:</div>

				<div class="relative z-10 group">
					<div class="flex flex-row gap-1 items-center cursor-pointer" on:click={toggleDropdown}>
						<div bind:this={dropdownButton} class="text-[#1481b4] text-base">{sortList[0]}</div>
						<ArrowImg class="rotate-90 !fill-[#1481b4]" />
					</div>
					<div
						bind:this={dropdownMenu}
						class="
              absolute
              -left-2
              {isOpen ? '' : 'hidden'}
              -mt-8
              rounded-md
              shadow-[#141F3B80]
              shadow-lg
            bg-white
              text-nowrap
              text-[16px]
              flex
              flex-col
              gap-1
              p-2
              font-normal
              text-cool-grey-8
              "
					>
						{#each sortList as item, i}
							<div
								class="
                  cursor-pointer
                  hover:text-black
                  {i === 0 ? 'text-[#1481b4] text-base font-medium' : ''}
                  flex flex-row gap-1 items-center
                  "
								on:click={toggleDropdown}
							>
								{item}

								{#if i === 0}
									<ArrowImg class="rotate-90 !fill-[#1481b4]" />
								{/if}
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div class="h-[34px]">
				<div
					class="overflow-x-scroll no-scrollbar lg:relative absolute w-screen md:w-full left-0"
					bind:this={brandsCont}
				>
					<BrandList class="mx-4 md:ml-0" />
				</div>
			</div>

			<div class="relative">
				{#if lArrow}
					<div
						class="flex cursor-pointer justify-center items-center w-[35px] h-[35px] bg-white absolute z-20 mt-[196px] right-0 rounded-full [box-shadow:_0_4px_4px_0_rgba(0,_0,_0,_0.25)]"
						on:click={() => scrollItems(305, itemsCont)}
					>
						<ArrowImg class="w-[21px] h-[21px] ml-1 fill-black" />
					</div>
				{/if}
				{#if rArrow}
					<div
						class="flex cursor-pointer justify-center items-center w-[35px] h-[35px] bg-white absolute z-20 mt-[196px] rounded-full [box-shadow:_0_4px_4px_0_rgba(0,_0,_0,_0.25)]"
						on:click={() => scrollItems(-305, itemsCont)}
					>
						<ArrowImg class="w-[21px] h-[21px] mr-1 fill-black rotate-180" />
					</div>
				{/if}
			</div>

			<div class="h-[467px] md:h-[444px]">
				<div class=" lg:relative absolute w-screen lg:w-full left-0">
					<div
						class="mt-4 flex gap-4 font-medium overflow-x-scroll no-scrollbar"
						on:scroll={() => itemsScrollHandler(itemsCont)}
						bind:this={itemsCont}
					>
						<ItemCard class="ml-4 md:hidden" />
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<div class="p-1 md:hidden"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div>
		<H1>Управляйте вашим домом с умом</H1>

		<video autoplay playsinline muted loop class="rounded-2xl max-h-[247px] w-full object-cover">
			<source src="./video{innerWidth <= 1280 ? '-mob' : ''}.mp4" type="video/mp4" />
		</video>

		<div class="flex flex-col lg:flex-row gap-4 mt-6 flex-wrap">
			{#each infoBlocks as { img, title, desc }}
				<InfoBlock {img} {title} {desc} />
			{/each}
		</div>
	</div>

	<div class="mt-12 mb-4 md:mb-8 md:mt-16">
		<SubBlock />
	</div>

	<div class="overflow-hidden">
		<H1>Отзывы покупателей</H1>

		<div class="relative">
			{#if lArrowRev}
				<div
					class="flex cursor-pointer justify-center items-center w-[35px] h-[35px] bg-white absolute z-20 mt-[151px] right-0 rounded-full [box-shadow:_0_4px_4px_0_rgba(0,_0,_0,_0.25)]"
					on:click={() => scrollItems(400, revsCont)}
				>
					<ArrowImg class="w-[21px] h-[21px] ml-1 fill-black" />
				</div>
			{/if}
			{#if rArrowRev}
				<div
					class="flex cursor-pointer justify-center items-center w-[35px] h-[35px] bg-white absolute z-20 mt-[151px] rounded-full [box-shadow:_0_4px_4px_0_rgba(0,_0,_0,_0.25)]"
					on:click={() => scrollItems(-400, revsCont)}
				>
					<ArrowImg class="w-[21px] h-[21px] mr-1 fill-black rotate-180" />
				</div>
			{/if}
		</div>

		<div class="h-[467px] md:h-[427px]">
			<div class=" lg:relative absolute w-screen lg:w-full left-0">
				<div
					id="rev"
					class="flex gap-4 overflow-x-scroll no-scrollbar mx-4 md:mx-0"
					bind:this={revsCont}
					on:scroll={() => itemsScrollHandler(revsCont)}
				>
					{#each reviews as { stars, name, title, desc }}
						<Review {stars} {name} {title} {desc} />
					{/each}
				</div>
			</div>
		</div>
	</div>

	<div class="mt-12 mb-20">
		<OrderBlock />
	</div>
</div>
