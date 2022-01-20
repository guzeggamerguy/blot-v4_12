input.onGesture(Gesture.EightG, function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("Errm.. Glug-y?")
})
input.onButtonPressed(Button.A, function () {
    music.setVolume(255)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("I'm hungry! [6G] for toast!")
})
input.onGesture(Gesture.SixG, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showString("Crunchy!")
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . # . .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . . # . .
        . # . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    music.setVolume(121)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(5)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("I'm sick! [3G] for bucket")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString("I'm thusty! (Need water!) [8G] for water!")
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . . .
        . # # # .
        `)
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showLeds(`
        . . . . .
        # . . . #
        # # . . #
        # # . # #
        # # # # #
        `)
    basic.showString("Yuck!")
})
basic.forever(function () {
    music.playMelody("C5 A F D B G F C ", 120)
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . . .
        . # # # .
        `)
})
