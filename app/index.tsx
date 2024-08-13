import React from 'react';
import { View } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import CustomCard from '../components/CustomCard';
import CustomImage from '../components/CustomImage';

export default function App() {
  return (
    <View style={{ padding: 20 }}>
      <CustomInput />
      <CustomButton />
      <CustomCard />
      <CustomImage />
    </View>
  );
}