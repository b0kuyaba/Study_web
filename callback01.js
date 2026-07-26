function checkScore(score, onPass, onFail) {
  if (score > 60) {
    onPass();
  } else {
    onFail();
  }
}

function showPass() {
  console.log("Pass");
}

function showFail() {
  console.log("Fail");
}

checkScore(75, showPass, showFail);
