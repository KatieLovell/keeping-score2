input.onButtonPressed(Button.A, function () {
    Keefe += 1
    basic.showString("Keefe")
    basic.showNumber(Keefe)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    Dex += 1
    basic.showString("Dex")
    basic.showNumber(Dex)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Fitz += 1
    basic.showString("Fitz")
    basic.showNumber(Fitz)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Keefe)
    basic.showString("Keefe")
    basic.showNumber(Fitz)
    basic.showString("Fitz")
    basic.showNumber(Dex)
    basic.showString("Dex")
    basic.clearScreen()
})
let Dex = 0
let Fitz = 0
let Keefe = 0
basic.showString("Keefe vs Fitz")
Keefe = 0
Fitz = 0
Dex = 0
