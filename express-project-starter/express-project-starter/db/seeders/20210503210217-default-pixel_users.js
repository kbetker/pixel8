'use strict';
const bcrypt = require('bcrypt')

const password = bcrypt.hashSync('password', 8);

//Testing can you see this comment?


module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Pixel_Users', [

      { fullName: "Nert Bisels", username: "aliceBlue", email: "nert@bisels.com", about: "I like turtles", hashedPassword: password, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { fullName: "Kenn Nitvarn", username: "antiqueWhite", email: "kenn@nitvarn.com", about: "I hate about me pages", hashedPassword: password, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { fullName: "Fergit Hote", username: "aqua", email: "fergit@hote.com", about: "I walk the streets of Japan, 'til I get lost. Cause it doesn't remind me of anything.", hashedPassword: password, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { fullName: "Coll Bitzron", username: "azure", email: "coll@bitzron", about: "I have a third nipple on the bottom of my foot.", hashedPassword: password, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { fullName: "Lood Jangslosti", username: "beige", email: "lood@jangslosti.com", about: "I suck at video games... actually at life in general :(", hashedPassword: password, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { fullName: "Taenis Tellron", username: "bisque", email: "taenis@tellron.com", about: "I am currently the oldest I have ever been in my life", hashedPassword: password, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { fullName: "Marnel Hary", username: "blanchedAlmond", email: "marnel@harry.com", about: "I am awesome! By 'I', I mean 'You', and by 'awesome', I mean dumb... for reading this. haha!", hashedPassword: password, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { fullName: "Dony Olerberz", username: "chocolate", email: "dony@olerberz.com", about: "This is a lot of typing. I should have just copied something", hashedPassword: password, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { fullName: "Gin Ginlons", username: "cadetBlue", email: "gin@ginlons.com", about: "I am not good enough to have imposter syndrome.", hashedPassword: password, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { fullName: "Wob Wonkoz", username: "chartreuse", email: "wob@wonkoz.com", about: "Uhhhhhhhhhhhhhhhhhhhhhhhhhhh....", hashedPassword: password, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { fullName: "Adam Lovett", username: "adamlovett", email: "adamlovett@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Alex Betita", username: "alexbetita", email: "alexbetita@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Alexandra Bouillon", username: "alexandrabouillon", email: "alexandrabouillon@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Amber Bancroft", username: "amberbancroft", email: "amberbancroft@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Ananya Hans", username: "ananyahans", email: "ananyahans@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Andrew Musta", username: "andrewmusta", email: "andrewmusta@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Andrew Loeffler", username: "andrewloeffler", email: "andrewloeffler@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Ben Ash", username: "benash", email: "benash@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Chris Pettet", username: "chrispettet", email: "chrispettet@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Chris Regan", username: "chrisregan", email: "chrisregan@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Connor Henderson", username: "connorhenderson", email: "connorhenderson@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Daniel Rosen", username: "danielrosen", email: "danielrosen@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Danny Chen", username: "dannychen", email: "dannychen@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Davis Handler", username: "davishandler", email: "davishandler@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Drew Long", username: "drewlong", email: "drewlong@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Drew Osmond", username: "drewosmond", email: "drewosmond@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Eb Tayara", username: "ebtayara", email: "ebtayara@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Eddy Kim", username: "eddykim", email: "eddykim@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Ethan Kaseff", username: "ethankaseff", email: "ethankaseff@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Felipe Araujo", username: "felipearaujo", email: "felipearaujo@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Geoffrey Yang", username: "geoffreyyang", email: "geoffreyyang@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Esther Kang", username: "estherkang", email: "estherkang@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Jacob Leonhardt", username: "jacobleonhardt", email: "jacobleonhardt@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "James Mayfield", username: "jamesmayfield", email: "jamesmayfield@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "James Daniel", username: "jamesdaniel", email: "jamesdaniel@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Jeff Lopez Garcia", username: "jefflopezgarcia", email: "jefflopezgarcia@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Jia Li", username: "jiali", email: "jiali@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Jimmy Ly", username: "jimmyly", email: "jimmyly@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Jimson Ma", username: "jimsonma", email: "jimsonma@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "John Sims", username: "johnsims", email: "johnsims@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "John Shivers", username: "johnshivers", email: "johnshivers@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Jonathan Salguero", username: "jonathansalguero", email: "jonathansalguero@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Jordyn Sechrist", username: "jordynsechrist", email: "jordynsechrist@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Justin Wong", username: "justinwong", email: "justinwong@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Kevin Betker", username: "kevinbetker", email: "kevinbetker@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Kevin Tran", username: "kevintran", email: "kevintran@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Lauren Gustafson", username: "laurengustafson", email: "laurengustafson@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Logan Frye", username: "loganfrye", email: "loganfrye@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Melonnie Hicks", username: "melonniehicks", email: "melonniehicks@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Mike Sineath", username: "mikesineath", email: "mikesineath@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Nathan Mac", username: "nathanmac", email: "nathanmac@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Nate Blaz", username: "nateblaz", email: "nateblaz@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Nathan Mount", username: "nathanmount", email: "nathanmount@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Nick Kury", username: "nickkury", email: "nickkury@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Nicholas Brancifort", username: "nicholasbrancifort", email: "nicholasbrancifort@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Noah Carmichael-Hitsman", username: "noahcarmichaelhitsman", email: "noahcarmichaelhitsman@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Owen Beckles", username: "owenbeckles", email: "owenbeckles@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Becky Chen", username: "beckychen", email: "beckychen@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Rich Supe", username: "richsupe", email: "richsupe@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Ryan Dalton", username: "ryandalton", email: "ryandalton@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Sarah Jacobs", username: "sarahjacobs", email: "sarahjacobs@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Stephen Choung", username: "stephenchoung", email: "stephenchoung@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Sylvia Onwuana", username: "sylviaonwuana", email: "sylviaonwuana@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Victoria Tarane", username: "victoriatarane", email: "victoriatarane@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Bill Adams", username: "billadams", email: "billadams@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Zach Yu", username: "zachyu", email: "zachyu@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
      { fullName: "Zaviar Brown", username: "zaviarbrown", email: "zaviarbrown@aastudent.com", about: "Some info about me!", hashedPassword: password, createdAt: "2021-02-08", updatedAt: "2021-02-08" },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Pixel_Users', null, {});
  }
};
