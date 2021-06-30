import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class BookTransactionScreen extends React.Component{

constructor(){
 super()
 this.state={
     hasCameraPermissions:null ,
     scanned:false,
     scannedData: '',
     buttonState: 'normal',
 }
    }

    getCameraPermissions = async ()=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        
        
        this.setState({
            /*status === 'granted' is true if user has granted the camera permission
            status === 'granted' is false if user has not granted the camera permission*/
            hasCameraPermissions: status === "granted",
            buttonState:'clicked',
 
        });
    }
render(){
const hasCameraPermissions= this.state.hasCameraPermissions;
const scanned= this.state.scanned;
const buttonState= this.state.buttonState;

if(buttonState === 'clicked' && hasCameraPermissions){

    return(
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned }
        style={StyleSheet.absoluteFillObject}                    
        />
    )
}
else if (buttonState === 'normal'){
    return(
        <View style={styles.container}>
            <Text style={styles.displayText}>
            {hasCameraPermissions === true ? this.state.scannedData : "REQUEST_CAMERA_PERMISSION"}
                
            </Text>
            <TouchableOpacity 
            onPress={this.getCameraPermissions}
            style={styles.scanbutton} >
                <Text style={styles.displayText}>Scan QR Code</Text>
            </TouchableOpacity>
    
        </View>
            
        )
}
   
}
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'black',
    },

    displayText:{
        fontSize:20,
        color:'white',
        TextDecoderLine: 'underline',
        fontStyle: 'italic',      
    },
    
    scanbutton:{
        backgroundColor:'green',
        padding:15,
        margin:15,

    }


    
})