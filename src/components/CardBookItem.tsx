import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Book } from '../interfaces/book'

interface CardBookItemProps {
  book: Book,
  deleteBook: Function,
  detailBook: Function,
  showEditModal: Function
}
const CardBookItem: React.FC<CardBookItemProps> = ({ book, deleteBook, detailBook, showEditModal }) => {
  return (
    <Pressable onPress={() => { detailBook(book.id) }}>

      <View style={styles.cardBook}>
        <View style={styles.cardBoxText}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.subTitle}>{book.author}</Text>
        </View>
        <View style={styles.cardBoxButtons}>
          <Button color={"#fff"} title="✏️" onPress={() => { showEditModal(book) }} />
          <Button color={"#fff"} title="👁️" onPress={() => { detailBook(book.id) }} />
          <Button color={"#fff"} title="❌" onPress={() => { deleteBook(book.id) }} />
        </View>
      </View>
    </Pressable>
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
  cardBoxButtons: {
    flex: 2,
    gap: 7,
    flexDirection: "row"
  },
  cardBoxText: {
    flex: 3
  },
  title:{
    fontSize:18,
    fontWeight:"700"
  },
  subTitle:{
    
  }
})