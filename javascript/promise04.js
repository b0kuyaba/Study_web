// then, catch 버전
checkStock("키보드")
.then((product) => {
    return makePayment(product)
})
.then((paymentResult) => {
    return prepareDelivery(paymentResult)
})
.then((deliveryResult) => {
    console.log(deliveryResult)
})
.catch((error) => {
    console.log(`주문 실패 : ${error.message}`)
})

// async, await 버전
async function orderProduct() {
    try {
        const product = await checkStock("키보드");
        const paymentResult = await makePayment(product);
        const deliveryResult = await prepareDelivery(paymentResult);

        console.log(deliveryResult)
    } catch (error) {
        console.log(`주문 실패 : ${error.message}`)
    }
}