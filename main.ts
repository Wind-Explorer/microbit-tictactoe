let e = 0
input.onButtonPressed(Button.A, function () {
    e = 1
})
input.onButtonPressed(Button.B, function () {
    e = 0
})
basic.forever(function () {
    while (e == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
