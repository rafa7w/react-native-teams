import { ActivityIndicator } from 'react-native';
import { Groups } from '@screens/Groups';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import theme from './src/theme'

export default function App() {
  // Fazemos o carregamento das fontes aqui para que esteja disponível em toda a aplicação
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Groups /> : <ActivityIndicator />} 
    </ThemeProvider>
  );
}

