import { View, Text, Image, SafeAreaView, StyleSheet, StatusBar, ScrollView, TextInput } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ImageBackground } from 'react-native';
import { FlatList } from 'react-native';


const Home = ({navigation}) => {
  
  const categoryIcons = [
    <Icon name = "person" size={25} color={COLORS.primary}/>,
    <Icon name = "calendar-today" size={25} color={COLORS.primary}/>,
    <Icon name = "near-me" size={25} color={COLORS.primary}/>,
    <Icon name = "place" size={25} color={COLORS.primary}/>,
  ];
  const ListCategories = () => {
    return (
    <View style={style.categoryContainer}>
      {categoryIcons.map((icon, index) => (
        <View key={index} style = {style.iconContainer}>{icon}</View>
      ))}

    </View>
  )
}
  const data = [
    { id: '1', image: require('../assets/em.png') },
    { id: '2', image: require('../assets/1.png') },
    { id: '3', image: require('../assets/4.png') },
 
  ];

  const renderImageItem = ({ item }) => (
    <Image source={item.image} style={style.image} />
  );

  return (
    <SafeAreaView 
    style={{
      flex:1,
      backgroundColor: COLORS.white
    }}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary}/>
      <View style={style.header}>
        <Icon name="sort" size={28} color={COLORS.white} />
        <Icon name="notifications-none" size={28} color={COLORS.white} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style = {{
          backgroundColor: COLORS.primary, 
          height: 120,
          paddingHorizontal: 20,
          }}>
            <View>
            <Text style = {style.headerTitle} >Ceylon Desingers</Text>
            <Text style = {style.headerTitle2} >Human Resource Management</Text>
            <View style={style.inputContainer}>
              <Icon name = 'search' size={28} />
              <TextInput placeholder = "Search Here.." style={{
                color:COLORS.grey
              }} 
                />


            </View>
          </View>
        </View>
        <ListCategories />
        <Text style={style.sectionTitle}>Employee Management</Text>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderImageItem}
        />


      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary
  },
  headerTitle:{
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 24,
  },
  headerTitle2:{
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize:20
  },
  inputContainer: {
    height: 60,
    width: '100%',
    backgroundColor: COLORS.white,
    elevation: 12,
    borderRadius: 10,
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
  }
});
export default Home;