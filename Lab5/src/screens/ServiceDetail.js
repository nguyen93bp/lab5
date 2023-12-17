// ServiceDetail.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

const ServiceDetail = ({ route }) => {
  const { service } = route.params;
  const navigation = useNavigation();

  const deleteService = async () => {
    try {
      await firestore().collection('services').doc(service.id).delete();
      console.log('Dịch vụ đã được xóa thành công khỏi Firestore');
      navigation.navigate('Admin');
    } catch (error) {
      console.error('Lỗi khi xóa dịch vụ khỏi Firestore:', error);
      alert('Lỗi khi xóa dịch vụ khỏi Firestore');
    }
  };

  const editService = () => {
    navigation.navigate('EditService');
  };

  const confirmDeleteService = () => {
    Alert.alert(
      'Xác nhận',
      'Bạn có chắc muốn xóa dịch vụ này?',
      [
        { text: 'Hủy bỏ', style: 'cancel' },
        { text: 'Xóa', onPress: deleteService, style: 'destructive' },
      ],
      { cancelable: true }
    );
  };

  const options = [
    { label: 'Edit', value: 'edit' },
    { label: 'Delete', value: 'delete' },
  ];

  const handleDropdownChange = (item) => {
    if (item.value === 'edit') {
      editService();
    } else if (item.value === 'delete') {
      deleteService();
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Service Detail</Text>
      <Text>Name: {service.name}</Text>
      <Text>Description: {service.description}</Text>
      {/*<TouchableOpacity style={styles.moreOptions} onPress={editService}>
        <Text style={styles.moreOptionsText}>Edit</Text>
      </TouchableOpacity>*/}
       <TouchableOpacity style={styles.moreOptions} onPress={confirmDeleteService}>
        <Text style={[styles.moreOptionsText, { color: 'red' }]}>Delete</Text>
      </TouchableOpacity>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  moreOptions: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  moreOptionsText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default ServiceDetail;
