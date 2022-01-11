/* Before running this program, run the following commands in terminal to install dependencies.
1. npm install readline-sync
2. npm install chalk
*/
let readlinesync = require("readline-sync");
let chalk = require("chalk");
let userName = readlinesync.question("Hey there ! \nWhats's your name?\n");
let score = 0;
console.log(`\nWelcome ${chalk.green(userName)}`);

console.log(
  chalk.underline("\nLet's see how well you know me !") +
    "\nThe rules of this quiz game is simple AF.\nYou score 1 point if you answer correct.\nYou loose 1 point if you answer wrong\n"
);

console.log(
  "\nBefore that,\nlet me verify whether you are a human or not 😆.\n"
);

let userVerifyAnswer = readlinesync.question(
  "Calculate the below mathematical expression\n25*(100+5)/(190-170+5) = "
);
//Use BODMAS to solve the above expression

const ask = (question, answer) => {
  let userAnswer = readlinesync.question(question);
  let result =
    userAnswer.toUpperCase() === answer.toUpperCase()
      ? { status: chalk.green("Right answer !"), count: (score += 1) }
      : { status: chalk.red("Wrong answer !"), count: (score -= 1) };
  console.log(result.status, `\nYour current score is ${result.count}`);
};

let questions = [
  {
    question: "\nIn which city do I live ?\n",
    answer: "Bangalore",
  },
  {
    question: "\nWhat is my nick name ?\n",
    answer: "Teee",
  },
  {
    question: "\nWhat is my favorite food ?\n",
    answer: "Noodles",
  },
  {
    question: "\nWhat is my favorite subject ?\n",
    answer: "Chemistry",
  },
  {
    question: "\nWhich is my favorite TV Series ?\n",
    answer: "Prison Break",
  },
];

if (userVerifyAnswer === "105") {
  console.log(`${chalk.green("Right Answer !")}\n You are a human.`);

  for (let currentQuestion of questions) {
    ask(currentQuestion.question, currentQuestion.answer);
  }

  console.log(
    chalk.bgRed("\n×-×-×-×-×-×-×-×||×-×-×-×-×-×-×-×\n") +
      chalk.bgBlue("\nThankyou for playing.")
  );
  console.log(chalk.bold(`\nYour final score is ${score}`));

  switch (score) {
    case 0:
    case 1:
    case 2:
      console.log(
        "\nBy the way, you barely know me.\nWe should get along once this pandemic is over !"
      );
    case 3:
    case 4:
    case 5:
      console.log(
        "\nWow! You know me well 😄 , but still let's catch-up and get to know more about each other."
      );
      break;
    default:
      console.log(
        "\nBut, seriously ? Negative score ? 😐\nDo you even know me ?!!\nI think we should spend more time together and know about each other."
      );
      break;
  }
} else {
  console.log(
    "\nI didn't know you were weak in solving simple math question 😝. Try again !!!"
  );
}
