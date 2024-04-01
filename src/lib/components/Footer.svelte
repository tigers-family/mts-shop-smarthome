<script lang="ts">
	import ArrowImg from './img/ArrowImg.svelte';
	import PhoneFooter from './phoneFooter.svelte';
	import SocialFooter from './socialFooter.svelte';

	$: innerWidth = 0;
	$: innerHeight = 0;

	let footerCat = {
		'Каталог товаров': {
			items: [
				'Топ-10',
				'Акции интернет-магазина',
				'Смартфоны',
				'Телевизоры',
				'Товары для геймеров ',
				'Гаджеты',
				'Аксессуары',
				'Компьютеры',
				'Умный дом',
				'Купить SIM'
			],
			isOpen: false
		},
		Покупателям: {
			isOpen: false,
			items: [
				'Покупателям',
				'Рассрочка',
				'Оплата',
				'Доставка',
				'Гарантия ',
				'Информация для потребителей',
				'Личный кабинет'
			]
		},
		'Предложить идею': {
			isOpen: false,
			items: []
		},
		Вакансии: {
			isOpen: false,
			items: []
		}
	};

	const handleOpenCat = (cat: keyof typeof footerCat) => {
		footerCat[cat].isOpen = !footerCat[cat].isOpen;
	};

	$: catKeys = Object.keys(footerCat) as (keyof typeof footerCat)[];
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="bg-black md:px-[72px]">
	{#if innerWidth < 768}
		{#each catKeys as cat}
			<div
				class="
      text-white
        text-[16px]
        py-5
      border-cool-grey-6
        border-b-[1px]
        font-medium"
				on:click={() => handleOpenCat(cat)}
			>
				<div class="px-4 flex flex-col gap-4">
					<div class="flex items-center gap-1">
						{cat}
						{#if footerCat[cat].items.length}
							<ArrowImg
								class="h-[15px] w-[15px] {footerCat[cat].isOpen ? 'rotate-90' : ''} !fill-white"
							/>
						{/if}
					</div>
					{#if footerCat[cat].isOpen}
						{#each footerCat[cat].items as item}
							<a href="#" target="_blank" rel="noopener noreferrer" class="text-gray">{item}</a>
						{/each}
					{/if}
				</div>
			</div>
		{/each}
	{:else}
		<div
			class="flex justify-between lg:justify-start lg:gap-[100px] text-white text-[16px] font-medium px-0 pt-10"
		>
			<div class="flex flex-col gap-4">
				Каталог товаров
				{#each footerCat['Каталог товаров'].items as item}
					<a href="#" target="_blank" rel="noopener noreferrer" class="text-gray hover:text-red"
						>{item}</a
					>
				{/each}
			</div>

			<div class="flex flex-col">
				<div class="flex flex-col gap-4">
					Покупателям
					{#each footerCat['Покупателям'].items as item}
						<a href="#" target="_blank" rel="noopener noreferrer" class="text-gray hover:text-red"
							>{item}</a
						>
					{/each}
				</div>

				<div class="pt-8">Предложить идею</div>
				<div class="pt-8">Вакансии</div>
			</div>
			{#if innerWidth >= 1024}
				<div class="ml-auto flex flex-col justify-between">
					<PhoneFooter class="justify-end" />
					{#if innerWidth >= 1280}
						<SocialFooter />
					{/if}
				</div>
			{/if}
		</div>
	{/if}

	<div
		class="px-4 md:px-0 text-base font-medium py-8 border-solid border-cool-grey-6 border-b-[1px]"
	>
		{#if innerWidth < 1024}
			<PhoneFooter class="mb-[34px]" />
		{/if}

		{#if innerWidth < 1280}
			<SocialFooter />
		{/if}
	</div>

	<div
		class="pt-8 pb-10 px-4 md:px-0 text-cool-grey-6 text-xs font-medium [text-decoration-skip-ink:none]"
	>
		&copy;&nbsp;2002&ndash;2024 Совместное общество с&nbsp;ограниченной ответственностью
		&laquo;Мобильные ТелеСистемы&raquo;. 220012 УНП 800013732, Книга замечаний и&nbsp;предложений
		расположена по&nbsp;адресу: г. Минск пр. Независимости, 95-4Лицензия МСиИ РБ &#8470;&nbsp;926
		от&nbsp;30.04 .2004. Зарегистрирован в&nbsp;Торговом реестре Республики Беларусь
		&#8470;&nbsp;158398 от&nbsp;14.05.2012
		<br />
		<br />
		Лицо уполномоченное рассматривать обращения покупателей о&nbsp;нарушении их&nbsp;прав:
		<a href="tel:+375295450000" class="underline">+375 29 545-00-00</a>. Электронная почта
		<a href="mailto:help@mts.by" class="underline">help@mts.by</a>
		<br />
		<br />
		Номер телефона работников местных исполнительных и&nbsp;распорядительных органов по&nbsp;месту государственной
		регистрации СООО &laquo;Мобильные ТелеСистемы&raquo;, уполномоченных рассматривать обращения покупателей:
		<a href="tel:+375172151465" class="underline">+375 17 215-14-65</a>

		<img src="./18.svg" alt="18+" class="w-[42px] h-[42px] mt-4" />
	</div>
</div>
