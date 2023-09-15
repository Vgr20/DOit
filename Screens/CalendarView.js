import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Agenda } from "react-native-calendars";
import { Card, Avatar } from "react-native-paper";

const timeToString = (time) => {
  const date = new Date(time || Date.now()); // If 'time' is not provided, use the current date
  const isoString = date.toISOString();
  const datePart = isoString.split("T")[0];
  return datePart;
};

const Schedule = () => {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -365; i < 365; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 1; j < numItems; j++) {
            items[strTime].push({
              name:
                j +
                " : " +
                "Task Planned on " +
                strTime +
                " is " +
                "(View Task)",
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
        <Card style={{ backgroundColor: "#333", borderWidth: 0 }}>
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#FFF" }}>{item.name}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#111" }}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        renderItem={renderItem}
        theme={{
          backgroundColor: "#111",
          calendarBackground: "#162626",
          textSectionTitleColor: "#FFF",
          selectedDayBackgroundColor: "#444",
          selectedDayTextColor: "#FFF",
          todayTextColor: "#FFCC00",
          dayTextColor: "#FFF",
          textDisabledColor: "#555",
          dotColor: "#162626",
          selectedDotColor: "#FFF",
          arrowColor: "#FFCC00",
          monthTextColor: "#FFF",
          // This is the line that changes the theme to dark
          dark: true,
        }}
      />
    </View>
  );
};

export default Schedule;
