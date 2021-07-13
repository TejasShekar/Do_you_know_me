let readlinesync = require("readline-sync");
let userName = readlinesync.question("Hey there ! \nWhats's your name?\n");
let score = 0;
console.log("\nWelcome " + userName);

console.log(
  "\nLet's see how well you know me !\nThe rules of this quiz game is simple AF.\nYou score 1 point if you answer correct.\nYou loose 1 point if you answer wrong\n"
);

console.log(
  "\nBefore that,\nlet me verify whether you are a human or not 😆.\n"
);

let userVerifyAnswer = readlinesync.question(
  "Calculate the below mathematical expression\n(25*(100+5)/5+125-50) = "
);
//Use BODMAS to solve the above expression

function ask(question, answer) {
  let userAnswer = readlinesync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right answer !");
    score = score + 1;
  } else {
    console.log("Wrong answer");
    score = score - 1;
  }
  console.log("Your current score is ", score);
}

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
    answer: "Mathematics",
  },
  {
    question: "\nWhich is my favorite TV Series ?\n",
    answer: "Prison Break",
  },
];

if (userVerifyAnswer === "600") {
  console.log("Right Answer !\nYou are a human.");

  for (let i = 0; i < questions.length; i++) {
    let currentQuestion = questions[i];
    ask(currentQuestion.question, currentQuestion.answer);
  }

  console.log("\n×-×-×-×-×-×-×-×||×-×-×-×-×-×-×-×\n\nThankyou for playing.");
  console.log("\nYour final score is " + score);

  /*You can make the below 'if' condition more concise to 
	> if (score && score <= 2) 
	as well because score > 0 is truthy*/

  if (score > 0 && score <= 2) {
    console.log(
      "\nBy the way, you barely know me.\nWe should get along once this pandemic is over !"
    );
  } else if (score > 3) {
    console.log(
      "\nWow! You know me well 😄 , but still let's catch-up after this Pandemic is over."
    );
  } else {
    console.log(
      "\nBut, seriously ? Negative score ? 😐\nDo you even know me ?!!\nI think we should spend more time together and know about each other."
    );
  }
} else {
  console.log(
    "\nI didn't know you were weak in solving simple math question. Try again !!!"
  );
}
