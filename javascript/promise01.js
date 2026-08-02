function getProductPrice(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name === "") {
                reject(new Error("상품명 입력"))
                return;
            }
            if (name !== "노트북") {
                reject(new Error("상품명 입력"))
                return;
            }
            resolve(1200000)
        }, 1000)
    })
}

getProductPrice("스마트폰").then((price) => {
    console.log(`상품 가격은 ${price}원입니다.`)
}).catch((error) => {
    console.log(`오류: ${error.message}`)
})