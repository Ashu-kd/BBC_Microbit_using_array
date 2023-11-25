input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    even.reverse()
})
input.onButtonPressed(Button.B, function () {
    if (odd[0] == 1) {
        addition()
    }
})
function addition () {
    sum = odd[0] + even[0]
    return sum
}
let sum = 0
let even: number[] = []
let odd: number[] = []
odd = [
1,
3,
5,
7,
9
]
even = [
2,
4,
6,
8,
10
]
basic.forever(function () {
    if (even[0] == 2) {
        basic.showIcon(IconNames.SmallDiamond)
    }
    serial.writeValue("sum", sum)
})
