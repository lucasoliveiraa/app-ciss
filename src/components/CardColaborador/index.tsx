import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps
} from 'react-native';

import { 
  Container,
  Header,
  Title,
  TextEmail,
  BoxButtons,
} from './styles';

interface ColabCardProps {
  colab: {
    id: string;
    name: string;
    sobrenome: string;
    email: string;
    pis: number;
  }
}


export function CardColaborador({colab} : ColabCardProps){
  const navigation = useNavigation();

  function handleRemoveCharacter(id: string) {
    api.delete(`/colaboradores/${id}`);
  }

  return(
    <Container>
      <Header>
        <Icon name='user' size={24} color='#FFFFFF' />
        <Title>
            {colab.name} {colab.sobrenome}
        </Title>
      </Header>
      <Header>
        <Icon name='mail' size={24} color='#FFFFFF' />
        <TextEmail>
            {colab.email}
        </TextEmail>
      </Header>
      <Header>
        <Icon name='hash' size={24} color='#FFFFFF' />
        <TextEmail>
            {colab.pis}
        </TextEmail>
      </Header>
      <BoxButtons>
        <TouchableOpacity
          onPress={() => navigation.navigate('Edit', colab)}
        >
          <Icon name='edit' size={24} color='green' />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: 6 }}
          onPress={() => handleRemoveCharacter(colab.id)}
        >
          <Icon name='trash-2' size={24} color='red' />
        </TouchableOpacity>
      </BoxButtons>
    </Container>
  )
}
