// 1. თანმიმდევრობა: 1, 5, 4, 3, 2

console.log("1")
setTimeout(() => console.log("2"), 100)
setTimeout(() => console.log("3"), 0)
Promise.resolve().then(() => console.log("4"))
console.log("5")
// output: 1 → 5 → 4 → 3 → 2


// 2. თანმიმდევრობა: 1, 5, 3, 2, 4

console.log("1")
setTimeout(() => console.log("2"), 0)
Promise.resolve().then(() => {
    console.log("3")
    setTimeout(() => console.log("4"), 0)
})
console.log("5")
// output: 1 → 5 → 3 → 2 → 4


// 3. sleep ფუნქცია
// Promise-ს დავაბრუნებთ, setTimeout-ი resolve-ს გამოიძახებს
// await-ი ელოდება სანამ Promise resolve გახდება
function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms)
    })
}

async function main() {
    console.log("დავიძინე...")
    await sleep(1000)
    console.log("გავიღვიძე!")
}
//main()


// 4. ყოველ წამში random რიცხვი, გაჩერება როდესაც პარამეტრს დაემთხვევა
async function findNumber(target) {
    while (true) {
        let random = Math.floor(Math.random() * 20) + 1
        console.log("random:", random)
        if (random === target) {
            console.log("დაემთხვა! გაჩერება.")
            break
        }
        await sleep(1000)
    }
}
//findNumber(7)


// 5. რიცხვიდან 0-მდე დათვლა მოცემული ინტერვალით
function countdown(num, ms) {
    let current = num
    let interval = setInterval(function() {
        console.log(current)
        if (current === 0) {
            clearInterval(interval)
        }
        current--
    }, ms)
}
//countdown(5, 1000)