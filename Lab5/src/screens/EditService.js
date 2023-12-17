// EditService.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const EditService = ({ navigation }) => {
  
  const [editedServiceName, setEditedServiceName] = useState('');
  const [editedServiceDescription, setEditedServiceDescription] = useState('');

  const updateService = async () => {
    try {
      // Cập nhật thông tin dịch vụ trong Firestore
      await firestore().collection('services').update({
        name: editedServiceName,
        description: editedServiceDescription,
        // Cập nhật các trường khác tùy thuộc vào yêu cầu của bạn
      });

      console.log('Dịch vụ đã được cập nhật thành công trong Firestore');
      // Hiển thị thông báo thành công
      alert('Dịch vụ đã được cập nhật thành công trong Firestore');

      // Sau khi cập nhật thành công, chuyển đến màn hình "Admin"
      navigation.navigate('Admin');
    } catch (error) {
      console.error('Lỗi khi cập nhật dịch vụ trong Firestore:', error);

      // Hiển thị thông báo lỗi
      alert('Lỗi khi cập nhật dịch vụ trong Firestore');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tên dịch vụ"
        value={editedServiceName}
        onChangeText={(text) => setEditedServiceName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mô tả dịch vụ"
        value={editedServiceDescription}
        onChangeText={(text) => setEditedServiceDescription(text)}
      />
      <Button title="Cập nhật Dịch Vụ" onPress={updateService} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default EditService;
