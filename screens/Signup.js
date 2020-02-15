import React, { useState } from 'react';
import { ActivityIndicator, Alert, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native';

import { Block, Button, Input, Text } from '../components';
import { theme } from '../constants';

export const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const handlerSignUp = () => {
    const errors = [];
    Keyboard.dismiss();
    setLoading(true);
    // for loading Indicator
    setTimeout(() => {
      if (!email) {
        errors.push("email");
      }
      if (!username) {
        errors.push("username");
      }
      if (!password) {
        errors.push("password");
      }
      setErrors(errors);
      setLoading(false);
      if (!errors.length) {
        Alert.alert(
          "Success!",
          "Your account has been created!",
          [{ text: "Continue", onPress: () => navigation.navigate("Browse") }],
          { cancelable: false }
        );
      }
    }, 2000);
  };
  const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
  return (
    <KeyboardAvoidingView style={styles.signup} behavior="padding">
      <Block padding={[0, theme.sizes.padding * 1.7]}>
        <Text h1 bold>
          Sign Up
        </Text>
        <Block middle>
          <Input
            email
            label="Username"
            error={hasErrors("username")}
            style={[styles.input, hasErrors("username")]}
            defaultValue={username}
            onChangeText={setUsername}
          ></Input>
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

          <Button gradient onPress={handlerSignUp}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                Sign Up
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
  signup: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    height: theme.sizes.base * 2,
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});
