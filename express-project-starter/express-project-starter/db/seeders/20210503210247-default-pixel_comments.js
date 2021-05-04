'use strict';

//Testing can you see this comment?

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
    return queryInterface.bulkInsert('Pixel_Comments',
      [
        { pixelStoryId: 81, pixelUserId: 1, body: "I like that part where the thing happened.", createdAt: "2000-01-01", updatedAt: "2000-01-01" },
        { pixelStoryId: 82, pixelUserId: 2, body: "These comments are so vanilla.", createdAt: "2000-01-01", updatedAt: "2000-01-01" },
        { pixelStoryId: 83, pixelUserId: 3, body: "Honey, where are my paaaaaannnnnts?", createdAt: "2000-01-01", updatedAt: "2000-01-01" },
        { pixelStoryId: 84, pixelUserId: 4, body: "I'm Batman", createdAt: "2000-01-01", updatedAt: "2000-01-01" },
        { pixelStoryId: 81, pixelUserId: 1, body: "Is this the real life?", createdAt: "2000-01-01", updatedAt: "2000-01-01" },
        { pixelStoryId: 82, pixelUserId: 2, body: "Is this just fantasy?", createdAt: "2000-01-01", updatedAt: "2000-01-01" },
        { pixelStoryId: 83, pixelUserId: 1, body: "Caught in a landslide, no escape from reality.", createdAt: "2000-01-01", updatedAt: "2000-01-01" },
        { pixelStoryId: 84, pixelUserId: 3, body: "Open your eyes, look up to the skies and see.", createdAt: "2000-01-01", updatedAt: "2000-01-01" },
        { pixelStoryId: 81, pixelUserId: 4, body: "I'm just a poor boy, I need no sympathy", createdAt: "2000-01-01", updatedAt: "2000-01-01" },
        { pixelStoryId: 82, pixelUserId: 1, body: "Because I'm easy come, easy go, little high, little low.", createdAt: "2000-01-01", updatedAt: "2000-01-01" },
        { pixelStoryId: 83, pixelUserId: 1, body: "Any way the wind blows, doesn't really matter to me.", createdAt: "2000-01-01", updatedAt: "2000-01-01" },
        { pixelStoryId: 82, pixelUserId: 27, body: "Best article ever!!", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 82, pixelUserId: 32, body: "Whoa I really want to play this now.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 83, pixelUserId: 14, body: "Dude, I F***ING LOVE THIS GAME", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 83, pixelUserId: 45, body: "Language!!!", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 84, pixelUserId: 50, body: "Well, that changes my mind about this game.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 84, pixelUserId: 36, body: "Huh.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 85, pixelUserId: 42, body: "Wow, this looks awesome!", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 85, pixelUserId: 12, body: "I'm gonna go buy this game right now lol...", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 86, pixelUserId: 28, body: "I don't know about you, but I'm gonna pre-buy this game.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 86, pixelUserId: 48, body: "Stop pre-buying games!!", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Pixel_Comments', null, {});
  }
};
