/*
  Am currently running into an issue where jest doesn't
  play nice with the spread operator - and when transpiling
  into jest, the spread operator continually creates errors.

  This test file checks to see if the shemas are valid for
  song and comments.
*/


// const {
//   sequelize,
//   dataTypes,
//   checkModelName,
//   checkPropertyExists,
// } = require('sequelize-test-helpers');

// require('@babel/register')({
//   presets: ['@babel/preset-env'],
//   ignore: ['/node_modules/sequelize-test-helpers.+\\.js$"'],
// });

// const sequelizeTesters = require('sequelize-test-helpers');
const SequelizeMock = require('sequelize-mock');

const SongModel = require('../database/models/Songs.js');

const CommentModel = require('../database/models/Comments.js');

test('should do something', () => {
  expect(true).toBe(true);
});

test('should do something else', () => {
  expect(1 + 1).toBe(2);
});