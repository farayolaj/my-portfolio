export type Profile = {
  name: string;
  tagLine: string;
  introduction: string[];
  works: Work[];
  resume: Resume;
  contact: Contact;
};

export type Skill =
  | 'React'
  | 'GraphQL'
  | 'Node'
  | 'Typescript'
  | 'MongoDB'
  | 'Firebase'
  | 'HTML'
  | 'CSS'
  | 'Git'
  | 'Redux'
  | 'Express'
  | 'MySQL'
  | 'Heroku'
  | 'Gatsby'
  | 'Netlify'
  | 'Next'
  | 'Java'
  | 'Spring'
  | 'Docker'
  | 'Kubernetes'
  | 'CircleCI'
  | 'PostgreSQL'
  | 'Nest';

export type Work = {
  title: string;
  summary: string;
  story: string[];
  skillsUsed: Skill[];
  link: {
    code: string;
    live?: string;
  };
  imgUrl?: string;
};

export type Resume = {
  download: string;
  view: string;
};

export type Contact = {
  twitter: string;
  linkedin: string;
  github: string;
  email: string;
};
