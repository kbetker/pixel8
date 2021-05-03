'use strict';
const bcrypt = require('bcrypt')

const password = bcrypt.hashSync('password', 8);

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Pixel_Users', [

      { full_name: "Nert Bisels", username: "aliceBlue", email: "nert@bisels.com", about: "I like turtles", hashedPassword: password, created_at: "2000-01-01", updated_at: "2000-01-01" },
      { full_name: "Kenn Nitvarn", username: "antiqueWhite", email: "kenn@nitvarn.com", about: "I hate about me pages", hashedPassword: password, created_at: "2000-01-01", updated_at: "2000-01-01" },
      { full_name: "Fergit Hote", username: "aqua", email: "fergit@hote.com", about: "I walk the streets of Japan, 'til I get lost. Cause it doesn't remind me of anything.", hashedPassword: password, created_at: "2000-01-01", updated_at: "2000-01-01" },
      { full_name: "Coll Bitzron", username: "azure", email: "coll@bitzron", about: "I have a third nipple on the bottom of my foot.", hashedPassword: password, created_at: "2000-01-01", updated_at: "2000-01-01" },
      { full_name: "Lood Jangslosti", username: "beige", email: "lood@jangslosti.com", about: "I suck at video games... actually at life in general :(", hashedPassword: password, created_at: "2000-01-01", updated_at: "2000-01-01" },
      { full_name: "Taenis Tellron", username: "bisque", email: "taenis@tellron.com", about: "I am currently the oldest I have ever been in my life", hashedPassword: password, created_at: "2000-01-01", updated_at: "2000-01-01" },
      { full_name: "Marnel Hary", username: "blanchedAlmond", email: "marnel@harry.com", about: "I am awesome! By 'I', I mean 'You', and by 'awesome', I mean dumb... for reading this. haha!", hashedPassword: password, created_at: "2000-01-01", updated_at: "2000-01-01" },
      { full_name: "Dony Olerberz", username: "chocolate", email: "dony@olerberz.com", about: "This is a lot of typing. I should have just copied something", hashedPassword: password, created_at: "2000-01-01", updated_at: "2000-01-01" },
      { full_name: "Gin Ginlons", username: "cadetBlue", email: "gin@ginlons.com", about: "I am not good enough to have imposter syndrome.", hashedPassword: password, created_at: "2000-01-01", updated_at: "2000-01-01" },
      { full_name: "Wob Wonkoz", username: "chartreuse", email: "wob@wonkoz.com", about: "Uhhhhhhhhhhhhhhhhhhhhhhhhhhh....", hashedPassword: password, created_at: "2000-01-01", updated_at: "2000-01-01" },
      { full_name: "Adam Lovett", username: "adamlovett", email: "adamlovett@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Alex Betita", username: "alexbetita", email: "alexbetita@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Alexandra Bouillon", username: "alexandrabouillon", email: "alexandrabouillon@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Amber Bancroft", username: "amberbancroft", email: "amberbancroft@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Ananya Hans", username: "ananyahans", email: "ananyahans@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Andrew Musta", username: "andrewmusta", email: "andrewmusta@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Andrew Loeffler", username: "andrewloeffler", email: "andrewloeffler@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Ben Ash", username: "benash", email: "benash@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Chris Pettet", username: "chrispettet", email: "chrispettet@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Chris Regan", username: "chrisregan", email: "chrisregan@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Connor Henderson", username: "connorhenderson", email: "connorhenderson@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Daniel Rosen", username: "danielrosen", email: "danielrosen@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Danny Chen", username: "dannychen", email: "dannychen@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Davis Handler", username: "davishandler", email: "davishandler@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Drew Long", username: "drewlong", email: "drewlong@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Drew Osmond", username: "drewosmond", email: "drewosmond@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Eb Tayara", username: "ebtayara", email: "ebtayara@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Eddy Kim", username: "eddykim", email: "eddykim@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Ethan Kaseff", username: "ethankaseff", email: "ethankaseff@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Felipe Araujo", username: "felipearaujo", email: "felipearaujo@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Geoffrey Yang", username: "geoffreyyang", email: "geoffreyyang@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Esther Kang", username: "estherkang", email: "estherkang@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Jacob Leonhardt", username: "jacobleonhardt", email: "jacobleonhardt@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "James Mayfield", username: "jamesmayfield", email: "jamesmayfield@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "James Daniel", username: "jamesdaniel", email: "jamesdaniel@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Jeff Lopez Garcia", username: "jefflopezgarcia", email: "jefflopezgarcia@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Jia Li", username: "jiali", email: "jiali@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Jimmy Ly", username: "jimmyly", email: "jimmyly@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Jimson Ma", username: "jimsonma", email: "jimsonma@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "John Sims", username: "johnsims", email: "johnsims@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "John Shivers", username: "johnshivers", email: "johnshivers@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Jonathan Salguero", username: "jonathansalguero", email: "jonathansalguero@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Jordyn Sechrist", username: "jordynsechrist", email: "jordynsechrist@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Justin Wong", username: "justinwong", email: "justinwong@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Kevin Betker", username: "kevinbetker", email: "kevinbetker@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Kevin Tran", username: "kevintran", email: "kevintran@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Lauren Gustafson", username: "laurengustafson", email: "laurengustafson@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Logan Frye", username: "loganfrye", email: "loganfrye@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Melonnie Hicks", username: "melonniehicks", email: "melonniehicks@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Mike Sineath", username: "mikesineath", email: "mikesineath@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Nathan Mac", username: "nathanmac", email: "nathanmac@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Nate Blaz", username: "nateblaz", email: "nateblaz@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Nathan Mount", username: "nathanmount", email: "nathanmount@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Nick Kury", username: "nickkury", email: "nickkury@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Nicholas Brancifort", username: "nicholasbrancifort", email: "nicholasbrancifort@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Noah Carmichael-Hitsman", username: "noahcarmichaelhitsman", email: "noahcarmichaelhitsman@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Owen Beckles", username: "owenbeckles", email: "owenbeckles@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Becky Chen", username: "beckychen", email: "beckychen@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Rich Supe", username: "richsupe", email: "richsupe@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Ryan Dalton", username: "ryandalton", email: "ryandalton@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Sarah Jacobs", username: "sarahjacobs", email: "sarahjacobs@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Stephen Choung", username: "stephenchoung", email: "stephenchoung@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Sylvia Onwuana", username: "sylviaonwuana", email: "sylviaonwuana@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Victoria Tarane", username: "victoriatarane", email: "victoriatarane@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Bill Adams", username: "billadams", email: "billadams@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Zach Yu", username: "zachyu", email: "zachyu@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
      { full_name: "Zaviar Brown", username: "zaviarbrown", email: "zaviarbrown@aastudent.com", about: "Some info about me!", hashedPassword: password, created_at: "2021-02-08", updated_at: "2021-02-08" },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Pixel_Users', null, {});
  }
};
