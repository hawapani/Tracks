import React, { useContext } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { Context as LocationContext } from '../context/LocationContext';

const TrackListScreen = ({navigation}) => {
  const { state,fetchTracks } = useContext(LocationContext);

    consolesldkjfs
    
  return <>
    <NavigationEvents onWillFocus={fetchTracks} />
    <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
    <FlatList 
      data={state}
      keyExtractor={(item) => item._id}
      renderItem={({item}) => {
        <TouchableOpacity>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>
                {item.name}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
      }}
    />
  </>
};

const styles = StyleSheet.create({});

export default TrackListScreen;
