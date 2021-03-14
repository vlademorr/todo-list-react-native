import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { AddTodo, Navbar, Todo, Modal } from './src';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [todoId, setTodoId] = useState('');

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title
    };

    setTodos(prev => [
      ...prev,
      newTodo
    ])
  };

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(item => item.id !== id))
  };

  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Todo setTodoId={setTodoId} setModalOpen={setModalOpen} todo={item} />}
        />
      </View>
      <Modal
        bodyText="Are you sure you want to remove this item?"
        btnText="Delete"
        todoId={todoId}
        onChange={removeTodo}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
