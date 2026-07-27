function getGameScore(score) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (score >= 80) {
                resolve(80);
            } else {
                reject(0);
            }
        }, 1000);
    });
};

getGameScore(80).then((score) => {
    console.log(`기본 점수: ${score}점`);

    const bonusScore = score + 20;
    console.log(`보너스 적용 : ${bonusScore}점`);

    return bonusScore;
}).then((finishScore) => {
    console.log(`최종 점수 : ${finishScore}점`);
}).catch(() => {
    console.log(error.message);
});