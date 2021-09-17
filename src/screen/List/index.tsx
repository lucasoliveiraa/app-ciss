import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { Button } from '../../components/Button';

import {
  Container,
  Header,
  Title,
  Content,
  TextColab,
  CardColab,
  CardHeader,
  CardTitle,
  TextEmail,
  CardButtons,
  LoadContainer,
} from './styles';

interface ColaboradorData {
  id: string;
  name: string;
  sobrenome: string;
  email: string;
  pis: number;
}

type NavigationProps = {
  navigate: (screen: string) => void;
}

export function List() {
  const navigation = useNavigation<NavigationProps>();
  const [myColaborador, setColaborador] = useState<ColaboradorData[]>([]);
  const [loading, setLoading] = useState(true);

  function handleRemove(colab: ColaboradorData) {
    Alert.alert('Remover', `Deseja remover ${colab.name}?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim 😢',
        onPress: async () => {
          try {
            await api.delete(`/colaboradores/${colab.id}`);
            setColaborador((oldData) => (
              oldData.filter((item) => item.id !== colab.id)
            ));
          } catch (error) {
            Alert.alert('Não foi possível remover! 😬')
          }
        }
      }
    ]);
  }

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

  useEffect(() => {
    loadData();
  }, [myColaborador])

  /* useEffect(() => {
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
  }, []); */

  return (
    <Container>
      <Header>
        <Title>Lista</Title>
      </Header>

      <Content>
        <TextColab>Colaboradores</TextColab>
        { loading ? 
          <LoadContainer>
              <ActivityIndicator 
              color='#A370F3'
              size="large"
              />
          </LoadContainer>
          : 
          <FlatList
            data={myColaborador}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CardColab>
                <CardHeader>
                  <Icon name='user' size={24} color='#FFFFFF' />
                  <CardTitle>
                    {item.name} {item.sobrenome}
                  </CardTitle>
                </CardHeader>
                <CardHeader>
                  <Icon name='mail' size={24} color='#FFFFFF' />
                  <TextEmail>
                    {item.email}
                  </TextEmail>
                </CardHeader>
                <CardHeader>
                  <Icon name='hash' size={24} color='#FFFFFF' />
                  <TextEmail>
                    {item.pis}
                  </TextEmail>
                </CardHeader>
                <CardButtons>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Edit', item)}
                  >
                    <Icon name='edit' size={24} color='green' />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ marginLeft: 6 }}
                    onPress={() => handleRemove(item)}
                  >
                    <Icon name='trash-2' size={24} color='red' />
                  </TouchableOpacity>
                </CardButtons>
              </CardColab>
            )}
          />
        }

        <Button
          title='Adicionar Colaborador'
          onPress={() => navigation.navigate('Register')}
        />
      </Content>

    </Container>
  )
}
