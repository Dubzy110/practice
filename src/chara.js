import { settings } from "./settings.js";

export const player = [
  {
    name: "player",
    health: settings.babymode ? 30 : 15,
    attacks: [
      {
        name: "struggle",
        damage: 1, //basically pointless
        speed: 1,
      },
    ],
    speed: 2,
    stealth: true,
    stealthQuality: "low",
  },
];

export const enemies = [
  {
    name: "trapper",
    health: 4,
    attacks: [
      {
        name: "knifeStab",
        damage: 2,
        speed: 1,
      },
    ],
    speed: 0.8,
    stealth: true,
    stealthQuality: "medium",
    projectiles: [
      {
        Name: "bearTrap",
        Count: 3,
        Speed: 0,
        Damage: 9,
        stunTime: 10,
      },
      {
        name: "snareTrap",
        count: 2,
        speed: 0,
        damage: 0,
        stunTime: 20,
      },
    ],
  },
  {
    name: "hunter",
    health: 3,
    attacks: [
      {
        name: "hunterKnifeStab",
        damage: 2,
        speed: 2,
      },
    ],
    speed: 1.8,
    stealth: true,
    stealthQuality: "high",
    projectiles: [
      {
        Name: "arrow",
        Count: 5,
        Speed: 4,
        Damage: 4,
        stunTime: 1,
      },
    ],
  },
  {
    name: "deer",
    health: 3,
    attacks: [
      {
        name: "deerCharge",
        damage: 6,
        speed: 5,
      },
      {
        name: "antlerStab",
        damage: 4,
        speed: 1,
      },
    ],
    speed: 1,
    stealth: true,
    stealthQuality: "medium",
  },
  {
    name: "treant",
    health: 10,
    attacks: [
      {
        name: "branchStrike",
        damage: 9,
        speed: 5,
      },
    ],
    speed: 0,
    stealth: true,
    stealthQuality: "veryHigh",
  },
  {
    name: "wendigo",
    health: 25,
    attacks: [
      {
        name: "spookyClaws",
        damage: 7,
        speed: 5,
      },
      {
        name: "scaryNoise",
        damage: 0,
        speed: 0,
      },
    ],
    speed: 3,
    stealth: true,
    stealthQuality: "low",
  },
];

// import { player } from "../src/chara.js";
// import { enemies } from "../src/chara.js";

// enemies.forEach((enemy, enemyIndex) => {
//   enemy.attacks.forEach((attack, attackIndex) => {
//     console.log(
//       "enemyIndex:",
//       enemyIndex,
//       enemy.name + ",",
//       "attackIndex:",
//       attackIndex,
//       JSON.stringify(attack.name)
//     );
//   });
// });
