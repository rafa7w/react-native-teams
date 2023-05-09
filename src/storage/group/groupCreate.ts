import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storageConfig';

export async function groupCreate(newGroupName:string) {
  try {
    // ('key', 'value')
    await AsyncStorage.setItem(GROUP_COLLECTION, newGroupName)
  } catch(error) {
    throw error;
  }
}