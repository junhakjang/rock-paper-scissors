input.onButtonPressed(Button.A, function () {
    My_hand += -1
    Choose_shape()
    if (My_hand < 1) {
        basic.showString("Too low")
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
radio.onReceivedString(function (receivedString) {
	
})
input.onButtonPressed(Button.B, function () {
    My_hand += 1
    Choose_shape()
    if (My_hand > 3) {
        basic.showString("Too High ")
    }
})
input.onGesture(Gesture.Shake, function () {
	
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
    radio.sendNumber(My_hand)
})
