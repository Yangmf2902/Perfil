import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
export default function App() {
return (
<View style={styles.container}>
<StatusBar barStyle="light-content" backgroundColor="#1f1f1f" />
<View style={styles.card}>
<Image
source={{ uri: 'https://media.tenor.com/Tl-GCU29RucAAAAe/ignorante-sabio.png' }}
style={styles.profileImage}
/>
<Text style={styles.name}>Yan</Text>
<Text style={styles.phrase}>.</Text>
</View>
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'black',
alignItems: 'center',
justifyContent: 'center',
padding: 16,
},
card: {
backgroundColor: '#e4e4e4ff',
borderRadius: 20,
padding: 24,
alignItems: 'center',
shadowColor: '#000',
shadowOpacity: 0.3,
shadowRadius: 10,
elevation: 10,
width: '100%',
maxWidth: 320,
},
profileImage: {
width: 120,
height: 120,

borderRadius: 0,
marginBottom: 16,
borderWidth: 2,
borderColor: '#ffffafff',
},
name: {
fontSize: 24,
fontWeight: 'bold',
color: '#ffffff',
marginBottom: 8,
},
phrase: {
fontSize: 16,
fontStyle: 'italic',
color: '#cccccc',
textAlign: 'center',
},
});