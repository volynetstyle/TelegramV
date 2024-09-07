import { defineStore } from 'pinia'

// Enum for screen types
export enum LeftScreens {
  Chats = 0,
  Contacts, 
  Settings,
  Archived,
}

export const useUIStore = defineStore('ui', {
  state: () => ({
    leftColumn: true,     
    leftColumnScreen: LeftScreens.Chats, 
    rightColumn: false,    
  }),
  
  getters: {
    leftColumnScreenName(state): string {
      return LeftScreens[state.leftColumnScreen];
    },
    bothColumnsOpen(state) {
      return state.leftColumn && state.rightColumn;
    }
  },
  
  actions: {
    toggleLeftColumn() {
      this.leftColumn = !this.leftColumn;
    },
    toggleRightColumn() {
      this.rightColumn = !this.rightColumn;
    },
    setLeftColumnScreen(screen: LeftScreens) {
      this.leftColumnScreen = screen;
    },
    closeBothColumns() {
      this.leftColumn = false;
      this.rightColumn = false;
    },
    resetUIState() {
      this.$reset();
    },
  },

})

export default useUIStore;
