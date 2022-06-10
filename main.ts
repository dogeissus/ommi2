enum RadioMessage {
    thing = 7174,
    Minus1 = 41635,
    Plus1 = 44153,
    message1 = 49434
}
function radio2 (a: number) {
    if (a == 1) {
        radio.sendMessage(RadioMessage.Plus1)
        active = 0
    } else if (a == 0) {
        radio.sendMessage(RadioMessage.thing)
    }
}
radio.onReceivedMessage(RadioMessage.thing, function () {
    active = 1
    sent = 0
    while (sent == 0 && f + 500 > x()) {
        if (_1() == 1) {
            radio2(1)
            sent = 1
        }
    }
})
function x () {
    return input.runningTime()
}
function pin0 () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        return 1
    }
    return 0
}
function _1 () {
    f = x()
    while (f + 500 > x()) {
        if (pin0() == 1) {
            led.plot(0, 1)
            return 1
        }
    }
    basic.clearScreen()
    return 0
}
let f = 0
let sent = 0
let active = 0
active = 1
radio.setGroup(69)
basic.forever(function () {
    if (active == 0) {
        if (_1() == 1) {
            radio2(0)
        }
    }
})
