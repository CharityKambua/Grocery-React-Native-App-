import { View, Text, ScrollView, Image, StyleSheet,Pressable  } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PopularComponent() {
    const navigation= useNavigation()
    const toPopular = () => {navigation.navigate("Popular")}
  return (
    <View style={styles.popularContainer}>
    <View style={styles.popularText}>
        <Text style={{fontSize:17,fontWeight:'bold'}} >Popular</Text>
        <Pressable onPress={toPopular}>
        <Text style={{fontSize:17,fontWeight:'bold',color:'green'}}>See All</Text></Pressable>
    </View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <View style={styles.imagePopular}>
            <View>
                <View style={styles.singleImage}>
                     <Image
                    style={styles.imageBanner}
                    source={require("../assets/images/vegetables2.png")}
                /></View>
            </View>
            <View>
                <View style={styles.singleImage}>
                     <Image
                    style={styles.imageBanner}
                    source={require("../assets/images/vegetables.jpg")}
                /></View>
            </View>

        </View>
    </ScrollView>
</View>
)
}
const styles = StyleSheet.create({
popularContainer:{
borderRadius:30,
// borderColor: ""2
// borderWidth: ,
backgroundColor:'white',
paddingBottom:20,
paddingLeft:10,
},
popularText: {
flexDirection: 'row',
justifyContent: 'space-between',
padding: 20,
},
imagePopular:
{
flexDirection: 'row',
justifyContent: 'space-between',


},
imageBanner: {
height: 190,
width: 190,
borderRadius:19,
},
singleImage:{
backgroundColor: 'lightgreen',
height: 200,
padding:5,
width: 200,
marginRight:5,
marginLeft:5,
borderRadius:20,

}
});