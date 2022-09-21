radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == Rock_Index) {
        if (My_hand == Paper_Index) {
            basic.showString("W")
            radio.sendString("L")
            Score += 1
        } else if (My_hand == Rock_Index) {
            basic.showString("T")
            radio.sendString("T")
        } else {
            basic.showString("L")
            radio.sendString("W")
        }
    }
    if (receivedNumber == Paper_Index) {
        if (My_hand == Scissor_index) {
            basic.showString("W")
            radio.sendString("L")
            Score += 1
        } else if (My_hand == Paper_Index) {
            basic.showString("T")
            radio.sendString("T")
        } else {
            basic.showString("L")
            radio.sendString("W")
        }
    }
    if (receivedNumber == Scissor_index) {
        if (My_hand == Rock_Index) {
            basic.showString("W")
            radio.sendString("L")
            Score += 1
        } else if (My_hand == Scissor_index) {
            basic.showString("T")
            radio.sendString("T")
        } else {
            basic.showString("L")
            radio.sendString("W")
        }
    }
})
input.onButtonPressed(Button.A, function () {
    My_hand += -1
    Choose_shape()
    if (My_hand < 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
function Choose_shape () {
    if (My_hand == Scissor_index) {
        Scissor_Image.showImage(0)
    }
    if (My_hand == Rock_Index) {
        Rock_Image.showImage(0)
    }
    if (My_hand == Paper_Index) {
        Paper_Image.showImage(0)
    }
}
input.onButtonPressed(Button.B, function () {
    My_hand += 1
    Choose_shape()
    if (My_hand > 3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(My_hand)
})
let My_hand = 0
let Scissor_Image: Image = null
let Rock_Image: Image = null
let Paper_Image: Image = null
let Rock_Index = 0
let Paper_Index = 0
let Scissor_index = 0
Scissor_index = 1
Paper_Index = 2
Rock_Index = 3
let Score = 0
Paper_Image = images.createImage(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
Rock_Image = images.createImage(`
    . . . . .
    . # # # .
    # # # # #
    # # # # #
    . . . . .
    `)
Scissor_Image = images.createImage(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
basic.forever(function () {
    if (Score >= 2) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        basic.showString("You Win")
    }
    basic.clearScreen()
})
