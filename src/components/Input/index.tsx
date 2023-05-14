import { TextInputProps, TextInput } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container } from './styles';

type Props =TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function Input({inputRef, ...rest}: Props) {
  // { COLORS } também dá para usar - modo desestruturado 
  const theme = useTheme()

  return (
    <Container 
      ref={inputRef}
      placeholderTextColor={theme.COLORS.GRAY_300}
      {...rest}
    />
  )
}