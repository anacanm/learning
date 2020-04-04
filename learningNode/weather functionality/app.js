let weather = require('./services/weather')
let chalk = require('chalk')

if (process.argv.length > 2) {

    let location = ``
    for (let i = 2; i < process.argv.length; i++) {
        location += process.argv[i] + " "
    }


    location = location.trim().replace(" ", "%20")
    // console.log(location)

    weather.getWeather(location)

}

else {
    console.log(chalk.black.bgRed("Please input a location"))
}
