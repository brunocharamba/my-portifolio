import { ComponentProps } from "../types";

export interface ExperiencesProps extends ComponentProps {}

export interface ExperiencesColumnProps {
  title: string;
  items: IExperience[] | null;
}

export interface IExperience {
  id: string;
  title: string;
  location: string;
  url: string;
  description: string;
  dateFormatted: string[];
}
