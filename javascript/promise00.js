const calculateSquare = new Promise((resolve) => {
    const number = 7;

    console.log("게산 시작");

    setTimeout(() => {
        const result = resolve ** 2;
        resolve(result)
    }, 1000);
});

calculateSquare.then((result) => {
    console.log(`계산 결과: ${result}`);
});