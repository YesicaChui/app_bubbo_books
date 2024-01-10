import { StyleSheet, Text, View } from 'react-native'
import ListBooks from '../components/ListBooks'
import { useEffect, useState } from 'react'
import { Book } from '../interfaces/book'

const dataBooks:Book[] =[
  {
    "id": "44otUZjGZPgk1HoePv0Z",
    "year": "2015",
    "author": "Jorge Espinoza",
    "title": "HTML"
  },
  {
    "id": "98iO3tMfWUeiOMWHiILp",
    "author": "Alex Marin",
    "year": "2020",
    "title": "Flowise IA"
  },
  {
    "id": "qfjW9GYA8pQ427sDU6jo",
    "year": "2023",
    "author": "Karen",
    "title": "CSS"
  }
]
const HomeScreen = () => {
  const [books, setBooks] = useState<Book[]>([])
  useEffect(()=>{
    //lectura de libros de api
    fetch("http://192.168.0.14:3002/books")
    .then(res=>res.json())
    .then(data=>  setBooks(data))
    .catch(error=>console.log("mierror",error))

  },[])
  return (
    <View>
    <Text>App Books Bubbo</Text>
    <ListBooks books={books}/>
  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})