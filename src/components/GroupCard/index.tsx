import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, Title } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
}

export function GroupCard({ title, ...rest }: Props) {
    return (
        // ...rest vai aqui pois ele é o nosso TouchableOpacity
        <Container {...rest}>
            <Icon />
            <Title>{title}</Title>
        </Container>
    )
}