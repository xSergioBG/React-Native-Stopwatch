import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Circle, Line } from "react-native-svg";

const Clock = ({ time }) => {
  const renderClock = () => {
    const radius = 90;
    const centerX = 100;
    const centerY = 100;
    const strokeWidth = 6;
    const secondAngle = (time / 1000) * (360 / 60);
    const minuteAngle = (time / (1000 * 60)) * (360 / 60);

    return (
      <Svg width={200} height={200}>
        <Circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="transparent"
          stroke="#d1d1d1"
          strokeWidth={strokeWidth}
        />
        {[...Array(60)].map((_, index) => {
          const angle = (index * 6 * Math.PI) / 180;
          const x1 =
            centerX + (radius - (index % 5 === 0 ? 10 : 5)) * Math.sin(angle);
          const y1 =
            centerY - (radius - (index % 5 === 0 ? 10 : 5)) * Math.cos(angle);
          const x2 = centerX + radius * Math.sin(angle);
          const y2 = centerY - radius * Math.cos(angle);
          return (
            <Line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#e1e1e1"
              strokeWidth={index % 5 === 0 ? strokeWidth + 1 : strokeWidth - 1}
            />
          );
        })}
        <Line
          x1={centerX}
          y1={centerY}
          x2={
            centerX +
            Math.sin(minuteAngle * (Math.PI / 180)) * (radius - strokeWidth)
          }
          y2={
            centerY -
            Math.cos(minuteAngle * (Math.PI / 180)) * (radius - strokeWidth)
          }
          stroke="#000"
          strokeWidth={strokeWidth - 2}
        />
        <Line
          x1={centerX}
          y1={centerY}
          x2={
            centerX +
            Math.sin(secondAngle * (Math.PI / 180)) *
              (radius - strokeWidth - 10)
          }
          y2={
            centerY -
            Math.cos(secondAngle * (Math.PI / 180)) *
              (radius - strokeWidth - 10)
          }
          stroke="#ff3b30" // Cambio de color a rojo típico de iOS
          strokeWidth={strokeWidth - 4}
          strokeLinecap="round" // Redondear los extremos de la línea
        />
      </Svg>
    );
  };
  return <View style={styles.clockContainer}>{renderClock()}</View>;
};

const styles = StyleSheet.create({
  clockContainer: {
    marginTop: "25%",
    marginBottom: 20,
    alignItems: "center", // Centrar el reloj horizontalmente
  },
});

export default Clock;
