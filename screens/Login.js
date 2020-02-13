import React, { useState } from 'react';
import { Dimensions, KeyboardAvoidingView, StyleSheet } from 'react-native';

import { Block, Button, Input, Text } from '../components';
import { theme } from '../constants';

const { width, height } = Dimensions.get("window");

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("artur@mail.ru");
  const [password, setPassword] = useState("123456789");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const handlerLogin = () => {
    const errors = [];
    setLoading(true);
    if (email !== "artur@mail.ru") {
      errors.push("email");
    }
    if (password !== "123456789") {
      errors.push("password");
    }
    setErrors(errors);
    setLoading(false);
    if (!errors.length) {
      navigation.navigate("Browse");
    }
  };
  const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
  return (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      <Block padding={[0, theme.sizes.padding * 2]}>
        <Text h1 bold>
          Login
        </Text>
        <Block middle>
          <Input
            label="Email"
            style={[styles.input, hasErrors("email")]}
            defaultValue={email}
            onChangeText={setEmail}
          ></Input>
          <Input
            secure
            label="Password"
            style={[styles.input, hasErrors("password")]}
            defaultValue={password}
            onChangeText={setPassword}
          ></Input>

          <Button gradient onPress={handlerLogin}>
            <Text bold white center>
              Login
            </Text>
          </Button>
          <Button onPress={() => {}}>
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
