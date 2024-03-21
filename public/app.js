// get user's data
function userTime() {
    return new Date().getHours()
}

userTime()
// get user's coordinates
async function getCoordinates() {
    const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [position.coords.latitude, position.coords.longitude]
}


// get user's time
function getMealTime() {
    const timeOfDay = userTime()
    return timeOfDay > 20 ? 'late-night snack' : timeOfDay > 16 ? 'dinner' : timeOfDay > 11 ? 'lunch' : 'breakfast'

}


// helper functions
// check time of day


// build ads
// build ad 1
function buildAd1() {
    const mealTime = getMealTime()
    const content = document.querySelector('.ad1')
    const paragraph = document.createElement('p')
    paragraph.innerHTML = `We've got the best <span>${mealTime}</span> in town`
    content.appendChild(paragraph)

}



// build ad 2
function buildAd2(coordinates){
    const href = `https://www.google.com/maps/search/coffee/@${coordinates[0]},${coordinates[1]},15z`
    let content = document.querySelector('.ad2')
    let inner = document.createElement('p')
    inner.innerHTML = `It's time to try our coffee! <span><a href="${href}" target="_blank">We're this close!</a></span>`
    content.append(inner)

}


// event listeners
// on load, build ads
window.onload = async () => {
    buildAd1()
    const coordinates = await getCoordinates()
    buildAd2(coordinates)

}
