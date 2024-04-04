import { settings } from "./settings.js";
import { history } from "./history.js";

const log = console.log;
const prefix = "        ";

export const storyGame = [
  {
    preText: `${prefix}Deep in a dark forest there stands a man. He is you, though it has yet to truly matter.`,

    question: `${prefix}Who are you?: `,

    response: (answer) => {
      const text = `${prefix}Your name is ${answer}? what a strange name, must be foreign. As I was saying there was a man. The man is unsightly in appearence, his face hidden by a dreary grey cloak, 
${prefix}only roughed trousers with a faint blue color show from beneath the tattered cloak. 
${prefix}A small dirtied pocket watch visable in it's pockets, ticking audibly, it says the time is roughly 5:30, presumably evening based on the dimness of his surroundings`;

      return text;
    },
  },
  {
    preText: `${prefix}  night is falling and action must be taken quickly! but in which direction?
        The north is blocked by particulary thick and unyielding foliage. To the east you can faintly hear running water. Though it seems to be quite distant.
        The west and south have no particlar signs of the fortunes they could hide.`,

    question: `${prefix}  Which direction? `,

    validAnswers: ["north", "n", "east", "e", "south", "s", "west", "w"],

    response: (answer) => {
      if (answer === "north" || answer === "n") {
        const text = `${prefix}You spend the rest of the day attempting to push through the foliage. Night falls and you succumb to the cold of the night.`;

        settings.shutDown = true;
        return text;
      } else if (answer === "east" || answer === "e") {
        const text = `${prefix}  You head east towards the sound of water. You see a river flowing gently with many fish in it's currents. 
        Clearly you aren't the first person here as there is a lightly rusted spear on the rivers bank. Using the spear you catch a fish for dinner later, once you have shelter.
        You also keep the spear, it never hurts to have a method of self defense.`;

        settings.haveFood = true;
        settings.storyGameIndex--;
        return text;
      } else if (answer === "south" || answer === "s") {
        const text = `${prefix}You wander south for what feels like forever, eventually you turn around only to find yourself right back where you were before. Having made no progress.`;

        settings.storyGameIndex--;
        return text;
      } else if (
        (answer === "west" || answer === "w") &&
        settings.haveFood === true
      ) {
        const text = `${prefix}You head west and you see a faint light far in the distance, a gentle orange glow in this dark forest. Upon arriving to the glow you find a decrepit cabin sitting atop a cliff,
        how comforting. This cabin will be your shelter as you have your meal for the night.`;
        return text;
      } else if (answer === "west" || answer === "w") {
        const text = `${prefix}You head west and you see a faint light far in the distance, a gentle orange glow in this dark forest.
          ${prefix}Upon arriving to the glow you find a decrepit cabin sitting atop a cliff, how comforting. This cabin could be shelter if you had a meal for the night. Sadly you don't so you must continue.`;

        settings.storyGameIndex--;
        return text;
      }
    },
  },
  {},
];
