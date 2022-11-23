import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions, Image, ScrollView, Pressable } from 'react-native';
const { height, width } = Dimensions.get("window")
const DATA = [
  {
    id: '1',
    imagePath: require("../assets/images/vegetables.jpg"),
    title: 'Fruits',
  },
  {
    id: '2',
    imagePath: require("../assets/images/vegetables2.png"),
    title: 'vegetables',

  },
  {
    id: '3',
    imagePath: require("../assets/images/vegetables2.png"),
    title: 'Meat'
  },
];

const Item = ({ imagePath, title, }) => (
  <View>
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}> </Text>
    </View>
    <View style={styles.AllCategoriesBody}>
      <View style={styles.item}>
        <Image style={styles.imageSize} source={imagePath} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  </View>
);


const Popular = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} imagePath={item.imagePath} />
  );
  const navigation = useNavigation()
  const toHome = () =>{navigation.navigate('Home') }

  return (
    <View>
      <View style={{ height: 20, backgroundColor: 'darkgreen' }} />
      <View style={styles.CategoryContainer}>
      <View
        style={{
          height: 60,
          backgroundColor: 'green',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>

        <Pressable
          onPress={toHome}>
          <AntDesign name="arrowleft" size={24} color="black" /></Pressable>
        <View>
          <Text style={{
            fontSize: 24,
            fontWeight: 'bold',
            fontStyle: 'italics',
            marginRight: 150
          }}> Popular</Text>
        </View>
      </View>
      <View style={styles.midBody}>
        <View style={styles.container}>
          <FlatList
            numColumns={3}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
    </View>
    </View>
    </View>
  );

}

const styles =StyleSheet.create({
  
  midBody:{
    backgroundColor:'#ddd',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height:'100%'
   },
   CategoryContainer:{
    backgroundColor:'green',
    height:'100%',
  },
    
  container: {
    // flex: 8,
    // borderRadius: 30,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    height:'100%'

  },
  item: {
    //  backgroundColor: '#f9c2ff',
    padding: 2,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    textAlign: 'center',

  },
  imageSize: {
    flex: 1,
    width: width / 5,
    backgroundColor: '#c0edcd',
    // opacity: 0.8,
    height: 70,
    padding: 3,
    // marginRight: 5,
    // marginLeft: 5,
    borderRadius: 9,
    resizeMode:'contain'
  },
  AllCategoriesBody: {
    backgroundColor: 'f9c2ff',
    borderRadius: 30,
  }
});

export default Popular;