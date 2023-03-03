import React, {useEffect, useRef} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {StyleSheet, Image} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import {boringImg} from '../../assets';

const coords = [
  {
    latitude: -22.6325328,
    longitude: -46.6702308,
    title: 'FIAP',
    description: 'Educação que transforma!',
    image:
      'https://freepngimg.com/thumb/mario/20698-7-mario-transparent-background.png',
  },
  {
    latitude: -23.5640843,
    longitude: -46.6545752,
    title: 'Você',
    description: 'Você está aqui',
    image: 'https://i.stack.imgur.com/ILTQq.png',
  },
];

const GOOGLE_MAPS_APIKEY = 'AIzaSyD6X1zKZfMpfE4OwqO7qzjWrdCR3NPqmQA';

export default function Maps() {
  const mapRef = useRef<MapView>(null);

  function fitPadding() {
    mapRef.current?.fitToCoordinates([coords[0], coords[1]], {
      edgePadding: {top: 100, right: 100, bottom: 100, left: 100},
      animated: true,
    });
  }

  useEffect(() => {
    fitPadding();
  }, []);

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: -23.5640843,
        longitude: -46.6523865,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {coords.map((coord, index) => (
        <Marker
          key={index}
          coordinate={{latitude: coord.latitude, longitude: coord.longitude}}
          title={coord.title}
          description={coord.description}>
          <Image
            source={{
              uri: coord.image,
            }}
            style={{width: 30, height: 45}}
          />
        </Marker>
      ))}
      <MapViewDirections
        origin={{latitute: coords[0].latitude, longitude: coords[0].longitude}}
        destination={{
          latitute: coords[1].latitude,
          longitude: coords[1].longitude,
        }}
        apikey={GOOGLE_MAPS_APIKEY}
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
