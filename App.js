import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Platform,
} from 'react-native';
import Task from './src/components/Task';
import {
  paddingSizes,
  fontSizes,
  margSizes,
  borderSizes,
} from './src/utils/Sizes';
import { colors } from './src/utils/Colors';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* this was added so we can scroll the view when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <Text style={styles.SecondTitle}>
            What would you like to focus on?
          </Text>
          <View style={styles.items}>
            {/* Tasks will go here! */}
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}>
                  <Task addText={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={"What will be today's task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? paddingSizes.md : paddingSizes.lg,
    backgroundColor: colors.lightBlue,
  },
  tasksWrapper: {
    paddingTop: paddingSizes.xxxl,
    paddingHorizontal: paddingSizes.lg,
  },
  sectionTitle: {
    color: colors.gray,
    fontWeight: 'bold',
    fontSize: fontSizes.xl,
    textAlign: 'center',
  },
  SecondTitle: {
    color: colors.gray,
    fontWeight: 'light',
    fontSize: fontSizes.md,
    textAlign: 'center',
    marginBottom: margSizes.md,
  },
  items: {
    marginTop: margSizes.xl,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: paddingSizes.md,
    paddingHorizontal: paddingSizes.md,
    backgroundColor: colors.white,
    borderRadius: 60,
    borderColor: colors.lightGray,
    borderWidth: borderSizes.sm,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: colors.white,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.lightGray,
    borderWidth: 1,
  },
  addText: { color: colors.gray },
});
