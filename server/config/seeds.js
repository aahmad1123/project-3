const db = require('./connection');
const { User, Answer, Comment, Question } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  // Clean existing data
  await cleanDB('Answer', 'answers');
  await cleanDB('Comment', 'comments');
  await cleanDB('Question', 'questions');
  await cleanDB('User', 'users');

  // Create users
  const users = await User.insertMany([
    {
      firstName: 'Pamela',
      lastName: 'Washington',
      email: 'pamela@testmail.com',
      password: 'password12345',
    },
    {
      firstName: 'Elijah',
      lastName: 'Holt',
      email: 'eholt@testmail.com',
      password: 'password12345',
    },
  ]);

  console.log('Users seeded');

  // Create questions
  const questions = await Question.insertMany([
    {
      title: 'How do you code in Javascript?',
      body: 'I want to learn Javascript. What are the steps to learn?',
      tags: ['coding'],
      user: users[0]._id, // Pamela
    },
    {
      title: 'What is the best way to learn React?',
      body: 'I am new to React and want to know the best resources to learn.',
      tags: ['react', 'javascript'],
      user: users[1]._id, // Elijah
    },
  ]);

  console.log('Questions seeded');

  // Create answers
  const answers = await Answer.insertMany([
    {
      body: 'Start with the basics, then move on to more advanced concepts.',
      user: users[1]._id, // Elijah
      question: questions[0]._id, // Question by Pamela
    },
    {
      body: 'Check out the official documentation and some popular tutorials.',
      user: users[0]._id, // Pamela
      question: questions[1]._id, // Question by Elijah
    },
  ]);

  console.log('Answers seeded');

  // Create comments
  const comments = await Comment.insertMany([
    {
      body: 'This is very helpful, thank you!',
      user: users[0]._id, // Pamela
      answer: answers[0]._id, // Answer by Elijah
    },
    {
      body: 'Great suggestion, thanks!',
      user: users[1]._id, // Elijah
      answer: answers[1]._id, // Answer by Pamela
    },
  ]);

  console.log('Comments seeded');

  process.exit();
});
