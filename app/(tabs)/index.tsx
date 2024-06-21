
import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#AEDC', dark: '#13747d' }}
      headerImage={
        <ThemedView style={styles.mar}>
        <Image source={require('@/assets/images/sol.png')} style={styles.mar} />
        <Image source={require('@/assets/images/onda.png')} style={styles.reactLogo} />
        </ThemedView>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Seja Bem-Vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Minhas Redes Sociais</ThemedText>
        <ThemedText>
          
 Bem-vindo à minha tela de atalhos sociais e de contato. Aqui você encontrará uma seleção dos meus
  perfis e formas de entrar em contato comigo.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    marginLeft:20,
    padding:10,
    
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    bottom: 0,
    left: -10,
    position: 'absolute',
    width: 140,
    height: 230,
  },
  mar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
    position: 'absolute',
  },
});
