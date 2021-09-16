import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import {
  FlatList,
} from 'react-native';
import { Button } from '../../components/Button';
import { CardColaborador } from '../../components/CardColaborador';

import { 
  Container,
  Header,
  Title,
  Content,
  TextColab,
} from './styles';

interface ColaboradorData {
  id: string;
  name: string;
  sobrenome: string;
  email: string;
  pis: number;
}

export function Home() {
  const navigation = useNavigation();
  const [myColaborador, setColaborador] = useState<ColaboradorData[]>([]); 

  useEffect(() => {
    async function loadData() {
      await api.get('/colaboradores').then(response => {
        setColaborador(response.data);
      });
    }

    loadData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Lista</Title>
      </Header>

      <Content>
      <TextColab>Colaboradores</TextColab>
      <FlatList
        data={myColaborador}
        keyExtractor={(item)  => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CardColaborador 
              colab={item}
          />
        )}
      />

        <Button 
          title='Adicionar Colaborador' 
          onPress={() => navigation.navigate('Register')}
        />
      </Content>

    </Container>
  )
}
