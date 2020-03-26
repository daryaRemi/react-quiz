import {QREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION} from "./actionsTypes";
import axios from "../../axios/axios-quiz";

export function createQuizQuestion(item) {
    return {
        type: QREATE_QUIZ_QUESTION,
        item
    }
}

export function resetQuizCreation() {
    return {
        type: RESET_QUIZ_CREATION
    }
}

export function finishCreateQuiz(item) {
    return async (dispatch, getState) => {
        axios.post('quizes.json', getState().create.quiz)
        dispatch(resetQuizCreation())
    }
}
