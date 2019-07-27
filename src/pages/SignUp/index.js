import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo.png';
import Background from '../../components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Full name"
          />
          <FormInput
            icon="mail-outline"
            keyboardTyoe="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="E-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Password"
          />
          <SubmitButton onPress={() => {}}>Log in</SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Already registered</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
