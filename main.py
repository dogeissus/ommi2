enum RadioMessage {
    message1 = 49434,
    Plus1 = 44153,
    Minus1 = 41635
}
function thing1 () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        return 1
    }
    return 0
}
function thing0 () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        return 1
    }
    return 0
}
function x () {
    return input.runningTime()
}
radio.setGroup(218)
basic.forever(function () {
    let s: number;
if (thing0() == 1) {
        s = x()
        if (thing1() == 1 && s + 500 > x()) {
        	
        }
    }
    if (thing1() == 1) {
        s = x()
        if (thing0() == 1 && s + 500 > x()) {
        	
        }
    }
})
