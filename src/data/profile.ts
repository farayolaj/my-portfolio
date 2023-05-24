import type { Profile } from '@types';

const profile: Profile = {
  name: 'Joshua Farayola',
  tagLine: 'a software engineer',
  introduction: [
    'I am a software engineer and a Computer Science student at the University of Ibadan. I have been fascinated by computers since I was 10 years old. I remember when I first saw a computer, I was amazed by what it could do. I knew right then and there that I wanted to learn everything I could about computers.',
    'My focus is on building efficient and maintainable software solutions that provide business value. I am also a very good team player with great communication skills and interpersonal relationship skills.',
    "I have a lot of interests, the one I'm actively pursuing right now is Data Structures and Algorithms. I am currently learning German, with a special love for music, books, history and travelling.",
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
        live: 'https://thread-it.netlify.app',
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
        live: 'https://tic-tac-toe-20.herokuapp.com',
      },
      imgUrl: '/images/TicTacToe.png',
    },
  ],
  resume: {
    download: '/documents/joshua-farayola-resume.pdf',
    view: 'https://docs.google.com/document/d/1ycl4OIvr8SlvPEeWaNI_wS85I17Mn3cWnigO5lYh1Bk/edit?usp=sharing',
  },
  contact: {
    twitter: 'https://twitter.com/JFarayola',
    linkedin: 'https://www.linkedin.com/in/joshua-farayola',
    github: 'https://github.com/farayolaj',
    email: 'farayolajoshua@gmail.com',
  },
};

export default profile;
