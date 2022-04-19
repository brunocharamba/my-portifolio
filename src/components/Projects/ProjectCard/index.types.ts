export interface ProjectCardProps {
  content: IProjectCard;
}

export interface IProjectCard {
  id: string;
  title: string;
  type: string;
  status?: string;
  description?: string;
  url?: string;
  image?: string;
}
