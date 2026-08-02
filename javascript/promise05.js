function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("데이터 가져오기 성공")
        }, 2000)
    })
}

async function showData() {
    console.log("데이터를 가져오는 중...")
    const result = await fetchData();
    console.log(result)
}

showData();