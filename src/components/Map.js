import React from "react";
import { Text, StyleSheet } from "react-native";
import MapView, {Polyline} from 'react-native-maps';

const Map = () => {
    let points = [];
    for (let i =0; i<20; i++) {
        points.push({
            latitude: 28.449917 + i * 0.001,
            longitude: 77.080395 + i * 0.001
        })
    }

    return <>
        <MapView 
            style={styles.map} 
            initialRegion={{
                latitude: 28.119917,
                longitude: 77.110395,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            <Polyline coordinates={points}/>
        </MapView>
    </>
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;