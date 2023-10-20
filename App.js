import { StatusBar, SafeAreaView, View} from 'react-native';
import Cesta from './src/screens/cesta/Cesta';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';
import cesta from './src/mocks/cesta';
import AppLoading from 'expo-app-loading';

export default function App() {
  const[fontecarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if(!fontecarregada){
    return <AppLoading/>
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...cesta} />
    </SafeAreaView>
  );
}