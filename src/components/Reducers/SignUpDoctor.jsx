

export const initialState = {
    firstStepData: {
        fullName: '',
        emailAddress: '',
        password: '',
    },
    secondStepData: {
        username: '',
        licenseId: '',
        birthDate: '',
        gender: '',
    },
    thirdStepData: {
        mobileNumber: '',
        nationalID: '',
        department: '',
    },
};


export const formReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIRST_STEP':
            return { ...state, firstStepData: { ...state.firstStepData, ...action.payload } };
        case 'UPDATE_SECOND_STEP':
            return { ...state, secondStepData: { ...state.secondStepData, ...action.payload } };
        case 'UPDATE_THIRD_STEP':
            return { ...state, thirdStepData: { ...state.thirdStepData, ...action.payload } };
        default:
            return state;
    }
};