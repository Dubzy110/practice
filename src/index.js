import { storyGame } from "./storyGame.js";
import { settings } from "./settings.js";
import { history } from "./history.js";
import { sleep } from "./utils.js";
import { fileMaker } from "./fileMover.js";

import readline from "readline";

const l = console.log;
const log = (val) => {
  history.push(val);
  console.log(val);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = async (storyNode) => {
  return new Promise((resolve, reject) => {
    rl.question(storyNode.question, (answer) => {
      const answerCased = answer.toLowerCase();
      console.log("");
      if (answerCased === "exit") {
        settings.shutDown = true;
        return;
      } else if (
        !storyNode.validAnswers ||
        storyNode.validAnswers.includes(answerCased)
      ) {
        const text = storyNode.response(answerCased);
        history.push(storyNode.question);
        history.push(answerCased);
        log(text);
        return resolve();
      }
      console.log("that's not what was asked. try again.");
      return reject();
    });
  });
};

var recursiveAsyncReadLine = async function () {
  // await sleep(5000);
  const storyNode = storyGame[settings.storyGameIndex];
  if (storyNode.preText) {
    log(storyNode.preText);
  }

  if (storyNode.question) {
    while (true) {
      try {
        await askQuestion(storyNode);
        if (settings.shutDown) {
          rl.close();
          return;
        }
        break;
      } catch (err) {}
    }
  }
  settings.storyGameIndex++;
  l("settings.storyGameIndex 126", settings.storyGameIndex);
  l("storygame 127", storyGame.length);
  if (settings.storyGameIndex === storyGame.length) {
    l("you win yay");
    fileMaker(new Date().toISOString().split("T")[0] + ".txt");
    // fileMaker(new Date().toISOString().split(":").join("-") + ".txt");
    rl.close();
    return;
  }

  recursiveAsyncReadLine(); //Calling this function again to ask new question
};
recursiveAsyncReadLine(); //we have to actually start our recursion somehow
