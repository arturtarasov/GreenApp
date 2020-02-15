import React, { useState } from 'react';
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native';

import { Block, Button, Input, Text } from '../components';
import { theme } from '../constants';

const VALID_EMAIL = "artur@mail.ru";
const VALID_PASSWORD = "123456789";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState(VALID_EMAIL);
  const [password, setPassword] = useState(VALID_PASSWORD);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  // check validation with backend
  const handlerLogin = () => {
    const errors = [];
    Keyboard.dismiss();
    setLoading(true);
    // for loading Indicator
    setTimeout(() => {
      if (email !== VALID_EMAIL) {
        errors.push("email");
      }
      if (password !== VALID_PASSWORD) {
        errors.push("password");
      }
      setErrors(errors);
      setLoading(false);
      if (!errors.length) {
        navigation.navigate("Browse");
      }
    }, 2000);
  };
  const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
  return (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      <Block padding={[0, theme.sizes.padding * 1.7]}>
        <Text h1 bold>
          Login
        </Text>
        <Block middle>
          <Input
            label="Email"
            error={hasErrors("email")}
            style={[styles.input, hasErrors("email")]}
            defaultValue={email}
            onChangeText={setEmail}
          ></Input>
          <Input
            secure
            label="Password"
            error={hasErrors("password")}
            style={[styles.input, hasErrors("password")]}
            defaultValue={password}
            onChangeText={setPassword}
          ></Input>

          <Button gradient onPress={handlerLogin}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                Login
              </Text>
            )}
          </Button>
          <Button onPress={() => navigation.navigate("Forgot")}>
            <Text
              gray
              caption
              center
              style={{ textDecorationLine: "underline" }}
            >
              Forgot your password?
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  login: {
    flex: 1,
    justifyContent: "center"
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});
