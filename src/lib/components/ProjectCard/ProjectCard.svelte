<script lang="ts">
	import { countMonths, getMonthName, getTimeDiff } from '$lib/utils/helpers';
	import Chip from '../Chip/Chip.svelte';
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import type { Project } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	// import { base } from '$app/paths';
	import fjJobPortalPNG from '$lib/assets/Screenshot-fj-job-portal.png'
	import fjDashboardPNG from '$lib/assets/Screenshot-fj-dashboard.png'
	import guessTheWordsPNG from '$lib/assets/Screenshot-guess-the-words.png'

	export let project: Project;
	// $: months = countMonths(project.period.from, project.period.to);
	// $: period = `${months} month${months > 1 ? 's' : ''}`;
	// $: period = `${getTimeDiff(
	// 	project.period.from,
	// 	project.period.to ?? new Date(Date.now() + 1000 * 60 * 60 * 24)
	// )}`;
	// $: from = `${getMonthName(project.period.from.getMonth())} ${project.period.from.getFullYear()}`;
	// $: to = project.period.to
	// 	? `${getMonthName(project.period.to.getMonth())} ${project.period.to.getFullYear()}`
	// 	: 'now';

	const getSrc = (project: string): string => {
		// if (project === 'Findjobs Job Portal') return fjJobPortal
		// else return fjDashboard

		switch(project) {
			case 'Findjobs Job Portal':
				return fjJobPortalPNG
			case 'Findjobs Employer Dashboard':
				return fjDashboardPNG
			case 'Guess the WORDs':
				return guessTheWordsPNG
			default:
				return ''
		}
	}
</script>

<Card color={project.color}>
	<CardLogo alt={project.name} src={getSrc(project.name)} size={360} />
	<div class="m-t-20px row justify-between items-center">
		<CardTitle title={project.name} />
		<div class="row">
			{#each project.links as link}
				<!-- <CardLink to='https://findjobs.asia' /> -->
				<CardLink to={link.to} />
			{/each}
		</div>
	</div>
	<CardDivider />
	<p class="text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-40px flex-1">
		{project.shortDescription}
	</p>
	<!-- <div class="row justify-between text-0.8em font-400">
		<Chip>{from}</Chip>
		{#if from !== to}
			<Chip>{to}</Chip>
		{/if}
	</div> -->
	<CardDivider />
	<div class="row">
		{#each project.skills as tech}
			<ChipIcon
				logo={getAssetURL(tech.logo)}
				name={tech.name}
			/>
		{/each}
	</div>
</Card>
