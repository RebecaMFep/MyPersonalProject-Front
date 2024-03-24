import { defineStore } from 'pinia';
import axios from 'axios';

export const useContentStore = defineStore('contentActivity', {
  state: () => ({
    content: null,
    isLoading: false, 
  }),
  actions: {
    async fetchContentById(id_event) {
      this.isLoading = true; 
      const response = await axios.get(`http://localhost:8080/api/v1/activities/${id_activity}`);
      this.content = response.data;
      this.isLoading = false; 
  },
},

});