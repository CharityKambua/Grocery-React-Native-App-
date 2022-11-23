import { AntDesign, Feather } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, TextInput } from 'react-native';
import CategoryComponents from '../components/CategoryComponents';
import EditScreenInfo from '../components/EditScreenInfo';
import OfferComponent from '../components/OfferComponent';
import PopularComponent from '../components/PopularComponent';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topView} />
        <View style={styles.Navbar}>
          <View style={{ backgroundColor: '#1aaa1a' }}>
            <Text style={styles.navbarText} >Hey Kate</Text>
            <Text style={{ color: 'white' }}>Lets Search Your Grocery Food</Text>
          </View>

          <Image style={styles.Imagesize}
            source={require("../assets/images/profiles.png")}

          />

        </View>
        <View style={{ backgroundColor: '#1aaa1a', paddingBottom: 20 }}>
          <View style={styles.searchBar}>
            <AntDesign
              name="search1"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
            <TextInput style={styles.input} placeholder="Search your daily grocery food" />
          </View>
        </View>
        <View style={styles.externalComponents}>
          <CategoryComponents />
          <OfferComponent />
          <PopularComponent/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  topView:
  {
    backgroundColor: 'darkgreen',
    width: '100%',
    height: '4%',
  },
  Navbar:
  {
    backgroundColor: '#1aaa1a',
    width: '100%',
    height: '12%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,

  },
  Imagesize: {
    height: 55,
    width: 55,
    borderRadius: 50,
    marginTop: 20,
    // marginLeft: 80,
  },
  navbarText: {
    marginTop: 20,
    color: 'white',
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },

  searchBar: {
    margin: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    // width: "95%",
    height: 45,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    



  },
  searchContainer: {
    backgroundColor: "#1aaa1a",

  },
  externalComponents:
  {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: '100%',
    backgroundColor: '#ddd',
    padding: 15,

  }
});
