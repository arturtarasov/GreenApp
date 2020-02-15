import React, { useState } from 'react';
import { ActivityIndicator, Alert, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native';

import { Block, Button, Input, Text } from '../components';
import { theme } from '../constants';

const VALID_EMAIL = "artur@mail.ru";

export const Forgot = ({ navigation }) => {
  const [email, setEmail] = useState(VALID_EMAIL);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const handlerForgot = () => {
    const errors = [];
    Keyboard.dismiss();
    setLoading(true);
    // for loading Indicator
    setTimeout(() => {
      if (email !== VALID_EMAIL) {
        errors.push("email");
      }
      setErrors(errors);
      setLoading(false);
      if (!errors.length) {
        Alert.alert(
          "Password sent!",
          "Please check email.",
          [{ text: "OK", onPress: () => navigation.navigate("Login") }],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          "Error!",
          "Please check you Email address.",
          [{ text: "Try again" }],
          { cancelable: false }
        );
      }
    }, 2000);
  };
  const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
  return (
    <KeyboardAvoidingView style={styles.forgot} behavior="padding">
      <Block padding={[0, theme.sizes.padding * 1.7]}>
        <Text h1 bold>
          Forgot
        </Text>
        <Block middle>
          <Input
            label="Email"
            error={hasErrors("email")}
            style={[styles.input, hasErrors("email")]}
            defaultValue={email}
            onChangeText={setEmail}
          ></Input>

          <Button gradient onPress={handlerForgot}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                Forgot
              </Text>
            )}
          </Button>
          <Button onPress={() => navigation.navigate("Login")}>
            <Text
              gray
              caption
              center
              style={{ textDecorationLine: "underline" }}
            >
              Back to Login
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  forgot: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});
