import { ActionType } from "../actionType";
import { BASE_URL,ALL_CATEGORY } from "../../utils/constants";
import axios from "axios"; 
// import { useHistory } from 'react-router-dom';
 
export const setCategoriesSuccess = (Categories) => {
    return {
      type: ActionType.CATEGORY_LIST_SUCCESS,
      payload: Categories,
    };
};
 

export const CategoryAddAction = (categoryAddData) => { 
    return async (dispatch, getState) => {
            const {authStore} = getState();
            const token = authStore.token;
            // console.log(token);

        try {
                const response = await axios.post(`${BASE_URL}/category`, {
                name: categoryAddData.name,
                description: categoryAddData.description 
            },
            {
                headers: { authorization: `bearer ${token}` },
            }); 
        }catch(error){
            console.log(error,"category add errooor");
        }
    }
}

export const CategoryUpdateAction = (categoryid) => { 
    return async (dispatch, getState) => {
            const {authStore} = getState();
            const token = authStore.token;
            // console.log(token);

        try {
                const response = await axios.patch(`${BASE_URL}/category/${categoryid}`, {
                // name: categoryAddData.name,
                // description: categoryAddData.description 
            },
            {
                headers: { authorization: `bearer ${token}` },
            }); 
        }catch(error){
            console.log(error,"category add errooor");
        }
    }
}

export const CategoryDeleteAction = (categoryid) => { 
  console.log(categoryid, "category id==== in CategoryDeleteAction");
    return async (dispatch, getState) => {
            const {authStore} = getState();
            const token = authStore.token;
            // console.log(token);

        try {
                const response = await axios.delete(`${BASE_URL}/category/${categoryid}`, {},
            {
                headers: { authorization: `bearer ${token}` },
            });
            dispatch(CategoryListAction); 
        }catch(error){
            console.log(error,"category add errooor");
        }
    }
}

   

export const CategoryListAction  = () => { 
    return async (dispatch, getState) => {
        const {authStore} = getState();
        const token = authStore.token;
      try {
        const response = await axios.get(
          "http://localhost:8080/category",{},
          {
            headers: { authorization: `bearer ${token}` },
          }
        );
      
        dispatch(setCategoriesSuccess(response.data));
        // console.log(response.data);
       } catch (error) {
          console.log(error.response);
      }
    };
  };