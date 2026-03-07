export type tabType = 'home' | 'cv' | 'portfolio' | 'book' | 'blog';

export type readingStatus = 'Done' | 'Not Done Reading';
export interface ReviewPost {
  id: number;
  title: string;
  authors: string;
  date?: string | null;
  category: string;
  excerpt: string;
  tags: string[];
  status: readingStatus;
  rating: number;
  notes: string;
  freeLink?: string
};

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  year: number;
};
export type status = 'Completed' | 'Ongoing';
export interface Education {
  id: number;
  institution: string;
  certificate: string;
  status: status;
  startDate: number | string;
  endDate: number | string | null;
}
export interface SecularEducation extends Education {
  title?: string;
  additionalTitle?: string;
  achievements: Array<string>
  societalWork?: {
    society: string;
    committees: {
      title: string;
      achievements:Array<string>;
    }[]
  };
  links: any[];
}
export interface ReligiousEducation extends Education {
  notes?: string;
}
export interface WorkExperience {
  id: number;
  title: string;
  company: string;
  department?: string;
  status: status;
  startDate: number | string;
  endDate: number | string | null;
  achievements: Array<string>;
  references: any[];
};

export interface WebsiteHeaderProps {
  activeTab: tabType;
  onTabChange: (tab:tabType) => void;
}

export interface HomeProps {
  onTabChange: (tab:tabType) => void;
}
export interface PortfolioProps {
  onTabChange: (tab:tabType) => void;
}

export const SkillArray = {1:"Mathematics",2:"Data",3:"Developer",4:"Languages"};
export type SkillTagIndex = keyof typeof SkillArray; // 1 | 2 | 3
export type SkillTag = typeof SkillArray[SkillTagIndex] // "Mathematics" | "Data" | "Developer"
export interface Competency {
  skill: SkillTag;
  tags: Array<SkillTag>
}

// declare module "*.png" {
//   const value: string;
//   export default value;
// }