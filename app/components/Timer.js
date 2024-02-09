import React from "react";
import { Text, StyleSheet } from "react-native";

const Timer = ({ time }) => {
  return <Text style={styles.timer}>{formatTime(time)}</Text>;
};

const formatTime = (time) => {
  const pad = (n) => (n < 10 ? "0" + n : n);
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);
  return `${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
};

const styles = StyleSheet.create({
  timer: {
    fontSize: 72,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#020100",
    padding: 10,
    borderBottomWidth: 3,
    borderRadius: 12,
    borderColor: "#e1e1e1",
  },
});

export default Timer;
