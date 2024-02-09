import React from "react";
import { Text, StyleSheet } from "react-native";

const LapItem = ({ index, lap }) => {
  return <Text style={styles.lapText}>{`${index + 1}: ${lap}`}</Text>;
};

const styles = StyleSheet.create({
  lapText: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#f2f2f7",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d1d1d6",
  },
});

export default LapItem;
