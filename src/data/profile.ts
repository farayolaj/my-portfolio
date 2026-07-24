import type { Profile } from '@types';

const profile: Profile = {
  name: 'Joshua Farayola',
  tagLine: 'a software engineer',
  introduction: [
    "I'm a software engineer who builds systems people rely on — payment workflows, authentication servers, learning platforms. At Edutech, I led the migration from Moodle to a custom LMS serving 11,000+ students and staff, built a centralized OIDC/OAuth 2.0 authentication server, and owned the infrastructure that kept core services at 95% uptime.",
    'I work across the stack — backend APIs in Java, PHP and NestJS, frontends in React and Next.js, and everything in between: Docker, CI/CD, Redis, real-time WebSocket features. I care about reliability as a craft, not a metric. The best infrastructure is the kind nobody notices.',
    "I graduated First Class in Computer Science from the University of Ibadan. When I'm not shipping, I'm studying German, reading history, or listening to music.",
  ],
  works: [
    {
      title: 'Update Playlist',
      summary:
        'A CLI app that can help you update the metadata of your music files',
      story: [
        'I built this after going through a data recovery. Most of the music files from the recovery had the wrong metadata and it was stressful to edit manually. So I thought, why not try to automate this?',
      ],
      skillsUsed: ['Java'],
      link: {
        code: 'https://github.com/farayolaj/update-audio-metadata',
      },
    },
    {
      title: 'Taco Cloud',
      summary:
        'A Spring Boot application I built while learning Spring and Spring Boot',
      story: [
        'After a lot of confusion about what exactly Spring is, and how it differs from Java EE (now Jakarta EE), I got to understand it and built something on it. The first of many!',
      ],
      skillsUsed: ['Java', 'Spring'],
      link: {
        code: 'https://github.com/farayolaj/taco-cloud',
      },
    },
    {
      title: 'Udacity DevOps Microservices',
      summary: 'My final project for the Udacity DevOps nanodegree',
      story: [
        'This is the capstone project for my Udacity DevOps nanodegree sponsored by ALX. I had to build a CI/CD pipeline for a microservice application. I learnt a lot about Docker, Kubernetes and CircleCI while working on this project.',
      ],
      skillsUsed: ['Docker', 'Kubernetes', 'CircleCI'],
      link: {
        code: 'https://github.com/farayolaj/udacity-devops-microservices',
      },
    },
    {
      title: 'Discord Chess Bot',
      summary: 'A Discord bot that organises and manages chess games',
      story: [
        'This was a fun project. I like to play chess, so I thought it would be nice to have a bot that can organise and manage chess games. I learnt a lot about building discord bots while working on this.',
      ],
      skillsUsed: ['Typescript', 'Node', 'Heroku'],
      link: {
        code: 'https://github.com/farayolaj/discord-chess-bot',
      },
    },
    {
      title: 'Thread It',
      summary: 'A threadable note-taking app',
      story: [
        "I was partly inspired by twitter's threads when I built this, you can take notes about related topics in a thread. While working on this, I learnt more about state management in a react application. There were also other challenges I faced that required that I research and update what I knew about building react applications.",
      ],
      skillsUsed: ['React', 'Firebase', 'Typescript', 'Netlify'],
      link: {
        code: 'https://github.com/farayolaj/thread-it',
        live: 'https://threadit.farayolaj.ng',
      },
      imgUrl: '/images/ThreadIt.png',
    },
    {
      title: 'Play Tic Tac Toe',
      summary: 'A tic tac toe game featuring an AI opponent',
      story: [
        'This was one of my earliest works. It took a while to figure out how to implement the AI opponent, but I did it anyway.',
        "While building this app, I also learnt how to not block the main app with long running operations like figuring out the AI's move.",
      ],
      skillsUsed: ['React', 'Heroku'],
      link: {
        code: 'https://github.com/farayolaj/tic-tac-toe',
        live: 'https://tictactoe.farayolaj.ng',
      },
      imgUrl: '/images/TicTacToe.png',
    },
  ],
  resume: {
    download: '/documents/joshua-farayola-resume.pdf',
    // view: 'https://1drv.ms/w/c/eb06ed761e2e8cff/ESJ6Cq9cfDpLmKYeGEChiGABSbYZoykbzBUcMsjsVyDWCA?e=u3VIjB',
  },
  contact: {
    twitter: 'https://twitter.com/JFarayola',
    linkedin: 'https://www.linkedin.com/in/joshua-farayola',
    github: 'https://github.com/farayolaj',
    email: 'farayolajoshua@gmail.com',
  },
};

export default profile;
