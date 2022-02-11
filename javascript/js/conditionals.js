var isActive = false
var message = ''

if (isActive) {
    message = 'Active'
} else {
    message = 'Not Active'
}

console.log(message)

var trafficLigth = 'yellow'

if (trafficLigth == 'green') {
    message = 'Pass'
} else if (trafficLigth == 'yellow') {
    message = 'Caution'
} else {
    message = 'Stop'
}

console.log(message)

switch(trafficLigth) {
    case 'green':
        message = 'Pass'
    break
    case 'yellow':
        message = 'Caution'
    break
    default:
        message = 'Stop'
    break
}

console.log(message)