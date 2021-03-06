'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pixel_Followers', [
      { pixelFollowingId: 1, pixelFollowerId: 6   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 1, pixelFollowerId: 7   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 1, pixelFollowerId: 8   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 2, pixelFollowerId: 1   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 2, pixelFollowerId: 6   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 2, pixelFollowerId: 5   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 3, pixelFollowerId: 1   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 3, pixelFollowerId: 2   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 3, pixelFollowerId: 5   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 4, pixelFollowerId: 1   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 4, pixelFollowerId: 2   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 4, pixelFollowerId: 3   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 5, pixelFollowerId: 2   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 5, pixelFollowerId: 3   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 5, pixelFollowerId: 4   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 6, pixelFollowerId: 3   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 6, pixelFollowerId: 4   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 6, pixelFollowerId: 5   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 7, pixelFollowerId: 4   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 7, pixelFollowerId: 6   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 7, pixelFollowerId: 8   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 8, pixelFollowerId: 7   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 8, pixelFollowerId: 9   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 8, pixelFollowerId: 10  , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 9, pixelFollowerId: 7   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 9, pixelFollowerId: 8   , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 9, pixelFollowerId: 10  , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 10, pixelFollowerId: 9  , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 10, pixelFollowerId: 11 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 10, pixelFollowerId: 12 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 11, pixelFollowerId: 9  , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 11, pixelFollowerId: 10 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 11, pixelFollowerId: 12 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 12, pixelFollowerId: 11 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 12, pixelFollowerId: 13 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 12, pixelFollowerId: 14 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 13, pixelFollowerId: 11 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 13, pixelFollowerId: 12 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 13, pixelFollowerId: 14 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 14, pixelFollowerId: 13 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 14, pixelFollowerId: 15 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 14, pixelFollowerId: 16 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 15, pixelFollowerId: 13 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 15, pixelFollowerId: 14 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 15, pixelFollowerId: 16 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 16, pixelFollowerId: 15 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 16, pixelFollowerId: 17 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 16, pixelFollowerId: 18 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 17, pixelFollowerId: 15 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 17, pixelFollowerId: 16 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 17, pixelFollowerId: 18 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 18, pixelFollowerId: 17 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 18, pixelFollowerId: 19 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 18, pixelFollowerId: 20 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 19, pixelFollowerId: 17 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 19, pixelFollowerId: 18 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 19, pixelFollowerId: 20 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 20, pixelFollowerId: 19 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 20, pixelFollowerId: 21 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 20, pixelFollowerId: 22 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 21, pixelFollowerId: 19 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 21, pixelFollowerId: 20 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 21, pixelFollowerId: 22 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 22, pixelFollowerId: 21 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 22, pixelFollowerId: 23 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 22, pixelFollowerId: 24 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 23, pixelFollowerId: 21 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 23, pixelFollowerId: 22 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 23, pixelFollowerId: 24 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 24, pixelFollowerId: 23 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 24, pixelFollowerId: 25 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 24, pixelFollowerId: 26 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 25, pixelFollowerId: 23 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 25, pixelFollowerId: 24 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 25, pixelFollowerId: 26 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 26, pixelFollowerId: 25 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 26, pixelFollowerId: 27 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 26, pixelFollowerId: 28 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 27, pixelFollowerId: 25 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 27, pixelFollowerId: 26 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 27, pixelFollowerId: 28 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 28, pixelFollowerId: 27 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 28, pixelFollowerId: 29 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 28, pixelFollowerId: 30 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 29, pixelFollowerId: 27 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 29, pixelFollowerId: 28 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 29, pixelFollowerId: 30 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 30, pixelFollowerId: 29 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 30, pixelFollowerId: 31 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 30, pixelFollowerId: 32 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 31, pixelFollowerId: 29 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 31, pixelFollowerId: 30 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 31, pixelFollowerId: 32 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 32, pixelFollowerId: 31 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 32, pixelFollowerId: 33 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 32, pixelFollowerId: 34 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 33, pixelFollowerId: 31 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 33, pixelFollowerId: 32 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 33, pixelFollowerId: 34 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 34, pixelFollowerId: 33 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 34, pixelFollowerId: 35 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 34, pixelFollowerId: 36 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 35, pixelFollowerId: 33 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 35, pixelFollowerId: 34 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 35, pixelFollowerId: 36 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 36, pixelFollowerId: 35 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 36, pixelFollowerId: 37 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 36, pixelFollowerId: 38 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 37, pixelFollowerId: 35 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 37, pixelFollowerId: 36 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 37, pixelFollowerId: 38 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 38, pixelFollowerId: 37 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 38, pixelFollowerId: 39 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 38, pixelFollowerId: 40 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 39, pixelFollowerId: 37 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 39, pixelFollowerId: 38 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 39, pixelFollowerId: 40 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 40, pixelFollowerId: 39 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 40, pixelFollowerId: 41 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 40, pixelFollowerId: 42 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 41, pixelFollowerId: 39 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 41, pixelFollowerId: 40 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 41, pixelFollowerId: 42 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 42, pixelFollowerId: 41 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 42, pixelFollowerId: 43 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 42, pixelFollowerId: 44 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 43, pixelFollowerId: 41 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 43, pixelFollowerId: 42 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 43, pixelFollowerId: 44 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 44, pixelFollowerId: 43 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 44, pixelFollowerId: 45 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 44, pixelFollowerId: 46 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 45, pixelFollowerId: 43 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 45, pixelFollowerId: 44 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 45, pixelFollowerId: 46 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 46, pixelFollowerId: 59 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 46, pixelFollowerId: 45 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 46, pixelFollowerId: 47 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 47, pixelFollowerId: 45 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 47, pixelFollowerId: 46 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 47, pixelFollowerId: 48 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 48, pixelFollowerId: 47 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 48, pixelFollowerId: 49 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 48, pixelFollowerId: 50 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 49, pixelFollowerId: 47 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 49, pixelFollowerId: 48 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 49, pixelFollowerId: 50 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 50, pixelFollowerId: 48 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 50, pixelFollowerId: 49 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 50, pixelFollowerId: 51 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 51, pixelFollowerId: 49 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 51, pixelFollowerId: 50 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 51, pixelFollowerId: 52 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 52, pixelFollowerId: 51 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 52, pixelFollowerId: 53 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 52, pixelFollowerId: 54 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 53, pixelFollowerId: 51 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 53, pixelFollowerId: 52 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 53, pixelFollowerId: 54 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 54, pixelFollowerId: 52 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 54, pixelFollowerId: 53 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 54, pixelFollowerId: 55 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 55, pixelFollowerId: 53 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 55, pixelFollowerId: 54 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 55, pixelFollowerId: 56 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 56, pixelFollowerId: 55 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 56, pixelFollowerId: 57 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 56, pixelFollowerId: 58 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 57, pixelFollowerId: 60 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 57, pixelFollowerId: 56 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 57, pixelFollowerId: 60 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 58, pixelFollowerId: 56 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 58, pixelFollowerId: 57 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 58, pixelFollowerId: 59 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 59, pixelFollowerId: 57 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 59, pixelFollowerId: 60 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 59, pixelFollowerId: 58 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 60, pixelFollowerId: 58 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 60, pixelFollowerId: 55 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},
      { pixelFollowingId: 60, pixelFollowerId: 59 , createdAt: "2000-01-01", updatedAt: "2000-01-01"},], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pixel_Followers', null, {});
  }
};
