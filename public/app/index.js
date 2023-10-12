import King from "./King/King";
import Fighter from "./Fighter/Fighter";
import Assessor from "./Assessor/Assessor";
import Squire from "./Squire/Squire";

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
