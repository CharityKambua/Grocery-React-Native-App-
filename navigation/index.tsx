/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import OfferScreen from '../screens/OfferScreen';
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen';
import AllCategoriesScreen from '../screens/AllCategoriesScreen';
import MoreScreen from '../screens/MoreScreen';
import AddToCart from '../components/AddToCart';
import FooterBgColor from '../components/FooterBgColor';
import AllCategories from '../screens/AllCategories';
import Popular from '../screens/Popular';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>

        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="AllCategories" component={AllCategories} options={{ title: 'Category', header:()=>null}} />
        <Stack.Screen name="Popular" component={Popular} options={{ header:()=>null}} />
       
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarBackground:()=>(<FooterBgColor/>),
        // tabBarStyle:{height:50, paddingBottom:}
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          header:()=>null,
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color="black" />,
         
        })}
      />
      <BottomTab.Screen
        name="Order"
        component={OrderScreen}
        
        options={{
          title: 'Order',
          header:()=>null,
          tabBarIcon: ({ color }) => <Octicons name="list-unordered" size={24} color="black" />,

        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: 'Cart',
          header:()=>null,
         tabBarButton:()=><AddToCart/>
        }}
      />
      <BottomTab.Screen
        name="Offer"
        component={OfferScreen}
        options={{
          title: 'Offer',
          header:()=>null,
          tabBarIcon: ({ color }) => <MaterialIcons name="local-offer" size={24} color="black" />,
        }}
      />
      <BottomTab.Screen
        name="More"
        component={MoreScreen}
        options={{
          title: 'More',
          header:()=>null,
          tabBarIcon: ({ color }) => <MaterialIcons name="read-more" size={24} color="black" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
