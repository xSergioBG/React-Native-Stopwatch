import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Controls = ({ running, onStartStop, onReset, onAddLap }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          styles.startStopButton,
          { backgroundColor: running ? "#FF3B30" : "#007AFF" },
        ]}
        onPress={onStartStop}
      >
        <Text style={styles.buttonText}>{running ? "Stop" : "Start"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#007AFF" }]}
        onPress={onReset}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          styles.lapButton,
          { backgroundColor: "#007AFF", opacity: running ? 1 : 0.5 }, // Ajustar opacidad cuando no se está ejecutando
        ]}
        onPress={onAddLap}
        disabled={!running}
      >
        <Text style={styles.buttonText}>Lap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    backgroundColor: "#007AFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  startStopButton: {
    flex: 1, // Hacer que el botón "Start/Stop" ocupe todo el espacio disponible
  },
  lapButton: {
    backgroundColor: "#007AFF",
  },
});

export default Controls;
