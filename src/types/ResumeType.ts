export enum ResumeSectionEnum {
	Contact = 'contact',
	Summary = 'summary',
	WorkExperience = 'work-experience',

}

export type ResumeSectionType = {
	title: string,
	id: ResumeSectionEnum | string,
	sections?: ResumeSectionType[],
	subtitle?: string,
	content?: string,
	children?: JSX.Element[],
};
