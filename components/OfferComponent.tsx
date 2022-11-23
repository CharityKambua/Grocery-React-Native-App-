import { View, Text, Image, StyleSheet, ScrollView,Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function OfferComponent() {
    const navigation = useNavigation()
    const toOffer =() =>{navigation.navigate('Offer')}
    return (
        <View style={styles.offerContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.offerView}>
                    <Image style={styles.imagesize} source={require('../assets/images/fruits3.png')} />
                    <View style={styles.textOffer}>
                        <Text style={{ color: 'darkgreen', fontSize: 28, fontWeight: 'bold' }}>30% Discount</Text>
                        <Text>Order any food from app</Text>
                        <Text>and get the Discount</Text>
                        < Pressable onPress={(toOffer)}><Text style={styles.textOrderNow}>See More</Text></Pressable>
                    </View>
                </View>
                <View style={styles.offerView2}>
                    <Image style={styles.imagesize2} source={require('../assets/images/fruits4.png')} />
                    <View style={styles.textOffer}>
                        <Text style={{ color: 'red', fontSize: 26, fontWeight: 'bold' }}>50% Discount</Text>
                        <Text>Order any food from app</Text>
                        <Text>and get the Discount</Text>
                        < Pressable onPress={(toOffer)}><Text style={styles.textOrderNow}>See More</Text></Pressable>
                    </View>
                </View>
                <View style={styles.offerView3}>
                    <Image style={styles.imagesize2} source={require('../assets/images/vegetables3.png')} />
                    <View style={styles.textOffer}>
                        <Text style={{ color: 'yellow', fontSize: 26, fontWeight: 'bold' }}>50% Discount</Text>
                        <Text>Order any food from app</Text>
                        <Text>and get the Discount</Text>
                        < Pressable onPress={(toOffer)}><Text style={styles.textOrderNow}>See More</Text></Pressable>
                    </View>
                </View>
                <View style={styles.offerView4}>
                    <Image style={styles.imagesize2} source={require('../assets/images/vegetables4.png')} />
                    <View style={styles.textOffer}>
                        <Text style={{ color: 'blue', fontSize: 26, fontWeight: 'bold' }}>50% Discount</Text>
                        <Text>Order any food from app</Text>
                        <Text>and get the Discount</Text>
                        <Text style={styles.textOrderNow}>Order Now</Text>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
    offerContainer: {
        flexDirection: 'row',
    },
    offerView: {
        flexDirection: 'row',
        backgroundColor: '#86e3a0',
        width: 310,
        borderRadius: 30,
        margin: 20,
        marginLeft: 5,
        padding: 10,
        paddingLeft: 10,
    },
    textOrderNow: {
        textAlign: 'center',
        height: 30,
        width:100,
        elevation: 0,
        backgroundColor: 'green',
        borderRadius: 15,
        // bottom:1,
        marginTop:15,
        
    },
    imagesize: {
        height: 150,
        width: 150,
    },
    imagesize2: {
        height: 150,
        width: 150,
        padding: 10,
    },
    textOffer: {
        justifyContent: 'center',

    },
    offerView2: {
        flexDirection: 'row',
        backgroundColor: '#92E3A9',
        width: 300,
        borderRadius: 30,
        margin: 20,
        padding: 10,
    },
    offerView3: {
        flexDirection: 'row',
        backgroundColor: '#d1d16f',
        width: 300,
        borderRadius: 30,
        margin: 20,
        padding: 10,
    },
    offerView4: {
        flexDirection: 'row',
        backgroundColor: '#64e1e3',
        width: 300,
        borderRadius: 30,
        margin: 20,
        padding: 10,
    }

});