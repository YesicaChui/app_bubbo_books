import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Book } from '../interfaces/book'

interface CardBookItemProps {
  book: Book
}
const CardBookItem: React.FC<CardBookItemProps> = ({ book }) => {
  return (
    <View>
      <Text>{book.title}</Text>
      <Text>{book.author}</Text>
    </View>
  )
}

export default CardBookItem

const styles = StyleSheet.create({})