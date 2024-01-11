import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Book } from '../interfaces/book'

interface CardBookItemProps {
  book: Book,
  deleteBook:Function,
  detailBook:Function,
  showEditModal:Function
}
const CardBookItem: React.FC<CardBookItemProps> = ({ book,deleteBook, detailBook,showEditModal }) => {
  return (
    <View style={styles.cardBook}>
      <View style={styles.cardBoxText}>
        <Text>{book.title}</Text>
        <Text>{book.author}</Text>
      </View>
      <View style={styles.cardBoxButtons}>
        <Button color={"#fff"} title="✏️" onPress={() =>{showEditModal(book)}} />
        <Button color={"#fff"} title="👁️" onPress={() =>{detailBook(book.id)}} />
        <Button color={"#fff"} title="❌" onPress={() =>{deleteBook(book.id)}} />
      </View>
    </View>
  )
}

export default CardBookItem

const styles = StyleSheet.create({
  cardBook: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 8,

  },
  cardBoxButtons:{
    flex:2,
    gap:7,
    flexDirection:"row"
  },
  cardBoxText:{
    flex:3
  },
})