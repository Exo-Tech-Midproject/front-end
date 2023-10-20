

export const initialState2 = {
    firstStepData: {
        fullName: '',
        emailAddress: '',
        password: '',
    },
    secondStepData: {
        username: '',
        race: '',
        gender: ''
    },
    thirdStepData: {
        mobileNumber: '',
        birthdate: '',
        maritalStatus: ''
    },
};


export const formReducer2 = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIRST_STEP2':
            return { ...state, firstStepData: { ...state.firstStepData, ...action.payload } };
        case 'UPDATE_SECOND_STEP2':
            return { ...state, secondStepData: { ...state.secondStepData, ...action.payload } };
        case 'UPDATE_THIRD_STEP2':
            return { ...state, thirdStepData: { ...state.thirdStepData, ...action.payload } };
        default:
            return state;
    }
};