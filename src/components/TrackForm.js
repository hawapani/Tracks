import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
    const {
        state: { name, recording, locations}, 
        changeName,
        startRecording, 
        stopRecording
    } = useContext(LocationContext);

    console.log(locations.length);

    return (
        <>
            <Spacer />
            <Input value={name} onChangeText={changeName} placeholder="Input Track Name" />
            <Spacer>
                { recording
                    ? <Button title={"Stop"} onPress={stopRecording}/>
                    : <Button title={"Start Recording"} onPress={startRecording}/>
                }
            </Spacer>
            <Spacer>
                { !recording && locations.length
                    ? <Button title={"Save recording"} />
                    : null
                }
            </Spacer>
        </>
    );
};

export default TrackForm;