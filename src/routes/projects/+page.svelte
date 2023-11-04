<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard/ProjectCard.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { PROJECTS } from '$lib/params';
	import { onMount } from 'svelte';

	const { items, title } = PROJECTS;

	let search = '';

	onMount(() => {
		const query = location.search;

		if (query) {
			const queryParams = new URLSearchParams(location.search);

			const item = queryParams.get('item');

			if (item) {
				search = item;
			}
		}
	});
</script>

<svelte:head>
	<title>Andy Ng Boon Hou</title>
</svelte:head>
<SearchPage {title}>
	<div class="projects-list mt-5">
		{#each items as project}
			<ProjectCard {project} />
		{/each}
	</div>
</SearchPage>

<style lang="scss">
	.projects-list {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 20px;

		@media (max-width: 1350px) {
			grid-template-columns: repeat(1, 1fr);
		}
		@media (max-width: 850px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
