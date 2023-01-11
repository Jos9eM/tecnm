export interface ResponseProject {
  ok: boolean;
  paginate: number;
  projects: Project[];
}

export interface Project {
  _id?: string;
  title?: string;
  publisherName?: string;
  authors?: string[];
  authorPosition?: string;
  porpouse?: string;
  summary?: string;
  objective?: string;
  characteristics?: string;
  currentState?: string;
  impiClass?: string;
  date?: string;
  editorial?: string;
  country?: string;
  sector?: string;
  subSector?: string;
  priority?: string;
  acknowledgement?: string;
  projectType?: string;
  initialPage?: string;
  finalPage?: string;
  volume?: string;
  registerIndex?: string;
  issn?: string;
  url?: string;
  productUser?: string;
  evidence?: string[];
  user?: User;
  projectId?: string;
  created?: string;
}

export interface User {
  _id?: string;
  name?: string;
  avatar?: string;
  email?: string;
  password?: string;
}

export interface ProjectType {
  title: string;
  icon: string;
  redirectTo: string;
}
