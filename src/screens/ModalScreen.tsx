import React, {useContext, useState} from 'react';
import {View, Button, Modal, StyleSheet, Text} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import TouchableButton from '../components/TouchableButton';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.containerApp}>
      <HeaderTitle title="Modal screen" />

      <TouchableButton
        callback={() => setIsVisible(true)}
        text={'Abrir modal'}
      />
      <Modal animationType="fade" visible={isVisible} transparent={true}>
        <View style={style.viewModal}>
          <View
            style={{...style.modalContent, backgroundColor: colors.background}}>
            <HeaderTitle title="MODAL" />
            <Text style={{color: colors.text}}>Cuerpo del modal</Text>

            <Button
              title="Cerrar"
              onPress={() => {
                setIsVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const style = StyleSheet.create({
  viewModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    height: '75%',
    width: '90%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 10,
  },
});
