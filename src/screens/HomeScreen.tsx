import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native'
import ListBooks from '../components/ListBooks'
import { useEffect, useState } from 'react'
import { Book } from '../interfaces/book'
import FormularioModal from '../components/FormularioModal'

const HomeScreen = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [book, setBook] = useState({} as Book)

  const readBooks = () => {
    fetch("http://192.168.0.14:3002/books")
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(error => console.log("mierror", error))
  }

  useEffect(() => {
    //lectura de libros de api
    readBooks()

  }, [])

  const saveBook = (book: Book, id: string) => {
    // console.log("libro insertado", book)
    if (!isEdit) {
      fetch("http://192.168.0.14:3002/books", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // You can include additional headers here
        },
        body: JSON.stringify(book)
      })
        .then(res => {
          console.log("Libro insertado")
          readBooks()
        })
        .catch(error => console.log("mierror", error))
    } else {
      fetch(`http://192.168.0.14:3002/books/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // You can include additional headers here
        },
        body: JSON.stringify(book)
      })
        .then(res => {
          console.log("Libro actualizado")
          readBooks()
        })
        .catch(error => console.log("mierror", error))

    }
  }

  const deleteBook = (id: string) => {
    console.log(`se eliminara este id ${id}`)

    fetch(`http://192.168.0.14:3002/books/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        console.log("Libro Eliminado")
        readBooks()
      })
      .catch(error => console.log("mierror", error))
  }

  const detailBook = (id: string) => {
    fetch(`http://192.168.0.14:3002/books/${id}`)
      .then(res => res.json())
      .then(data => {
        Alert.alert(
          'Detalle Libro',
          `IDBook: ${data.id} \nTitulo:${data.title} \nAutor:${data.author} \nAño:${data.year}`,
          [
            { text: 'Cerrar', onPress: () => console.log('OK Pressed') }
          ],
          { cancelable: false }
        );
      })
      .catch(error => console.log("mierror", error))
  }

  const showEditModal = (book: Book) => {
    console.log("se mostrara modal de edicion", book)
    setBook(book)
    setIsVisible(true)
    setIsEdit(true)
  }

  const showCreateModal = () => {
    setIsVisible(true)
    setIsEdit(false)
  }

  return (
    <View>
      <Text>App Books Bubbo</Text>
      <Pressable style={styles.boton_agregar} onPress={() => showCreateModal()}>
        <Text>Agregar</Text>
      </Pressable>
      {isVisible
        ? <FormularioModal isEdit={isEdit} isVisible={isVisible} setIsVisible={setIsVisible} saveBook={saveBook} book={book} />
        : ""}
      <ListBooks books={books} deleteBook={deleteBook} detailBook={detailBook} showEditModal={showEditModal} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  boton_agregar: {
    backgroundColor: "green",
    height: 50

  }
})