import King from "./King/King.js";
import Fighter from "./Fighter/Fighter.js";
import Assessor from "./Assessor/Assessor.js";
import Squire from "./Squire/Squire.js";

const joffreyBaratheon = new King("Joffrey Baratheon", "Baratheon", 480, true);
const jaimeLannister = new Fighter(
  "Jaime Lannister",
  "Lannister",
  40,
  true,
  "sword",
  9,
);
const daenerysTargaryen = new Fighter(
  "Daenerys Targaryen",
  "Targaryen",
  20,
  true,
  "dragon",
  6,
);
const tyrionLannister = new Assessor(
  "Tyrion Lannister",
  "Lannister",
  50,
  true,
  daenerysTargaryen,
);
const bronn = new Squire("bronn", "unkown", 44, true, jaimeLannister, 5);

const characters = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  tyrionLannister,
  bronn,
];

const getCharactersCommunicate = (characters) =>
  characters.map((character) => character.communicate);
