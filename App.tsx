import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import AddItem, { IItem } from './src/components/AddItem';
import Item from './src/components/Item';

export default function App() {
  const [shoppingList, setShoppingList] = React.useState<IItem[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
      <View style={styles.contentWrapper}>
        <AddItem
          setShoppingList={setShoppingList}
          shoppingList={shoppingList}
        />
        <FlatList data={shoppingList} keyExtractor={ (item,index) => `${item.item}-${index}`} renderItem={({ item }) => <Item item={item.item} quantity={item.quantity} />} />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  contentWrapper: {
    padding: 20
  }
});
