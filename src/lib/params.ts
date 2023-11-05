import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Slick template with Svelte';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Name',
	lastName: 'LASTNAME',
	description:
		'Hello there, I am Andy, a Senior Web Developer with an Engineering background. I have extensive experience in building reliable web applications using a variety of frameworks and technologies, including React, Node.js, etc. I have a strong enthusiasm for acquiring new skills. I am passionate about creating high-quality code that adheres to best practices and industry standards. I am continuously seeking new challenges to further my growth as a developer.',
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/geekHarp' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/andyngboonhou/'
		},
		// {
		// 	platform: Platform.Twitter,
		// 	link: 'https://twitter.com/'
		// },
		// {
		// 	platform: Platform.StackOverflow,
		// 	link: 'https://stackoverflow.com/'
		// },
		{
			platform: Platform.Email,
			link: 'ngbhandy@gmail.com'
		},
		// {
		// 	platform: Platform.Youtube,
		// 	link: 'https://www.youtube.com'
		// },
		// {
		// 	platform: Platform.Facebook,
		// 	link: 'https://www.facebook.com'
		// }
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: ''
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
