import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Book } from '../interfaces/book'
import CardBookItem from './CardBookItem'

interface ListBooksProps {
  books: Book[],
  deleteBook:Function,
  detailBook:Function,
  showEditModal:Function
}

const ListBooks: React.FC<ListBooksProps> = ({ books,deleteBook,detailBook,showEditModal }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={books}
        keyExtractor={elemento => elemento.id}
        renderItem={({ item }) =>
         <CardBookItem book={item} deleteBook={deleteBook} detailBook={detailBook} showEditModal={showEditModal}/>
        }
      />

    </View>
  )
}

export default ListBooks

const styles = StyleSheet.create({
  listContainer: {   
    paddingBottom:150
  },
})