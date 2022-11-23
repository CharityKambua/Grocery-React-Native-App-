import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Navigation from '../navigation'
import { useNavigation } from '@react-navigation/native'

export default function CategoryComponents() {
    const navigation = useNavigation()
    const toAllCategories = () => {
        navigation.navigate("AllCategories")
    }
    return (
        <View style={styles.categoryContainer}>
            <View style={styles.categoryText}>
                <Text style={{ fontSize: 17, fontWeight:'bold'}}>Category</Text>
                <Pressable onPress={toAllCategories}><Text style={{ fontSize: 17, fontWeight: 'bold', color: 'green' }}>See All</Text></Pressable>

            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <View style={styles.imageCategory}>
                    <View>
                        <View style={styles.singleImage}>
                            <Image
                                style={styles.imageBanner}
                                source={require("../assets/images/watermelon.png")}
                            /></View>

                        <Text style={styles.textImage}>Vegetables</Text>
                    </View>
                    <View>
                        <View style={styles.singleImage}>
                            <Image
                                style={styles.imageBanner}
                                source={require("../assets/images/banana.png")}
                            /></View>

                        <Text style={styles.textImage}>Fruits</Text>
                    </View>
                    <View>
                        <View style={styles.singleImage}>
                            <Image
                                style={styles.imageBanner}
                                source={require("../assets/images/passio.png")}
                            /></View>

                        <Text style={styles.textImage}>Meat</Text>
                    </View>
                    <View>
                        <View style={styles.singleImage}>
                            <Image
                                style={styles.imageBanner}
                                source={require("../assets/images/orange.png")}
                            /></View>

                        <Text style={styles.textImage}>Cereals</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    categoryContainer: {
        borderRadius: 30,
        // borderColor: ""2
        // borderWidth: ,
        backgroundColor: 'white',
        paddingBottom: 20,
        paddingLeft: 10,
    },
    categoryText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    imageCategory:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',


    },
    textImage: {
        textAlign: 'center',

    },
    imageBanner: {
        height: 90,
        width: 90,
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

    }
});