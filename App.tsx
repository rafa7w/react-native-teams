// import { ActivityIndicator } from 'react-native'
import { StatusBar } from 'react-native';
import { NewGroup } from '@screens/NewGroup';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Loading } from '@components/Loading';
import theme from './src/theme';

export default function App() {
  // Fazemos o carregamento das fontes aqui para que esteja disponível em toda a aplicação
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      { fontsLoaded ? <NewGroup /> : <Loading />} 
    </ThemeProvider>
  );
}

