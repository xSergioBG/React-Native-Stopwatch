import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import LapItem from "./LapItem";

const LapList = ({ laps }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={laps}
        renderItem={({ item, index }) => <LapItem index={index} lap={item} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 14,
    flexGrow: 1,
    paddingBottom: 16, // Espacio inferior para evitar que el contenido se superponga con el borde inferior
  },
});

export default LapList;
