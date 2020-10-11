function getRankings(scoreBoard, userScores) {
  let scoreSet = new Set(scoreBoard);
  scoreBoard = Array.from(scoreSet);
  
  let ranks = [];
  console.log(scoreBoard);
  let len = scoreBoard.length + 1;
  for (let item of userScores) {
    const scoreCopy = [...scoreBoard];
    scoreCopy.push(item);
    scoreCopy.sort((a, b) => b - a);
    let rank = scoreCopy.indexOf(item) + 1;
    ranks.push(rank);
    console.log(rank);
  }
  // ranks.sort((a, b) => b - a);
  // console.log(len, ranks);
}

// getRankings([100, 100, 80, 75, 45, 40, 40, 26, 25, 24, 23, 22, 21], [1, 2, 2, 5, 12, 34,77, 77,77, 80, 88, 103]);
getRankings([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]);
