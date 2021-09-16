import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { Button } from '../../components/Button';

import {
  Container,
  Header,
  Title,
  Content,
  TextColab,
  BoxContainer,
  BoxHeader,
  BoxTitle,
  TextEmail,
  BoxButtons,
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get('/colaboradores');
        setColaborador(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
  }, []);

  function handleRemoveCharacter(id: string) {
    setColaborador((oldState) => oldState.filter((colab) => colab.id !== id));
  }

  return (
    <Container>
      <Header>
        <Title>Lista</Title>
      </Header>

      <Content>
        <TextColab>Colaboradores</TextColab>
        <FlatList
          data={myColaborador}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <BoxContainer>
              <BoxHeader>
                <Icon name='user' size={24} color='#FFFFFF' />
                <BoxTitle>
                  {item.name} {item.sobrenome}
                </BoxTitle>
              </BoxHeader>
              <BoxHeader>
                <Icon name='mail' size={24} color='#FFFFFF' />
                <TextEmail>
                  {item.email}
                </TextEmail>
              </BoxHeader>
              <BoxHeader>
                <Icon name='hash' size={24} color='#FFFFFF' />
                <TextEmail>
                  {item.pis}
                </TextEmail>
              </BoxHeader>
              <BoxButtons>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Edit', item)}
                >
                  <Icon name='edit' size={24} color='green' />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginLeft: 6 }}
                  onPress={() => handleRemoveCharacter(item.id)}
                >
                  <Icon name='trash-2' size={24} color='red' />
                </TouchableOpacity>
              </BoxButtons>
            </BoxContainer>
            // <CardColaborador
            //   colab={item}
            // />
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
