import React from "react";
import { StyleSheet, Text, Pressable, View, Modal as ModalRN } from "react-native";

export const Modal = ({
  btnText,
  bodyText,
  onChange,
  todoId,
  modalOpen,
  setModalOpen,
}) => {
  return (
    <View style={styles.centeredView}>
      <ModalRN
        animationType="slide"
        transparent={true}
        visible={modalOpen}
        onRequestClose={() => setModalOpen(prev => !prev)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{bodyText}</Text>
            <View style={styles.buttonsView}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalOpen(prev => !prev)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonAction]}
                onPress={() => {
                  onChange(todoId);
                  setModalOpen(prev => !prev);
                }}
              >
                <Text style={styles.textStyle}>{btnText}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ModalRN>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  buttonsView: {
    flexDirection: 'row',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    width: 100,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginVertical: 10,
    marginHorizontal: 10
  },
  buttonClose: {
    backgroundColor: 'gray',
  },
  buttonAction: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
});
