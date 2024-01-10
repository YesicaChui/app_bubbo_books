import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Book } from '../interfaces/book'

interface ListBooksProps {
  books: Book[]
}

const ListBooks: React.FC<ListBooksProps> = ({ books }) => {
  return (
    <View>
      <FlatList
        data={books}
        keyExtractor={elemento => elemento.id}
        renderItem={({ item }) =>
          <View>
            <Text>{item.title}</Text>
            <Text>{item.author}</Text>
          </View>
        }
      />

    </View>
  )
}

export default ListBooks

const styles = StyleSheet.create({})