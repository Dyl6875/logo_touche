input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Rabbit)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    basic.showIcon(IconNames.Skull)
})
