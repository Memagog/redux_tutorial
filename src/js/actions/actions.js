import { ADD_ARTICLE } from "../const/action-types";

const  addArticle = (payload) => {
    return {type: ADD_ARTICLE,payload}
};

export default addArticle;