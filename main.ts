enum RadioMessage {
    Minus1 = 41635,
    Plus1 = 44153,
    message1 = 49434
}
function radio2 (a: number) {
    if (a == 1) {
        radio.sendMessage(RadioMessage.Minus1)
    }
}
function pin2 () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        return 1
    }
    return 0
}
function pin3 () {
    if (pins.digitalReadPin(DigitalPin.P3) == 1) {
        return 1
    }
    return 0
}
function pin1 () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        return 1
    }
    return 0
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
let s = 0
radio.setGroup(69420)
basic.forever(function () {
    let sent = 0
    while (sent == 0) {
        if (pin1() == 1) {
            pins.digitalWritePin(DigitalPin.P3, 1)
            pause(100)
            pins.digitalWritePin(DigitalPin.P3, 0)
            led.plot(0, 1)
            sent = 1
        }
    }
    basic.clearScreen()
    pause(500)
})
basic.forever(function () {
    if (pin2() == 1) {
        radio2(1)
    }
})
