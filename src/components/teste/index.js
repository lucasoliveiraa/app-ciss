/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import Button from '../../../components/button';

import LogoRegister from '../../../components/LogoRegister';
import PfIcon from '../../../img/svg/geralIcons/pessoaFisica.svg';
import PjIcon from '../../../img/svg/geralIcons/pessoaJuridica.svg';

import {MaterialIndicator} from 'react-native-indicators'; // import adicionado

const {width, height} = Dimensions.get('screen');

export default function Login() {
  const [loading, setLoading] = useState(false); // state do loading
  const [loading2, setLoading2] = useState(false); // state do loading

  const navigation = useNavigation();

  const pj = true;

  //funcao adicionada
  useEffect(() => {
    if (loading) {
      navigation.navigate('Purchase', {isPj: false});
      return setLoading(false);
    }
    if (loading2) {
      navigation.navigate('Purchase', {isPj: true});
      return setLoading2(false);
    }
  }, [loading, loading2, navigation]);

  function isPj() {
    async () => {
      await JSON.parse(AsyncStorage.setItem('@IsPj', pj));
    };
    const pjScreen = () => navigation.navigate('PurchasePj');
    return pjScreen;
  }

  return (
    <View style={styles.body}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('../../../img/backgrounds/fundoCadastro.png')}
        style={{flex: 1}}>
        <View
          style={{
            flex: 1,
          }}>
          <View style={{marginLeft: height * 0.017, marginTop: width * 0.066}}>
            <LogoRegister />
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>Escolha o seu tipo de conta</Text>
          </View>
          <View style={styles.card}>
            <Button
              containerStyle={{marginVertical: height * 0.0335}}
              style={styles.btn}
              title={loading ? '' : ' Tag Pessoal'}
              titleStyle={styles.titleButton}
              //onPress={() => navigation.navigate('Purchase', {isPj: false})}
              onPress={async () => {
                //função modificada
                setLoading(true);
              }}>
              <PfIcon
                fill={'#68118A'}
                borderColor={'#ccc'}
                borderRightWidth={1}
                paddingRight={height * 0.0555}
                marginRight={height * 0.017}
                marginLeft={height * 0.017}
                width={35}
                height={27}
              />
              {/* Componente adicionado (Activity indicator retirado) */}
              {loading && (
                <View
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialIndicator color="#68118A" size={20} />
                </View>
              )}
            </Button>
            <Button
              containerStyle={{marginVertical: height * 0.0335}}
              style={styles.btn}
              title={loading2 ? '' : ' Tag Jurídica'}
              titleStyle={styles.titleButton}
              //onPress={() => navigation.navigate('Purchase', {isPj: true})}
              //onPress={isPj()}
              onPress={async () => {
                //função modificada
                setLoading2(true);
              }}>
              <PjIcon
                fill={'#68118A'}
                borderColor={'#ccc'}
                borderRightWidth={1}
                paddingRight={height * 0.0555}
                marginRight={height * 0.017}
                marginLeft={height * 0.017}
                width={35}
                height={27}
              />
              {/* Componente adicionado (Activity indicator retirado) */}
              {loading2 && (
                <View
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialIndicator color="#68118A" size={20} />
                </View>
              )}
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  card: {
    width: width * 0.812,
    height: height * 0.208,
    borderRadius: 20,
    marginTop: height * 0.279,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    width: width * 0.812,
    height: height * 0.0895,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  imgButton: {
    marginLeft: -70,
    marginRight: 30,
  },
  titleButton: {
    color: '#68118A',
    marginLeft: height * 0.017,
    fontSize: height * 0.02,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.0555,
    marginBottom: height * -0.168,
  },
  titleText: {
    alignSelf: 'flex-start',
    color: '#fff',
    fontSize: height * 0.02235,
    marginLeft: height * 0.055,
  },
});
