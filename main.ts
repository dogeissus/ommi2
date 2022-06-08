enum RadioMessage {
    thing = 7174,
    Minus1 = 41635,
    Plus1 = 44153,
    message1 = 49434
}
function radio2 (a: number) {
    if (a == 1) {
        radio.sendMessage(RadioMessage.Minus1)
    } else if (a == 0) {
        radio.sendMessage(RadioMessage.thing)
    }
}
function sensor (d: number) {
    let sent2 = 0
    f = x()
    while (sent2 == 0 && f + 500 > x()) {
        sent = 0
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
radio.onReceivedMessage(RadioMessage.thing, function () {
    sensor(1)
})
let sent = 0
let f = 0
let s = 0
radio.setGroup(69)
basic.forever(function () {
    sensor(0)
})
