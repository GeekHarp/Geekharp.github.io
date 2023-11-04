<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import { SKILLS } from '$lib/params';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import type { Skill } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';

	const { items, title } = SKILLS;

	let result: Array<Skill> = items;
</script>

<svelte:head>
	<title>Andy Ng Boon Hou</title>
</svelte:head>
<SearchPage {title}>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-10">
		{#each result as skill (skill.slug)}
			<Card
				classes={['decoration-none']}
				tiltDegree={1}
				bgImg={getAssetURL(skill.logo)}
			>
				<p class="text-[var(--tertiary-text)]">{skill.name}</p>
			</Card>
		{/each}
	</div>
</SearchPage>
