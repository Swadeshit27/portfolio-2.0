

declare interface  ItemsType {
  name: string;
  path: string;
  icon?: React.ReactElement;
}
declare interface EducationDetailsType {
  date: string,
  title: string,
  details: string
  result?: string,
  isReverse: boolean
}
declare interface SkillsListType {
  name: string,
  icon?: string,
  category: string,
}
declare interface ProjectsListType extends SkillsListType {
  imgUrl: string,
  techTools: string[],
  details: string,
  demoUrl: string,
  codeUrl: string,
  isBest?: boolean
}
declare interface DetailsType {
  key: string,
  value: string
}
declare interface ExperienceListType {
  category: string,
  date: string,
  CompName: string,
  role: string,
  certificate: string,
  details: string
  offerLatter?: string,
  LOR?: string,
}
declare interface AchievementType {
  title: string,
  link: string
}