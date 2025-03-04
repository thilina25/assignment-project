import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from 'expo-checkbox';
import { Pressable } from 'react-native';


const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked,setIsChecked] = useState(false)
  return (
    
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style = {{flex: 1, marginHorizontal: 22}}>
        <View style={{marginVertical: 22}}>
          <Text style={{ 
            fontSize: 22,
            fontWeight: 'bold',
            marginVertical: 12,
            color: COLORS.black
          }}>
            Hi, Welcome back !
          </Text>

          <Text style={{
          fontSize: 18,
          color: COLORS.black
          }}>Human Resource Management of Ceylon Designers</Text>
        </View>

        <View style={{ marginBottom: 12}}>
          <Text style= {{ 
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8
          }}>Email Address</Text>

          <View style={{
            width: '100%',
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 22
          }}>
            <TextInput placeholder='Enter your email address'
            placeholderTextColor={COLORS.black}
            keyboardType='email-address'
            style={{
              width: '100%',
            }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12}}>
          <Text style= {{ 
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8
          }}>Password</Text>

          <View style={{
            width: '100%',
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 22
          }}>
            <TextInput placeholder='Enter your password'
            placeholderTextColor={COLORS.black}
            secureTextEntry={isPasswordShown}
            style={{
              width: '100%',
            }}
            />

            <TouchableOpacity
              onPress={() =>setIsPasswordShown(!isPasswordShown)} 
              style={{
              position: "absolute",
              right: 12
            }}
            >
              {
                isPasswordShown == true ? (
                  <Ionicons name="eye-off" size={24} color={COLORS.black}/>
                ) : (
                  <Ionicons name="eye" size={24} color={COLORS.black}/>
                )
              }
            </TouchableOpacity>
          </View>
        </View>

        <View style={{
          flexDirection: 'row',
          marginVertical: 6
        }}>
          <Checkbox
          style={{marginRight: 8 }}
          value={isChecked}
          onValueChange={setIsChecked}
          color={isChecked ? COLORS.primary : undefined}
          />

          <Text> Remember Me</Text>
        </View>
        
              
            
            <Button
            title = "Log In"
            filled
            style={{
              marginTop: 18,
              marginBottom: 4
            }}
            onPress={()=>navigation.navigate("Home")}
            />
           



        <View style={{ flexDirection: 'row', alignItems:'center', marginVertical: 20}}>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: COLORS.grey,
                marginHorizontal: 10
              }}
            />
            <Text style={{fontSize: 14}}>or Log in with</Text>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: COLORS.grey,
                marginHorizontal: 10
              }}
            />
        </View>
        <View style = {{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
          <TouchableOpacity
            onPress={() => console.log("pressed")}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10
            }}
          >
            <Image
              source = {require("../assets/FB.png")}
              style = {{
                height: 36,
                width: 36,
                marginRight: 8
              }}
              resizeMode='contain'
            
            />
            <Text>Facebook</Text>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("pressed")}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10
            }}
          >
            <Image
              source = {require("../assets/G.png")}
              style = {{
                height: 36,
                width: 36,
                marginRight: 8
              }}
              resizeMode='contain'
            
            />
            <Text>Google</Text>

          </TouchableOpacity>
          </View>

          <View style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22
          }}>
            <Text style= {{
              fontSize: 16,
              color: COLORS.black
            }}>Don't have an account ?</Text>
            <Pressable
              onPress={()=>navigation.navigate("Signup")}
            >
              <Text style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: "bold",
                marginLeft: 6
              }}>Register</Text>

            </Pressable>

          </View>
      </View>
    </SafeAreaView>
  );
}


export default Login