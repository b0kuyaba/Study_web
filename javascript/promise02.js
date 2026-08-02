function getLunchMenu(day) {
    return new Promise((resolve, reject) => {
        if (day === "월요일") {
            resolve("돈가스");
        } else if (day === "화요일") {
            resolve("비빔밥");
        } else {
            reject(new Error("등록된 급식 정보 없음"))
        };
    }, 1000);
};

const lunch = getLunchMenu("월요일")

lunch.then((menu) => {
    console.log(`조회한 메뉴: ${menu}`);
}).catch((error) => {
    console.log(`조회 실패: ${error.message}`);
})