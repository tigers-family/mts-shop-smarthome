<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import ItemModal from '$lib/components/itemModal.svelte';
	import MobileMenu from '$lib/components/mobileMenu.svelte';
	import SubModal from '$lib/components/subModal.svelte';
	import { writable } from 'svelte/store';
</script>

<SubModal />

<ItemModal />

<Header />

<slot />

<Footer />

<MobileMenu />
