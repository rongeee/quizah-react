export const fetchQuestions = (diff) => {
  const url = `https://opentdb.com/api.php?amount=10&difficulty=${diff}&type=multiple"`;

  return fetch(url)
}

export const shuffleQuestions = (questions) => {
  let answers = questions.incorrect_answers.concat(q.correct_answer);

  let currentIndex = answers.length;
  let temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = answers[currentIndex];
    answers[currentIndex] = answers[randomIndex];
    answers[randomIndex] = temporaryValue;
  }

  return answers;
}