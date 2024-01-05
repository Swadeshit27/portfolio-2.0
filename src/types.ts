
export interface navItemsType {
  name: string;
  path: string;
}
export interface EducationDetailsType {
  date: string,
  title: string,
  details: string
  isReverse: boolean
}
export interface SkillsListType {
  name: string,
  icon?: string,
  category: string,
}
export interface ProjectsListType extends SkillsListType {
  imgUrl: string,
  techTools: string[],
  details: string,
  demoUrl: string,
  codeUrl: string,
  isBest?: boolean
}
export interface DetailsType {
  key: string,
  value: string
}
export interface ExperienceListType {
  date: string,
  CompName: string,
  role: string,
  certificate: string,
  details: string
}