import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


export default function AddToCart() {

    const navigation = useNavigation()
    const toCart = () => {
        navigation.navigate("Cart")
    }
    return (
        <View style={styles.button}>
            <Pressable style={styles.AddCart} onPress={toCart}><MaterialIcons name="add-shopping-cart" size={18} color="black" /></Pressable>

        </View>
    )
}
const styles = StyleSheet.create({
    AddCart: {
        borderRadius: 50,
        borderWidth: 6,
        borderColor: '#1aaa1a',
        backgroundColor: 'white',
        height: 50,
        width: 50,
        alignItems: 'center',
        marginTop: 1,
        padding: 10,
        marginLeft: 5
    },
    button: {
        marginTop: -30,
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 50,
        // alignItems:'center',
    }

})