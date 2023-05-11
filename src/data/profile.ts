const profile = {
  name: 'Joshua Farayola',
  tagLine: 'a software engineer',
  introduction: [
    'I am a software engineer and a Computer Science student at the University of Ibadan. I have been fascinated by computers since I was 10 years old. I remember when I first saw a computer, I was amazed by what it could do. I knew right then and there that I wanted to learn everything I could about computers.',
    'My focus is on building efficient and maintainable software solutions that provide business value. I am also a very good team player with great communication skills and interpersonal relationship skills.',
    "I have a lot of interests, the one I'm actively pursuing right now is Data Structures and Algorithms. I am currently learning German, with a special love for music, books, history and travelling.",
  ],
  works: [
    {
      title: 'Play Tic Tac Toe',
      summary: 'A tic tac toe game featuring an AI opponent',
      story: [
        'This was one of my earliest works. It took a while to figure out how to implement the AI opponent, but I did it anyway.',
        "While building this app, I also learnt how to not block the main app with long running operations like the figuring out the AI's move.",
      ],
      skillsUsed: ['React', 'Heroku'],
      link: {
        code: 'https://github.com/farayolaj/tic-tac-toe',
        live: 'https://tic-tac-toe-20.herokuapp.com',
      },
      imgUrl: '/images/TicTacToe.png',
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
      title: 'Paystack GraphQL Server',
      summary: "A GraphQL proxy for Paystack's API",
      story: [
        'Paystack has a nice REST API, how will it look in GraphQL?',
        'This is still in the works.',
      ],
      skillsUsed: ['GraphQL', 'Typescript', 'Node'],
      link: {
        code: 'https://github.com/farayolaj/paystack-gql-server',
      },
      imgUrl: '/images/paystack-gql-server.png',
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
