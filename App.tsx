import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import PersonalInfo from './src/components/PersonalInfo';
import { styles } from './src/styles/AppStyles';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Meu App Pessoal</Text>
       <Image source={require('./src/assets/images/perfil.png')} style={styles.photo} />
        <PersonalInfo />
      </View>
    </ScrollView>
  );
};

export default App;