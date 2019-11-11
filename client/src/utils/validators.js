import zxcvbn from 'zxcvbn'

export const validateEmailFormat = value => {
    const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(value)
}

export const validateStrongPassword = value => {
    /*
        0 # too guessable: risky password. (guesses < 10^3) 
        1 # very guessable: protection from throttled online attacks. (guesses < 10^6) 
        2 # somewhat guessable: protection from unthrottled online attacks. (guesses < 10^8) 
        3 # safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 10^10) 
    */
    return zxcvbn(value).score > 1;
}
