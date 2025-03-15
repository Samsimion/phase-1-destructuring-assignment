// Strings
const farmAnimals = 'cow horse sheep pig chicken';

// 1. Assign variables based on animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(" ");

// 2. Assign animal names, skipping horse
const [bessie, , dolly, babe, little] = farmAnimals.split(" ");

// 3. Assign colors based on animals, skipping chicken
const [blackAndWhite, , black, pink] = farmAnimals.split(" ");

// Arrays
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// 4. Assign variables using color names
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Assign initials, excluding indigo
const [r, o, y, g, b, , v] = colors;

// 6. Assign indigo separately
const [, , , , , indg] = colors;

// Objects
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

// 7. Destructuring the entire muppet object
const { muppetName, color, song, job, partner } = muppet;

// Nested Object
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 8. Destructuring nested properties
const { 
  album: { 
    theMuppetMovie: { song2, song4 } 
  }, 
  nestedJob, 
  nestedPartner 
} = nestedMuppet;

