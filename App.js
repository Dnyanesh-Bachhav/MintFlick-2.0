// import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Button, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
const width = Dimensions.get("screen").width;
export default function App() {
 
  return (
    <View style={styles.container}>

      <WebView
      style={{borderWidth: 1,width:width}}
      source={{
        uri: "https://v2.mintflick.app/homescreen/home"
      }} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    // marginTop: 
  },
});
