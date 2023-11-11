import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
const Home = () => {
    return (
        <View style={styles.container}>
            {/* Header Text */}
            <View style={styles.headerContainer}>
                <Ionicons name="location-outline" size={35} color="#191970" style={{ marginTop: 120 }} />
                <View>
                    <Text style={{ fontSize: 25, fontWeight: "bold", color: "#191970", marginTop: 120 }}>Denmark</Text>
                    <Text style={{ fontSize: 11, marginLeft: 10, color: "#191970" }}>Sunday, 12 Sep</Text>
                </View>
            </View>
            {/* image section */}
            <View style={styles.imageContainer}>
                <Image source={require('./assets/partlycloudy.png')} style={{ width: 210, height: 210, marginTop: 50, marginLeft: 30 }}></Image>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginTop: 80, marginLeft: 20, fontSize: 50, color: "#fff", fontWeight: "bold" }}>23</Text>
                    <MaterialCommunityIcons name="temperature-celsius" size={24} color="black" style={{ marginTop: 90, fontSize: 55, color: "#fff" }} />
                </View>
            </View>
            {/* hummidity section */}
            <View style={{ marginLeft: 260, marginTop: -105 }}>
                <View style={{flexDirection:"row"}}>
                <Text style={{color:"#191970",}}>Feels Like 26</Text>
                <MaterialCommunityIcons name="temperature-celsius" size={20} color="#191970"  />
                </View>
                <View style={{flexDirection:"row" , marginTop:10}}>
                <Fontisto name="wind" size={20} color="#191970" />
                <Text style={{color:"#191970",marginLeft:15,fontSize:15}}>8Km/h</Text>
                </View>
            </View>
          <View>
            <Text style={{marginTop:50,marginLeft:100,fontSize:25,fontWeight:"bold",color:"#191970"}}>Clouds</Text>
          </View>
           
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#87cefa',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 120,
    },
    imageContainer: {
        flexDirection: 'row',
    }
});

export default Home;
