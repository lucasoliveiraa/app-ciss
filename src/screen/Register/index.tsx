import React, { useState, useCallback, useEffect } from 'react';
import { Keyboard, ScrollView, TouchableWithoutFeedback, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputForm } from '../../components/InputForm';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
} from './styles';

interface FormData {
  name: string;
  sobrenome: string;
  email: string;
  pis: number;
}

type NavigationProps = {
  navigate: (screen: string) => void;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório').min(2, 'No mínimo 2 caracteres').max(30, 'No máximo 30 caracteres'),
  sobrenome: Yup.string().required('Sobrenome é obrigatório').min(2, 'No mínimo 2 caracteres').max(50, 'No máximo 50 caracteres'),
  email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
  pis: Yup.number().moreThan(9999999999, 'No mínimo 11 dígitos').typeError('Informe o número do NIS (PIS)'),
});

export function Register() {
  const navigation = useNavigation<NavigationProps>();
  const { control, handleSubmit, reset, formState: { errors }, getValues } = useForm({
    resolver: yupResolver(schema)
  });

  async function handleRegister(form: FormData) {
    try {
      await api.post('/colaboradores', form);

      Alert.alert(
        'Cadastro realizado com sucesso!'
      );
      console.log(form);
      reset();
      navigation.navigate('List');
    } catch (err) {
      Alert.alert(
        'Erro no cadastro',
        'Ocorreu um erro ao fazer cadastro, tente novamente.',
      );
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              placeholderTextColor="#555"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />

            <InputForm
              name="sobrenome"
              control={control}
              placeholder="Sobrenome"
              placeholderTextColor="#555"
              error={errors.sobrenome && errors.sobrenome.message}
            />

            <InputForm
              name="email"
              control={control}
              autoCorrect={false}
              placeholder="E-mail"
              placeholderTextColor="#555"
              keyboardType='email-address'
              error={errors.email && errors.email.message}
            />

            <InputForm
              name="pis"
              control={control}
              placeholder="PIS"
              placeholderTextColor="#555"
              keyboardType="numeric"
              maxLength={11}
              error={errors.pis && errors.pis.message}
            />
          </Fields>

          <Button
            title='Cadastrar'
            onPress={handleSubmit(handleRegister)}
          />
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
}