import React, { useState, useEffect } from 'react'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'

export default (callback) => {
    const [err, setErr] = useState(null)

    const startWatching = async () => {
        try {
            let {status} =  await requestPermissionsAsync()
            if(status !== 'granted'){
               return  setErr("Please Enable Tracking")
            }
            watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 5000,
                distanceInterval: 10,
                
            }, callback /* (location) => {
                // addLocation(location)
                callback
                console.log("loc>>> ", location); 
             } */
            ) 
        } catch (error) {
            setErr(error)
        }
    }

    useEffect(() => {
        startWatching()
    }, [])

    return [err]
}