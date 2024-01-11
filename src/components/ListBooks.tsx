import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Book } from '../interfaces/book'
import CardBookItem from './CardBookItem'

interface ListBooksProps {
  books: Book[]
}

const ListBooks: React.FC<ListBooksProps> = ({ books }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={books}
        keyExtractor={elemento => elemento.id}
        renderItem={({ item }) =>
         <CardBookItem book={item}/>
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