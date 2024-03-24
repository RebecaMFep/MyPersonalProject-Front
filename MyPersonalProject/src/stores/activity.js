import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useActivityStore = defineStore('activity', () => {

  const activities = reactive([])
  const isLoading = ref(false)

  const getActivities = async () => {

    const uri = import.meta.env.VITE_APP_API_ENDPOINT

    try {
      isLoading.value = true
      
      const options = {
        baseURL: uri
      }

      const response = await axios.get('/activities', options)
      const data = await response.data
      await Object.assign(activities, data)
      isLoading.value = false
    } catch (error) {
      throw new Error('Error Loading API: ' + error)
    }
  }

  const deleteActivity = async (id) => {
    const uri = import.meta.env.VITE_APP_API_ENDPOINT
    const options = {
      baseURL: uri,
      withCredentials: true,
    }

    try {
      const response = await axios.delete(`/activities/${id}`, options)
      const status = response.status

      if (status == 202) {
        await getActivities()
        return true
      }
    } catch (error) {
      console.error('Error Deleting Activity:', error);
    }
  }

  // const editActivity = async (id) => {
  //   const uri = import.meta.env.VITE_APP_API_ENDPOINT
  //   const options = {
  //     baseURL: uri,
  //     withCredentials: true,
  //   }

    
  //   try {
  //     const response = await axios.edit(`/activities/${id}`, options)
  //     const status = response.status

  //     if (status == 202) {
  //       await editActivity()
  //       return true
  //     }
  //   } catch (error) {
  //     console.error('Error Editing Activity:', error);
  //   }}

  return { activities, getActivities, deleteActivity }
})
