import { ActionType } from "../actionType";
import { BASE_URL,ALL_CATEGORY } from "../../utils/constants";
import axios from "axios"; 
import notificationWithIcon from "../../utils/notification";
// import { useHistory } from 'react-router-dom';
 
export const setCategoriesSuccess = (Categories) => {
    return {
      type: ActionType.CATEGORY_LIST_SUCCESS,
      payload: Categories,
    };
};
 
 
export const setCategoryForEdit = (CategoryDetials) => {
    return {
      type: ActionType.SET_CATEGORY_FOR_UPDATE,
      payload: CategoryDetials,
    };
};
 

export const CategoryAddAction = (categoryAddData) => { 
    return async (dispatch, getState) => {
            const {authStore} = getState();
            const token = authStore.token;
        try {
            const response = await axios.post(`${BASE_URL}/category`, {
            name: categoryAddData.name,
            description: categoryAddData.description 
            },{ headers: { authorization: `bearer ${token}` }, }
        );  
        notificationWithIcon('success',categoryAddData.name+" added successfully."); 
        }catch(error){
            notificationWithIcon('error',"Category add failed."); 
            console.log(error,"category add errooor");
        }
    }
}

export const SingleCategorySetForUpdateAction = (categoryid) => { 
    return async (dispatch, getState) => {
            const {authStore} = getState();
            const token = authStore.token;
            // console.log(token);

        try {
                const response = await axios.get(`${BASE_URL}/category/${categoryid}`, {
            },
            {
                headers: { authorization: `bearer ${token}` },
            }); 
      
            dispatch(setCategoryForEdit(response.data)); 
        }catch(error){ 
            console.log(error,"category add errooor");
        }
    }
}

export const CategoryUpdateAction = (categoryAddData, categoryid) => { 
    return async (dispatch, getState) => {
            const {authStore} = getState();
            const token = authStore.token;
            // console.log(token);

        try {
                const response = await axios.patch(`${BASE_URL}/category/${categoryid}`, {
                name: categoryAddData.name,
                description: categoryAddData.description 
            },
            {
                headers: { authorization: `bearer ${token}` },
            }); 
            notificationWithIcon('success',categoryAddData.name+ " updated successfully."); 
        }catch(error){
            notificationWithIcon('error',"Failed to delete "+categoryAddData.name); 
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
                const response = await axios.delete(`${BASE_URL}/category/${categoryid}`,
            {
                headers: { authorization: `bearer ${token}` },
            });
            notificationWithIcon('success'," Successfully deleted."); 
            dispatch(CategoryListAction); 
        }catch(error){
            notificationWithIcon('error',"Category delete failed!");
            console.log(error,"category delete errooor");
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