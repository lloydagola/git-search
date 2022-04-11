import apiUtils from '../utils/apiUtils';

  export const fetchUsers = async (searchTerm:string) => {

    try{
      const {data = {}} = await apiUtils.get(`/search/users?q=${searchTerm}&page=2&per_page=6`)
      if(!data){
        console.log('sorry, no users found...')
        throw new Error('Error:sorry, no data received...')
      }

      return data

    }
    catch(err){
      console.log('sorry, an error occurred preventing the users from being fetched...')
      return{}
    }
  }

  export const fetchUser = async (searchTerm:string) => {

    try{
      const {data = {}} = await apiUtils.get(`/users/${searchTerm}`)
      if(!data){
        console.log('sorry, no users found...')
        throw new Error('Error:sorry, no data received...')
      }

      return data

    }
    catch(err){
      console.log('sorry, an error occurred preventing the users from being fetched...')
      return{}
    }
  }
