import { useState, useCallback } from 'react';
import { FlatList, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupGetAll';

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'
import { Loading } from '@components/Loading';

// Outra forma de importar: import * as S from './styles'
import { Container } from './styles'

export function Groups() {
  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<string[]>(['Galera da Rocket', 'Amigos']);

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }
 
  async function fetchGroups() {
    try {
      setIsLoading(true)
      const data = await groupsGetAll()
      setGroups(data)
    } catch (error) {
      Alert.alert('Turmas', 'Não foi possível carregar as turmas.')
    } finally {
      setIsLoading(false)
    }
  }

  async function handleOpenGroup(group:string) {
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header />
      <Highlight 
        title='Turmas'
        subtitle='jogue com a sua turma'
      />

      {
        isLoading ? <Loading /> :

        <FlatList 
          data={groups}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <GroupCard 
              title={item}
              onPress={() => handleOpenGroup(item)}
            />
          )}
          contentContainerStyle={groups.length === 0 && {flex:1}}
          ListEmptyComponent={() => (
            <ListEmpty 
              message='Que tal cadastrar a primeira turma?'
            />
          )}
        />
      }

      <Button 
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
      
    </Container>
  );
}


