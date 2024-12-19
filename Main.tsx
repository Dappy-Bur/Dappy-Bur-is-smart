import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { BaseTouchableOpacity } from '@/components/BaseBTI'
import { useRouter } from "expo-router";
import { useState } from "react";
import Slider from '@react-native-community/slider';
import Switcher from "@/components/Switcher";

export default function Main() {
  const {push} = useRouter()
  
const [age, setAge] = useState(30)
const [weight, setWeight] = useState(78)
  const HandlePressButton = () => {
    const resultBMI = calculateBMI(age, weight, height, isMale)
    push({
      pathname:'/Second',
      params: {resultBmi: resultBMI}
      
    })}
    

  const [height, setHeight] = useState(172)
  const [isMale, setIsMale] = useState(false)

//кнопки плюс и минус возраста
  const HandlePressMinusAge = () => {setAge((e) => {return e>= 2 ? e - 1 : e})}
  const HandlePressPlusAge = () => {setAge((e) => {return e<= 98 ? e + 1 : e})}

//кнопки плюс и минус веса  
  const HandlePressMinusWeight = () => {setWeight((o) =>{return o>= 25 ? o - 1 : o})}
  const HandlePressPlusWeight = () => {setWeight((o) =>{return o<= 595 ? o + 1 : o})}


const isAgeLess18 = age <= 18
const isAgeMore100 = age >= 99
const isWeightLess100 = weight <= 25
const isWeightMore230 = weight >= 595
    return (
      <View style={styles.container}>
         <Text style={styles.NameMain}>Калькулейтор BMI</Text>
          <View style={{flexDirection:"row",gap:21,top:50}}>

            <View // левая кнопка
            >
          <View style={{top:20}}>    
        <Image style={{height: 260, width:153}}
        source={require('./../assets/images/Age-Sprite.png')}/>
        <Text style={{fontSize:24,fontFamily:"Kindness-Bold",padding: 10,
	position:'absolute',top: 13,left: 12,right:7}}>Возраст</Text> 
        <Text style={styles.textKG}>{age}</Text>
         </View>
         <View style={{flexDirection:"row",
	position:'absolute',gap:25}}>
    <TouchableOpacity disabled = {isAgeLess18}
    style={{top: 190,left: 22,right:10, opacity: isAgeLess18 ? 0.5:1}} onPress={HandlePressMinusAge}>
      <Image style={{height: 43, width: 43}} source={require('./../assets/images/Minus-button.png')}/>
    </TouchableOpacity>
    <TouchableOpacity disabled = {isAgeMore100}
     style={{top: 190,left: 20,right:10, opacity: isAgeMore100 ? 0.5:1}} onPress={HandlePressPlusAge}>
      <Image style={{height: 43, width: 43}} source={require('./../assets/images/Plus-button.png')}/>
    </TouchableOpacity>
              </View>
            </View>

    <View  // правая кнопка ВЕС
    > 
          <View style={{top:20}}>    
        <Image style={{height: 260, width:153}}
        source={require('./../assets/images/Age-Sprite.png')}/>
        <Text style={{fontSize:24,fontFamily:"Kindness-Bold",padding: 10,
	position:'absolute',top: 13,left: 20,right:12}}>Вес (кг)</Text> 
        <Text style={styles.textKG}>{weight}</Text>
         </View>
              <View style={{flexDirection:"row",
	position:'absolute',gap:25}}>
    <TouchableOpacity disabled = {isWeightLess100}
    style={{top: 190,left: 20,right:10,opacity: isWeightLess100 ? 0.5:1}} onPress={HandlePressMinusWeight}>
      <Image style={{height: 43, width: 43}} source={require('./../assets/images/Minus-button.png')}/>
    </TouchableOpacity>
    <TouchableOpacity disabled = {isWeightMore230}
    style={{top: 190,left: 20,right:10,opacity: isWeightMore230 ? 0.5:1}} onPress={HandlePressPlusWeight}>
      <Image style={{height: 43, width: 43}} source={require('./../assets/images/Plus-button.png')}/>
    </TouchableOpacity>
              </View>
            </View>
    </View>

    <View  // Блок рост
    >
      <View style={{top: 50}}>
      <Image style={{top: 50,height: 146, width: 327}}
        source={require('./../assets/images/Height-Sprite.png')}/>
        <Text style={{fontSize:24,fontFamily:"Kindness-Bold",padding: 10,
	position:'absolute',top: 60,left: 80,right:80}}>Рост (см)</Text>
  <Text style={styles.textSlid}>{height}</Text>
  <Text style={{fontSize:24,fontFamily:"Kindness-Bold",padding: 10,
	position:'absolute',top: 128,left: 265}}>250</Text>
  <Text style={{fontSize:24,fontFamily:"Kindness-Bold",padding: 10,
	position:'absolute',top: 128,left: 3}}>100</Text>
  <Slider
  value={height}
  onValueChange={setHeight}
  style={{width:230,left:50}}
  minimumValue={100}
  maximumValue={250}
  minimumTrackTintColor="#005667"
  maximumTrackTintColor="#005667"
  thumbTintColor="#9EB3B7"
  step={1}
/>
      </View>
    </View>

    <View // Блок пол
    >
      <View style={{top: 50}}>
      <Image style={{top: 60,height: 146, width: 327}}
        source={require('./../assets/images/Height-Sprite.png')}/>
        <Text style={{fontSize:24,fontFamily:"Kindness-Bold",padding: 10,
	position:'absolute',top: 70,left: 130,right:80}}>Пол</Text>
  <Text style={{fontSize:24,fontFamily:"Kindness-Bold",padding: 10,
	position:'absolute',top: 128,left: 235}}>МУЖ</Text>
  <Text style={{fontSize:24,fontFamily:"Kindness-Bold",padding: 10,
	position:'absolute',top: 128,left: 15}}>ЖЕН</Text>
  <Switcher value={isMale}
  onChange={setIsMale}
  />
      </View>
    </View>
       <BaseTouchableOpacity onPress={HandlePressButton}/>
      </View>
    ); 
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#9EB3B7"
    },
    NameMain:{
      fontFamily:"Kindness-Bold",
      fontSize:29,
      top: 60
    },
    textKG:{
      fontSize:39,
      fontFamily:"Kindness-Bold",
      position: "absolute",
      color: "#005667",
      padding: 40,
      top: 50,
      left: 15
    },
    textSlid:{
      fontSize:39,
      fontFamily:"Kindness-Bold",
      position: "absolute",
      color: "#005667",
      padding: 40,
      top: 60,
      left: 90
    }
    });

    const calculateBMI = (
      age: number,
      weight: number,
      height: number,
      isMale: boolean
    ): string => {
      const heightInMeters = height / 100; // переводим в метры
      if (heightInMeters <= 0) {
        throw new Error("Рост должен быть больше 0");
      }

      const bmi = weight / (heightInMeters ** 2); // расчет BMI

      // Корректировка по возрасту и полу
      let adjustmentFactor = 1;
      if (isMale) {
        if (age < 30) {
          adjustmentFactor = 0.98;
        } else if (age < 50) {
          adjustmentFactor = 1.0;
        } else {
          adjustmentFactor = 1.02;
        }
      } else {
        if (age < 30) {
          adjustmentFactor = 0.95;
        } else if (age < 50) {
          adjustmentFactor = 1.0;
        } else {
          adjustmentFactor = 1.05;
        }
      }

      const adjustedBMI = bmi * adjustmentFactor;
      return adjustedBMI.toFixed(2);
    };
