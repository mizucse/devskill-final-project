import { ActionType } from "../actionType";
import { BASE_URL,ALL_CATEGORY } from "../../utils/constants";
import axios from "axios"; 
import { useHistory } from 'react-router-dom';
 

export const CategoryAddAction = (categoryAddData) => {
    
    const history = useHistory();

    axios.post(`${BASE_URL}/category`,{
        name: categoryAddData.name,
        description: categoryAddData.description   
    })
    .then((response)=>{

        console.log(response.data, "=== response in category add ===")
        history.push(`${ALL_CATEGORY}`);
    }).catch((error)=>{
        console.log(error, "===response error in category add ===")

    });


    // return async (dispatch, action) => {
    //     try {
    //             const response = await axios.post(`${BASE_URL}/category`, {
    //             name: categoryAddData.name,
    //             username: categoryAddData.description
    //         }); 
    //     }catch(error){
    //         console.log(error,"signup errooor");
    //     }

    // }
}