import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import ListBooks from '../components/ListBooks'
import { useEffect, useState } from 'react'
import { Book } from '../interfaces/book'
import FormularioModal from '../components/FormularioModal'

const HomeScreen = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [isVisible, setIsVisible] = useState(false)

  const readBooks=()=>{
    fetch("http://192.168.0.14:3002/books")
    .then(res => res.json())
    .then(data => setBooks(data))
    .catch(error => console.log("mierror", error))
  }

  useEffect(() => {
    //lectura de libros de api
    readBooks()

  }, [])

  const createBook = (book: Book) => {
    // console.log("libro insertado", book)
    fetch("http://192.168.0.14:3002/books",{
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


  }


  return (
    <View>
      <Text>App Books Bubbo</Text>
      <Pressable style={styles.boton_agregar} onPress={() => setIsVisible(true)}>
        <Text>Agregar</Text>
      </Pressable>
      <FormularioModal isVisible={isVisible} setIsVisible={setIsVisible} saveBook={createBook}/>
      <ListBooks books={books} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  boton_agregar: {
    backgroundColor: "green",
    height:50

  }
})