<script lang="ts">
	import type { Experience } from '$lib/types';
	import { getMonthName, getTimeDiff } from '$lib/utils/helpers';
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';
	import { onMount } from 'svelte'

	export let experience: Experience;

	const months = getTimeDiff(experience.period.from, experience.period.to);

	const from = `${getMonthName(
		experience.period.from.getMonth()
	)} ${experience.period.from.getFullYear()}`;
	const to = experience.period.to
		? `${getMonthName(experience.period.to.getMonth())} ${experience.period.to.getFullYear()}`
		: 'Present';

	const period = `${from} - ${to} · ${months}`;

	onMount(() => {
		const fjDesc = document.getElementById('fj-desc');
		const amDesc = document.getElementById('am-desc');

		if (fjDesc !== null) fjDesc.innerHTML = `
		<p style="margin-bottom: 8px">- Developed and maintained both Job Portal and Employer Dashboard</p>
		<p style="margin-bottom: 8px">- Developed APIs using Express framework</p>
		<p style="margin-bottom: 8px">- Designed and altered the relational Database</p>
		<b>Skills:</b> TypeScript · JavaScript · Node.js · React.js · Bootstrap
		`;
		if (amDesc !== null) amDesc.innerHTML = `
		<p style="margin-bottom: 8px">- Assembled and tested products to ensure products met the required specifications while following production schedule</p>
		<p style="margin-bottom: 8px">- Came up with corrective/preventive actions after diagnosis on production failure or product quality issue with Manufacturing Engineer</p>
		<p style="margin-bottom: 8px">- Participated in continuous improvement projects to implement 5S in the workplace to improve work efficiency and implement order</p>
		- Provide training to other operators on product's assembly/testing process
		`;
	})

</script>

<Card margin="0px 0px 20px 0px" tiltDegree={2} href={`${base}/experience/${experience.slug}`}>
	<div class="col md:flex-row items-start gap-5 md:gap-1">
		<img class='rounded-15 aspect-square' src={getAssetURL(experience.logo)} alt={experience.company} width={75} height={75} />
		<div class="col ml-0 md:ml-[20px] gap-3 w-full">
			<h3
				class="flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"
			>
				<CardTitle title={experience.name} />
			</h3>
			<div class="row flex-wrap m-b-2 gap-1 text-0.9em font-300">
				<ChipIcon name={`Company: ${experience.company}`}>
					<UIcon icon="i-carbon-building" />
				</ChipIcon>
				<ChipIcon name={`Contract: ${experience.contract}`}>
					<UIcon icon="i-carbon-hourglass" />
				</ChipIcon>
			</div>
			<div class="text-[var(--accent-text)] text-[0.9em] font-200">{period}</div>
			<div class='experience-description' id={experience.company === 'Findjobs Pte Ltd' ? 'fj-desc' : 'am-desc'} />
			<!-- <div class="flex flex-row flex-wrap mt-5">
				{#each experience.skills as skill}
					<ChipIcon
						logo={getAssetURL(skill.logo)}
						name={skill.name}
						href={`${base}/skills/${skill.slug}`}
					/>
				{/each}
			</div> -->
		</div>
	</div>
</Card>
