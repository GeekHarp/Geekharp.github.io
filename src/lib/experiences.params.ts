import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: '',
		company: 'Findjobs Pte Ltd',
		description: '- Developed and maintained both Job Portal and Employer Dashboard<br />- Developed APIs using Express framework',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'On-site',
		period: { from: new Date(2019, 7), to: new Date(2023, 8) },
		skills: getSkills('ts', 'js'),
		name: 'Senior Web Developer',
		color: '#ffffff',
		links: [],
		logo: Assets.Findjobs,
		shortDescription: ''
	},
	{
		slug: 'software-freelance',
		company: 'Applied Materials',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2017, 10), to: new Date(2019, 0) },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Engineering Technician',
		color: '#ffffff',
		links: [],
		logo: Assets.AppliedMaterials,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
