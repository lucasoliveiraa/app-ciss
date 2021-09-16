import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  FlatList,
} from 'react-native';
import { Button } from '../../components/Button';

import { 
  Container,
  Header,
  Title,
  Content,
} from './styles';

export function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <Title>Home</Title>
      </Header>
      <Content>

      <Button 
        title='Adicionar Colaborador' 
        onPress={() => navigation.navigate('Register')}
      />
      </Content>

    </Container>
  )
}
