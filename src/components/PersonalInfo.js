import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import { styles } from '../styles/AppStyles';

const PersonalInfo = () => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.name}>Felipe Moreno Borges</Text>
      <Text style={styles.bio}>Felipe Moreno Borges é desenvolvedor mobile especializado em Android e iOS, com forte expertise em Kotlin, além de Java e Swift. Liderou migrações de projetos, aplica TDD, CI/CD e design mobile. Trabalhou como instrutor e desenvolvedor, influenciando milhares de estudantes com conhecimentos em arquitetura, testes e Jetpack Compose.</Text>
      
      <View style={styles.contactContainer}>
        <Text style={styles.contactHeader}>Contato</Text>
        <Text style={styles.contactInfo}>Email: felipe.b2014@gmail.com</Text>
        <Text style={styles.contactInfo}>Telefone: (11) 97954-5699</Text>
    </View>
    
    <View style={styles.socialContainer}>
        <Text style={styles.socialHeader}>Redes Sociais</Text>
        
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/devcapu')}>
            <Text style={styles.socialLink}>LinkedIn</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/devcapu')}>
            <Text style={styles.socialLink}>GitHub</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/devcapu')}>
            <Text style={styles.socialLink}>Twitter</Text>
        </TouchableOpacity>
    </View>
</View>
);
};

export default PersonalInfo;
