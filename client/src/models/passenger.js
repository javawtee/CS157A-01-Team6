import IDTypeOptions from 'models/IDTypeOptions'

const passenger = () => {
    return {
        firstName: '',
        lastName: '',
        middleInitial: '',
        IDType: IDTypeOptions[1].text,
        IDNumber: '',
        reservationEmail: '',
        sendConfirmation: 'no',
        validfirstName: true,
        validlastName: true,
        validmiddleInitial: true,
        validIDNumber: true,
        validreservationEmail: true,
    }
}

export default passenger