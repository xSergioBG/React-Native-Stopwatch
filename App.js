import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Clock from "./app/components/Clock";
import Timer from "./app/components/Timer";
import Controls from "./app/components/Controls";
import LapList from "./app/components/LapList";

const App = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const startTimeRef = useRef(null);
  const requestRef = useRef();

  const animate = (timestamp) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }
    setTime(timestamp - startTimeRef.current);
    if (running) {
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  useEffect(() => {
    if (running) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestRef.current);
      startTimeRef.current = null;
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [running]);

  const startStop = () => {
    if (!running) {
      startTimeRef.current = performance.now() - time;
    }
    setRunning(!running);
  };

  const reset = () => {
    cancelAnimationFrame(requestRef.current);
    setTime(0);
    setRunning(false);
    setLaps([]);
    startTimeRef.current = null;
  };

  const addLap = () => {
    setLaps([...laps, formatTime(time)]);
  };

  const formatTime = (time) => {
    const pad = (n) => (n < 10 ? "0" + n : n);
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
  };

  return (
    <View style={styles.container}>
      <Clock time={time} />
      <Timer time={time} />
      <Controls
        running={running}
        onStartStop={startStop}
        onReset={reset}
        onAddLap={addLap}
      />
      <LapList laps={laps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
});

export default App;
