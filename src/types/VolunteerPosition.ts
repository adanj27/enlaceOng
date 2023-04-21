export type VolunteerPosition = {
  id: number;
  img: string;
  title: string;
  location: string;
  duration: string;
  modality: string;
  date: string;
};

export interface OngInterface {
  id: string;
  activ: boolean;
  img: string;
  name: string;
  description: string;
  job_position: string;
  categories: string;
  area: string;
  title: string;
  tasks: string;
  requirements: string[];
  location: string;
  hours: string;
  certificate: string;
  duration: string;
  modality: string;
  published: string;
  comment: string;
  about: string;
}
