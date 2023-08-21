input.onGesture(Gesture.ScreenDown, function () {
    if (模式 == 1) {
        模式2造型 = randint(0, 1)
        if (模式2造型 == 0) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
        if (模式2造型 == 1) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (模式 == 0) {
        模式 += 1
        basic.showString("ROCK-PEPER-SCISSORS")
    }
    if (模式 == 1) {
        模式 += 1
        basic.showString("BLACK AND WHITE")
    }
    if (模式 == 2) {
        模式 += -1
        basic.showString("DICE")
    }
})
input.onButtonPressed(Button.AB, function () {
    if (模式 == 0) {
        basic.showString("FLICK THE YOUR MICRO:BIT!")
    }
    if (模式 == 1) {
        basic.showString("PLACE YOUR MICRO:BIT FACE DOWN!")
    }
    if (模式 == 2) {
        basic.showString("FLICK THE YOUR MICRO:BIT!")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.ThreeG, function () {
    if (模式 == 0) {
        模式1造型 = randint(0, 2)
        if (模式1造型 == 0) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        }
        if (模式1造型 == 1) {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
        }
        if (模式1造型 == 2) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        }
    }
    if (模式 == 2) {
        模式3造型 = randint(0, 2)
        if (模式3造型 == 0) {
            basic.showLeds(`
                . . . # .
                . . . # .
                . . . # .
                . . . # .
                . . . # .
                `)
        }
        if (模式3造型 == 1) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . # # # .
                . # . . .
                . # # # .
                `)
        }
        if (模式3造型 == 2) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . # # # .
                . . . # .
                . # # # .
                `)
        }
        if (模式3造型 == 3) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . # # # .
                . . . # .
                . . . # .
                `)
        }
        if (模式3造型 == 4) {
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . . . # .
                . # # # .
                `)
        }
        if (模式3造型 == 5) {
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . # . # .
                . # # # .
                `)
        }
    }
})
let 模式3造型 = 0
let 模式2造型 = 0
let 模式1造型 = 0
let 模式 = 0
模式 = 0
模式1造型 = 0
模式2造型 = 0
if (模式 == 0) {
    basic.showString("ROCK-PEPER-SCISSORS")
}
if (模式 == 1) {
    basic.showString("BLACK AND WHITE")
}
if (模式 == 2) {
    basic.showString("DICE")
}
