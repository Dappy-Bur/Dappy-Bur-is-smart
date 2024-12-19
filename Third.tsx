import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Third() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [results, setResults] = useState<{ bmi: string; category: string; date: string }[]>([]);

  // Функция для загрузки сохранённых результатов
  const loadResults = async () => {
    const savedResults = await AsyncStorage.getItem("bmiResults");
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    }
  };

  // Функция для сохранения результатов в AsyncStorage
  const saveResults = async (newResults: typeof results) => {
    await AsyncStorage.setItem("bmiResults", JSON.stringify(newResults));
  };

  useEffect(() => {
    loadResults();
  }, []);

  useEffect(() => {
    if (params.resultBmi && params.categoryText) {
      const newResult = {
        bmi: params.resultBmi as string,
        category: params.categoryText as string,
        date: new Date().toLocaleString("ru-RU", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      const isDuplicate = results.some(
        (result) => result.bmi === newResult.bmi && result.category === newResult.category
      );

      if (!isDuplicate) {
        const updatedResults = [...results, newResult];
        setResults(updatedResults);
        saveResults(updatedResults); // Сохраняем новые результаты
      }
    }
  }, [params]);

  const getColorForCategory = (category: string) => {
    switch (category) {
      case "Выраженный дефицит веса":
        return "#FF0000";
      case "Недостаток массы тела":
        return "#FF8C00";
      case "Норма":
        return "green";
      case "Чрезмерная масса тела (предожирение)":
        return "#FFA500";
      case "Ожирение I степени":
        return "#FF8C00";
      case "Ожирение II степени":
        return "#FF4500";
      case "Ожирение III степени":
        return "#FF0000";
      default:
        return "black";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>История результатов</Text>
      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.resultRow}>
            <Text style={styles.resultText}>ИМТ: {item.bmi}</Text>
            <Text style={[styles.resultText, { color: getColorForCategory(item.category) }]}>
              Категория: {item.category}
            </Text>
            <Text style={styles.dateText}>Дата: {item.date}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.backButton} onPress={() => router.push("/Main")}>
        <Text style={styles.backButtonText}>Назад</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  resultRow: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 5,
  },
  dateText: {
    fontSize: 14,
    color: "#888",
  },
  backButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#005667",
    borderRadius: 8,
    alignItems: "center",
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
