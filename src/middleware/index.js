import { ADD_ARTICLE } from "../js/const/action-types";

const forbiddenWords  = ["spam","money"];

function forbiddenWordsMiddleware({dispatch}){
    return function(next){
        return function(action){
            if(action.type === ADD_ARTICLE){

                const foundWord = forbiddenWords.filter(
                    word => action.payload.title.includes(word)
                );
                if(foundWord.length){
                    return dispatch({type: "FOUND_BAS_WORD"});
                }
            }
            return next(action);
        };
    };
}