import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputForm } from '../../components/InputForm';

import { 
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransationTypes,
} from './styles';
import { Alert } from 'react-native';

interface FormData {
  name: string;
  sobrenome: string;
  email: string;
  pis: number;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  sobrenome: Yup.string().required('Sobrenome é obrigatório'),
  email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
  pis: Yup.number().min(11, 'No mínimo 11 dígitos').typeError('Informe um '),
});

export function Register() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function handleRegister(form: FormData){
    const data = {
      name: form.name,
      sobrenome: form.sobrenome,
      email: form.email,
      pis: form.pis,
    }
    console.log(data)
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