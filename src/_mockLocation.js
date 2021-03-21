import * as Location from "expo-location"

const tenMetersWithDegrees = 0.0001

const getLocation = increment => {
    return {
        timestamp: 1000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 0,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude:  -122.03121 + increment * tenMetersWithDegrees,
            latitude:  -122.03121 + increment * tenMetersWithDegrees
        }
    }
}

let counter = 0

setInterval(() => {
    Location.EventEmitter.emit("Expo.LocationChanged", {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++
}, 1000)