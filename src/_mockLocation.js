import * as Location from "expo-location"

const tenMetersWithDegrees = 0.0001

const getLocation = increment => {
    return {
        timestamp: 1000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 1,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude:   3.205999 + increment * tenMetersWithDegrees,
            latitude:  6.315999 + increment * tenMetersWithDegrees
        }
    }
}

let counter = 0

setInterval(() => {
    Location.EventEmitter.emit("Expo.LocationChanged", {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    console.log("location mock??? ");
    counter++
}, 1000)
