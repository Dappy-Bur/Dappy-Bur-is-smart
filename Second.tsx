import { View, Text, StyleSheet, Image, Modal, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import React, { useState } from "react";

export default function Second() {
  const router = useRouter();

  const getBmiCategory = (bmi: number): { text: string; color: string } => {
    if (bmi <= 16) {
      return { text: "Выраженный дефицит веса", color: "#FF0000" };
    } else if (bmi > 16 && bmi < 18.5) {
      return { text: "Недостаток массы тела", color: "#FF8C00" };
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return { text: "Норма", color: "green" };
    } else if (bmi > 24.9 && bmi <= 29.9) {
      return { text: "Чрезмерная масса тела (предожирение)", color: "#FFA500" };
    } else if (bmi > 29.9 && bmi <= 34.9) {
      return { text: "Ожирение I степени", color: "#FF8C00" };
    } else if (bmi > 34.9 && bmi <= 39.9) {
      return { text: "Ожирение II степени", color: "#FF4500" };
    } else {
      return { text: "Ожирение III степени", color: "#FF0000" };
    }
  };

  const [modalVisible, setModalVisible] = useState(false);
  const HandlePressButton = () => {
    router.push({
      pathname: "/Third",
      params: {
        resultBmi: resultBmi.toString(),
        categoryText: category.text,
      },
    });
  };

  const { back } = useRouter();
  const local = useLocalSearchParams();
  const rawBmi = local?.resultBmi;
  const resultBmi = rawBmi ? parseFloat(rawBmi as string) : NaN;
  const isValidBmi = !isNaN(resultBmi) && resultBmi > 0;
  const category = isValidBmi
    ? getBmiCategory(resultBmi)
    : { text: "Некорректное значение", color: "black" };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.BackButton} onPress={back}>
        <Image
          style={{ height: 42, width: 47 }}
          source={require("./../assets/images/Back-Button.png")}
        />
      </TouchableOpacity>
      <Text style={styles.NameMain}>Калькулейтор BMI</Text>
      <Text
        style={{
          fontSize: 34,
          fontFamily: "Kindness-Bold",
          top: 110,
          padding: 10,
          position: "absolute",
          left: 70,
          right: 50,
        }}
      >
        Твой индекс массы тела
      </Text>

      <View style={{ top: 70 }}>
        <Image
          style={{ height: 388, width: 289.01, top: 60, left: 5 }}
          source={require("./../assets/images/EndSprite.png")}
        />
        <Text
          style={{
            fontSize: 27,
            fontFamily: "Kindness-Bold",
            top: 90,
            padding: 10,
            position: "absolute",
            left: 60,
            right: 50,
          }}
        >
          Результат
        </Text>
        <Text style={styles.textResult}>{local.resultBmi}</Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontFamily: "Kindness-Bold",
            top: 270,
            padding: 10,
            position: "absolute",
            left: 10,
            right: 10,
            color: category.color,
          }}
        >
          Категория ИМТ: {category.text}
        </Text>
        <View>
          <TouchableOpacity
            style={styles.InfoButton}
            onPress={() => setModalVisible(true)}
          >
            <Image
              style={{ height: 42, width: 47, top: 10 }}
              source={require("./../assets/images/Info-button.png")}
            />
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.modalView}>
              <Image
                style={{ height: 467, width: 348, top: 60, left: 5 }}
                source={require("./../assets/images/Modal-back.png")}
              />
              <Text style={styles.modalText}>
                <Text style={{ color: "#FF0000" }}>16 и меньше</Text> — выраженный
                дефицит{"\n"}веса;{"\n"}
                <Text style={{ color: "#FF8C00" }}>16-17,9</Text> — недостаток
                массы тела;{"\n"}
                <Text style={{ color: "green" }}>18-24,9</Text> — норма;{"\n"}
                <Text style={{ color: "#FFA500" }}>25-29,9</Text> — чрезмерная
                масса тела{"\n"}(предожирение);{"\n"}
                <Text style={{ color: "#FF8C00" }}>30-34,9</Text> — ожирение I
                степени;{"\n"}
                <Text style={{ color: "#FF4500" }}>35-39,9</Text> — ожирение II
                степени;{"\n"}
                <Text style={{ color: "#FF0000" }}>40 и больше</Text> — ожирение
                III степени.
              </Text>
              <TouchableOpacity
                style={styles.ExitButton}
                onPress={() => setModalVisible(false)}
              >
                <Image
                  style={{ height: 43, width: 43 }}
                  source={require("./../assets/images/Exit-button.png")}
                />
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        <TouchableOpacity
  onPress={() => {
    router.push({
      pathname: "/Third",
      params: {
        resultBmi: resultBmi.toFixed(2), // Результат BMI
        categoryText: category.text,    // Текст категории
      },
    });
  }}
  style={styles.settingsButton}
>
  <Image style={{ height: 85, width: 258 }} source={require('./../assets/images/button-mid-1.png')} />
  <Text style={styles.textButton}>Результаты</Text>
</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9EB3B7",
  },
  BackButton: {
    position: "absolute",
    left: 10,
    top: 50,
  },
  NameMain: {
    fontFamily: "Kindness-Bold",
    fontSize: 29,
    position: "absolute",
    top: 40,
  },
  textResult: {
    fontSize: 69,
    fontFamily: "Kindness-Bold",
    position: "absolute",
    color: "#005667",
    padding: 40,
    marginTop: 130,
    left: 30,
  },
  modalView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
  },
  modalText: {
    fontFamily: "Kindness-Bold",
    fontSize: 14,
    color: "#000",
    marginHorizontal: 15,
    marginVertical: 10,
    lineHeight: 22,
    top: -350,
  },
  InfoButton: {
    alignItems: "center",
    marginTop: -15,
  },
  ExitButton: {
    position: "absolute",
    top: 140,
    left: 320,
  },
  settingsButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 130,
    padding: 20,
  },
  textButton: {
    fontSize: 34,
    color: "#005667",
    fontFamily: "Kindness-Bold",
    position: "absolute",
  },
});
