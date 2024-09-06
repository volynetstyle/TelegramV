import { defineStore } from 'pinia'

// Define types for better structure and maintainability
interface Chat {
  id: string;
  title: string;
  participants: number[];
  lastMessage: string;
  unreadCount: number;
}

interface Message {
  id: string;
  chatId: string;
  senderId: number;
  text: string;
  timestamp: Date;
  edited: boolean;
  replyToMessageId?: string;
}

export const useChatStore = defineStore('chat', {
  state: () => ({
    chats: [] as Chat[],
    selectedChatId: null as string | null,
    messages: [] as Message[],
    selectedMessageId: null as string | null,
    searchQuery: '',
    filteredMessages: [] as Message[],
  }),

  getters: {
    selectedChat(state) {
      return state.chats.find(chat => chat.id === state.selectedChatId) || null;
    },
    filteredMessages(state) {
      if (!state.selectedChatId) return [];
      return state.messages.filter(message => message.chatId === state.selectedChatId);
    },
    searchedMessages(state) {
      const query = state.searchQuery.toLowerCase();
      if (!state.selectedChatId) return [];
      return state.filteredMessages.filter(message => message.text.toLowerCase().includes(query));
    },
    unreadMessages(state) {
      return state.chats.reduce((total, chat) => total + chat.unreadCount, 0);
    },
  },

  actions: {
    selectChat(chatId: string) {
      this.selectedChatId = chatId;
    },
    
    addChat(chat: Chat) {
      this.chats.push(chat);
    },

    addMessage(message: Message) {
      this.messages.push(message);
      const chat = this.chats.find(chat => chat.id === message.chatId);
      if (chat) {
        chat.lastMessage = message.text;
        chat.unreadCount += 1;
      }
    },

    markChatAsRead(chatId: string) {
      const chat = this.chats.find(chat => chat.id === chatId);
      if (chat) chat.unreadCount = 0;
    },

    editMessage(messageId: string, newText: string) {
      const message = this.messages.find(message => message.id === messageId);
      if (message) {
        message.text = newText;
        message.edited = true;
      }
    },

    deleteMessage(messageId: string) {
      this.messages = this.messages.filter(message => message.id !== messageId);
    },

    setSearchQuery(query: string) {
      this.searchQuery = query;
    },
    
    replyToMessage(messageId: string, replyText: string, senderId: number) {
      const originalMessage = this.messages.find(msg => msg.id === messageId);
      
      if (originalMessage) {
        const replyMessage: Message = {
          id: `msg_${Date.now()}`,
          chatId: originalMessage.chatId,
          senderId,
          text: replyText,
          timestamp: new Date(),
          edited: false,
          replyToMessageId: originalMessage.id,
        };
        this.addMessage(replyMessage);
      }
    }
  },
});
