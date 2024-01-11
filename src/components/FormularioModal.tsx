import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
interface FormularioModalProps {
  isVisible: boolean,
  setIsVisible: React.Dispatch<boolean>,
  saveBook: Function
}
const FormularioModal: React.FC<FormularioModalProps> = ({ isVisible, setIsVisible, saveBook }) => {
  const handleSave = () => {
    saveBook()
    setIsVisible(false)
  }
  return (
    <Modal
      visible={isVisible}
      transparent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Agregar Libro</Text>
          <Text>Titulo</Text>
          <TextInput placeholder='Ingrese el Titulo' style={styles.input} />
          <Text>Autor</Text>
          <TextInput placeholder='Ingrese el Titulo' style={styles.input} />
          <Text>Año</Text>
          <TextInput placeholder='Ingrese el Titulo' style={styles.input} />
          <Button title='Insertar' onPress={() => handleSave()} />
        </View>

      </View>
    </Modal>
  )
}

export default FormularioModal

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.8)"
  },
  modalContent: {
    width: "80%",
    borderRadius: 10,
    padding: 10,
    gap: 10,
    backgroundColor: "#00d26a",
  },
  input: {
    borderWidth: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 150,
    borderRadius: 5,
    borderColor: "green",
    fontSize: 16,
    backgroundColor: "orange"
  }
})