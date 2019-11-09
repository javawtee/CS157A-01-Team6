import IDTypeOptions from 'models/IDTypeOptions'

const passenger = () => {
    return {
        firstName: '',
        lastName: '',
        middleInitial: '',
        IDType: IDTypeOptions[1].text,
        IDNumber: '',
        email: '',
        sendConfirmation: 'no',
    }
}

export default passenger