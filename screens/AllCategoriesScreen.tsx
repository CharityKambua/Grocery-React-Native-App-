import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

export default function AllCategoriesScreen() {
    return (
        <View style={Styles.AllCategories}>
            <View>
                <View style={Styles.singleImage}>
                    <Image
                        style={Styles.imageBanner}
                        source={require("../assets/images/watermelon.png")}
                    /></View>

                <Text style={Styles.textImage}>Vegetables</Text>
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    AllCategories: {
        marginTop: 10,
    },
    singleImage: {
        backgroundColor: '#c0edcd',
        opacity: 0.8,
        height: 112,
        padding: 10,
        width: 112,
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 10,
    },
    textImage: {
        textAlign: 'center',

    },
    imageBanner: {
        height: 90,
        width: 90,
    },
});