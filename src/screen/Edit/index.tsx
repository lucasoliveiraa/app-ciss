import React, { useState, useCallback } from 'react';
import { Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import { useNavigation, useRoute } from '@react-navigation/native';

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
import { Alert } from 'react-native';

interface Params {
  name: string;
  sobrenome: string;
  email: string;
  pis: number;
}

interface FormData {
  name: string;
  sobrenome: string;
  email: string;
  pis: number;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório').min(2, 'No mínimo 2 caracteres').max(30, 'No máximo 30 caracteres'),
  sobrenome: Yup.string().required('Sobrenome é obrigatório').min(2, 'No mínimo 2 caracteres').max(50, 'No máximo 50 caracteres'),
  email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
  pis: Yup.number().moreThan(9999999999, 'No mínimo 11 dígitos').typeError('Informe o número do NIS (PIS)'),
});

export function Edit() {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    name,
    sobrenome,
    email,
    pis,
  } = routes.params as Params;

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const handleRegister = useCallback( 
    async (form: FormData) => {
      try {
        await api.post('/colaboradores', form);

        Alert.alert(
          'Cadastro realizado com sucesso!',
          'Colaborador registrado.',
        );
        console.log(form);
      } catch (err) {
        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer cadastro, tente novamente.',
        );
      }
    }, [])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Editar</Title>
        </Header>


        <Form>
          <Fields>
            <InputForm 
              name="name"
              value={name}
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              placeholderTextColor="#555"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />

            <InputForm 
              value={sobrenome}
              name="sobrenome"
              control={control}
              placeholder="Sobrenome"
              placeholderTextColor="#555"
              error={errors.sobrenome && errors.sobrenome.message}
            />

            <InputForm 
              value={email}
              name="email"
              control={control}
              autoCorrect={false}
              placeholder="E-mail"
              placeholderTextColor="#555"
              keyboardType='email-address'
              error={errors.email && errors.email.message}
            />

            <InputForm 
              value={String(pis)}
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
            title='Confirmar Mudança' 
            onPress={handleSubmit(handleRegister)}
          />
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
}