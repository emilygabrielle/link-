import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const DialScreenButton: React.FC = () => {
  const handlePress = async () => {
    const phoneNumber = '18996202380';
    const url = 'tel:${18 991447752}';

    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('Erro ao abrir a tela de discagem: ', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Ionicons  size={20}  name='keypad-outline' color={'#008f00'} style={styles.icons} />
      <ThemedText style={styles.text}>Telefone</ThemedText>
    </TouchableOpacity>
  );
};

const InstagramButton: React.FC = () => {
  const handlePress = async () => {
    const url = 'https://www.instagram.com/_emilygabrielle__';

    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('Erro ao abrir o Instagram: ', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Ionicons  size={19}  name='logo-instagram' color={'#b85294'} style={styles.icons} />
      <ThemedText style={styles.text}>Instagram</ThemedText>
    </TouchableOpacity>
  );
};

const LinkedinButton: React.FC = () => {
  const handlePress = async () => {
    const url = 'https://www.linkedin.com/in/emily-bonfim-84a48b313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';

    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('Erro ao abrir o LinkedIn: ', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Ionicons  size={20}  name='logo-linkedin' color={'#2a83c2'} style={styles.icons} />
      <ThemedText style={styles.text}>LinkedIn</ThemedText>
    </TouchableOpacity>
  );
};



const EmailButton: React.FC = () => {
  const handlePress = async () => {
    const email = 'mailto:emilygabriellebonfimsantos@gmail.com';

    try {
      await Linking.openURL(email);
    } catch (error) {
      console.error('Erro ao abrir o e-mail: ', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Ionicons  size={20}  name='mail' color={'#ad2003'} style={styles.icons} />
      <ThemedText style={styles.text}>E-mail</ThemedText>
    </TouchableOpacity>
  );
};
const GithubButton: React.FC = () => {
  const handlePress = async () => {
    const url = 'https://github.com/emilygabrielle';

    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('Erro ao abrir o GitHub: ', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Ionicons  size={20}  name='logo-github' style={styles.icons}  />
      <ThemedText style={styles.text}>GitHub</ThemedText>
    </TouchableOpacity>
  );
};
const TikTokButton: React.FC = () => {
  const handlePress = async () => {
    try {
      await Linking.openURL('https://www.tiktok.com/@___emily__s2?lang=pt-BR');
    } catch (error) {
      console.error('Erro ao abrir o TikTok: ', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Ionicons  size={20}  name='logo-tiktok' color={'#180000'} style={styles.icons}  />
      <ThemedText style={styles.text}>TikTok</ThemedText>
    </TouchableOpacity>
  );
};


const WhatsAppButton: React.FC = () => {
  const handlePress = async () => {
    const phoneNumber = '5518991447752'; // Inclua o código do país e remova caracteres especiais
    const url = `whatsapp://send?phone=${phoneNumber}`;

    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('Erro ao abrir o WhatsApp: ', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Ionicons size={20} name='logo-whatsapp' color='#25D366' style={styles.icons} />
      <ThemedText style={styles.text}>WhatsApp</ThemedText>
    </TouchableOpacity>
  );
};



export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D880', dark: '#35936' }}
      headerImage={
        <ThemedView style={styles.headerContainer} >
          <Image source={require('@/assets/images/mar.png')} style={styles.mar} />
          <Image source={require('@/assets/images/foto.png')} style={styles.foto}/>
 
        </ThemedView>
        
      }
    >
      <ThemedView style={styles.containerButton}>
        <ThemedText style={styles.escrita}>Emily Bonfim</ThemedText>
        <InstagramButton />
        <TikTokButton />
        <DialScreenButton />
        <LinkedinButton />
        <EmailButton />
        <GithubButton />
        <WhatsAppButton/>
     
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    height: 300, 

  },
  mar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
    position: 'absolute',
    zIndex: 0,
  },

  containerButton: {
    marginTop: 50,
    flexDirection: 'column',
    gap: 8,
  },
 button: {
    borderRadius: 9,
    height: 50,
    backgroundColor: '#ecf3ff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: "space-around",
  },
  text: {
    marginLeft: -210,
    marginTop: 2,
    color:'#040004',
    
    
},
escrita:{
  marginTop:-60,
  fontSize:20,
  padding:7,
  textAlign:'center',
  color:'#eafdff',
},
foto:{
  width: 180,
  height: 180,
  borderRadius: 200,
  position: 'absolute',
  zIndex: 1,
  top: 30, 
  left: 105, 
  borderColor: '#062744',
  borderWidth: 3 ,  
  marginTop:27,

},
icons:{
  marginLeft:-80,
}

 
});

