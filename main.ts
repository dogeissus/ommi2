enum RadioMessage {
    thing = 7174,
    Minus1 = 41635,
    Plus1 = 44153,
    message1 = 49434
}
radio.onReceivedMessage(RadioMessage.thing, function () {
    sensor(1)
})
function radio2 (a: number) {
    if (a == 1) {
        radio.sendMessage(RadioMessage.Minus1)
    } else if (a == 0) {
        radio.sendMessage(RadioMessage.thing)
    }
}
function sensor (d: number) {
    while (sent == 0) {
        if (pin0() == 1) {
            led.plot(0, 1)
            sent = 1
            radio2(d)
        }
    }
    basic.clearScreen()
}
function x () {
    return input.runningTime()
}
function pin0 () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        return 1
    }
    return 0
}
let sent = 0
let s = 0
radio.setGroup(69420)
basic.forever(function () {
    sensor(0)
})
