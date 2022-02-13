import { View, Text, TextInput, Pressable, LogBox } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

const MessageInput = () => {
  LogBox.ignoreAllLogs();
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.warn("sending: ", message);
    setMessage("");
  };

  const onPlusClicked = () => {
    console.warn("On plus clicked");
  };

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };

  //   console.warn(message);

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          name="emotsmile"
          size={24}
          color="#595959"
          style={styles.icon}
        />

        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Message..."
        />

        <Feather name="camera" size={24} color="#595959" style={styles.icon} />

        <MaterialCommunityIcons
          name="microphone-outline"
          size={24}
          color="#595959"
          style={styles.icon}
        />
      </View>
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        {message ? (
          <Ionicons name="send" size={20} color="white" />
        ) : (
          <AntDesign name="plus" size={24} color="white" />
        )}
      </Pressable>
    </View>
  );
};

export default MessageInput;
