import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupGetAll";

export async function groupRemoveByName(groupDeleted:string) {
  try {
    const storedGroups = await groupsGetAll()

    // listar todos os grupos menos o deletado
    const groups = storedGroups.filter(group => group !== groupDeleted)

    // não removemos groups, porque queremos manter os outros cadastrados
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`)
  } catch (error) {
    throw error
  }
}