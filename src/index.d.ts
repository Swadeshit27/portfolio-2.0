
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

declare interface infoProps {
  $id: string;
  name: string;
  homeSubtitles: string;
  homeDescription: string;
  homeImg: string;
  aboutImg: string;
  aboutDescription: string;
  resume: string;
  github: string;
  linkedin: string;
  twitter: string;
  facebook: string;
  instagram: string;
  mobile: string;
  email: string;
  shortAddress: string;
  fullAddress: string;
  leetcode?: string;
  codeforces?: string;
  hackerrank?: string;
  codechef?: string;
  geekforgeeks?: string;
  codestudio?: string;
}

declare interface educationProps {
  $id: string;
  course: string;
  description: string;
  duration: string;
  result: string;
  institute: string;
  marks: string;
}

declare interface projectProps {
  $id: string;
  imgSrc: string;
  title: string;
  description: string; 
  best?: string | boolean;
  tags: string;
  category: string;
  githubLink: string;
  demoLink: string;
}

declare interface SkillProps {
  $id: string;
  icon: string;
  name: string;
  category: string;
  details: string;
}

declare interface AchievementProps {
  $id: string;
  title: string;
  description: string;
  attachment: string;
  fileLink: string;
}

declare interface ExperienceProps {
  $id: string;
  title: string;
  duration: string;
  description: string;
  place: string;
  certificate: string;
  offerLetter: string;
  lor: string;
  optional: string;
  category: string;
  techTools: string;
  position: string;
}