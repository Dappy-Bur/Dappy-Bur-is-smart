import { Text, View, StyleSheet, TouchableOpacity} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.getStartedText}>Нажми</Text>
      <Text style={styles.getStartedTextTwo}>или умри</Text>
      <TouchableOpacity style={styles.settingsButton}>
        <Text style={styles.textButton}>Жми</Text>
      </TouchableOpacity>
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
getStartedText: {
    fontSize: 40,
    fontStyle: 'normal',
    marginHorizontal:29,
    marginTop:280
},
getStartedTextTwo: {
  fontSize: 20,
  color:"#707F82",
  fontStyle: 'normal'
},
settingsButton:{
  backgroundColor:"#E5EEEF",
  width:282,
  alignItems:"center",
  justifyContent:"center",
  borderRadius:5,
  marginTop:250
},
textButton:{
  fontSize: 40,
  lineHeight:50
}
});
//
