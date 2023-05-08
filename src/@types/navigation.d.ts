export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      groups: undefined;
      new: undefined;
      players: {
        // Evitar passar objetos complexos
        group: string;
      }
    }
  }
}