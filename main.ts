input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . . . #
        # # . # #
        . # # # .
        # # . # #
        # . . . #
        `)
    music.play(music.stringPlayable("A B A - A B A - ", 79), music.PlaybackMode.InBackground)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
