import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
interface FormularioModalProps {
  isVisible: boolean,
  setIsVisible: React.Dispatch<boolean>,
  saveBook: Function,
  isEdit:boolean
}
const FormularioModal: React.FC<FormularioModalProps> = ({ isEdit,isVisible, setIsVisible, saveBook }) => {

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [year, setYear] = useState("")



  const handleSave = () => {

    if(title==""||author==""||year=="") {
      console.log("no se puede insertar faltan datos")
      return
    }
    const data = {
      title: title,
      author: author,
      year: year
    }
    saveBook(data)
    clean()
    setIsVisible(false)
  }

  const clean=()=>{
    setTitle("")
    setAuthor("")
    setYear("")
  }

  const close=()=>{
    clean()
    setIsVisible(false)
  }

  return (
    <Modal
      visible={isVisible}
      transparent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>{isEdit?"Actualizar":"Insertar"} Libro</Text>
          <Text>Titulo</Text>
          <TextInput
            onChangeText={(value) => setTitle(value)}
            placeholder='Ingrese el Titulo'
            style={styles.input} />
          <Text>Autor</Text>

          <TextInput
            onChangeText={(value) => setAuthor(value)}
            placeholder='Ingrese el Titulo'
            style={styles.input} />
          <Text>Año</Text>

          <TextInput
            onChangeText={(value) => setYear(value)}
            placeholder='Ingrese el Titulo'
            style={styles.input} />
          <Button title={isEdit?"Actualizar":"Insertar"} onPress={() => handleSave()} />
          <Button title='Cerrar' onPress={() =>close()} />
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