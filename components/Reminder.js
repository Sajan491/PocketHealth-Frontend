import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Card } from "react-native-paper";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../utils/colors";

const Reminder = ({ item, onPress }) => {
  const {medicineName, selectedHours, medicineType, frequency} = item
  useEffect(() => {
    console.log(medicineName, "Reminder");
  }, []);
  return (
    <View>
      <Card style={{ marginBottom: 10 }}>
        <Card.Content>
          <TouchableOpacity onPress={onPress} style={styles.mainContent}>
            <View style={styles.icon}>
              {medicineType === "tablet" && (
                <FontAwesome5
                  name="tablets"
                  size={24}
                  color={colors.secondary}
                />
              )}
              {medicineType === "capsule" && (
                <FontAwesome5
                  name="capsules"
                  size={24}
                  color={colors.secondary}
                />
              )}
              {medicineType === "liquid" && (
                <MaterialCommunityIcons
                  name="bottle-tonic-plus"
                  size={24}
                  color={colors.secondary}
                />
              )}
            </View>
            <View style={styles.textContent}>
              <Text style={styles.titleText}>{medicineName}</Text>
              <Text>{selectedHours}</Text>
              <Text>{frequency}</Text>
              <Text>{medicineType}</Text>
            </View>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Reminder;

const styles = StyleSheet.create({
  mainContent: {
    flexDirection: "row",
  },
  textContent: {
    marginLeft: 50,
  },
  icon: {
    display: "flex",
    justifyContent: "center",
  },
  titleText: {
    fontWeight: "bold",
  },
});
