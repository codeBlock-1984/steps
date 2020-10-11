function getRankings(scoreBoard, userScores) {
  scoreBoard = Array.from(new Set(scoreBoard));
  let len = userScores.length;
  let rankCount = scoreBoard.length - 1;
  let nextLowerRank = scoreBoard.length + 1;
  let currentRank = scoreBoard.length;
  let count = rankCount;
  let rankings = [];
  let tail = [];
  let ite = 0;
  let previous;
  let isTwin = false;

  for (let item of userScores) {
    if (item < scoreBoard[rankCount]) {
      //console.log(nextLowerRank, 'nextl');
      //console.log(item, previous);
      if (item === previous) {
        isTwin = true;
        tail.splice(0, 0, nextLowerRank);
      } else {
        if (isTwin) {
          isTwin = false;
          tail.splice(0, 0, --nextLowerRank);
        } else {
          tail.splice(0, 0, nextLowerRank);
        }
      }
      previous = item;
      nextLowerRank++;
    } else break;
    console.log(ite++, 'ite>>>');
  }

  console.log(ite);
  let currentIndex = ite;
  let nextScoreToCheck = userScores[currentIndex];
  let lastScoreChecked = -Infinity;
  let i = rankCount;
  while (i > -1) {
    currentRank = i + 1;
    console.log(scoreBoard[i], nextScoreToCheck)
    if (nextScoreToCheck === lastScoreChecked) {
      tail.push(tail[tail.length - 1]);
      ++currentIndex;
      lastScoreChecked = nextScoreToCheck;
      nextScoreToCheck = userScores[currentIndex];
    } else {
      if (scoreBoard[i] === nextScoreToCheck) {
        tail.push(currentRank);
        console.log(currentRank, 'current rank');
        ++currentIndex;
        lastScoreChecked = nextScoreToCheck;
        nextScoreToCheck = userScores[currentIndex];
      } else if (scoreBoard[i] > nextScoreToCheck) {
        console.log(scoreBoard);
        console.log(i+1, 'current rank');
        tail.push(++currentRank);
        ++currentIndex;
        lastScoreChecked = nextScoreToCheck;
        nextScoreToCheck = userScores[currentIndex];
      } else {
        i--;
      }
    }
  }
  console.log(currentIndex, 'current index after');
 
  console.log(tail);

  // console.log(rankings);
  // console.log(scoreBoard);

}

getRankings([100, 100, 80, 75, 45, 40, 40, 26, 25, 24, 23, 22, 21], [1, 2, 2, 5, 12, 34,77, 77,77, 80, 88, 103]);
