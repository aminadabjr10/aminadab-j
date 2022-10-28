let strip = neopixel.create(DigitalPin.P1, 10, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.shift(1)
    strip.show()
})
