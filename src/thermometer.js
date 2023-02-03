import dataRequest from "./getData.js"
import axios from 'axios'
import React, { useEffect, useState } from "react"
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


// const thermometer = () => {
// getData().then(data => {
//     console.log(data)
// })
// }


function Thermometer() {
    const [thermometer, setThermometer] = useState({ temp: 0, humi: 0 })

    useEffect(() => {
        const timer = setInterval(dataRequest.get()
        .then(res => {
            setThermometer({ temp: res.data.temperature, humi: res.data.humidity })
        })
        .catch(e => console.log(e)),10000)

        
        return (timer) => {
            clearInterval(timer)
        }
    },[thermometer])

    return (
        <View>
            <Text>temp:{thermometer.temp}</Text>
            <Text>humi:{thermometer.humi}</Text>
        </View>
    )

}

export default Thermometer 