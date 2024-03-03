
export const validator = (data, config) => {
    const errors = {}

    const validate = (validateMethod, data, config) => {
        const dataTrim = data.trim()
        let statusValue

        switch(validateMethod){
            case "isRequired":
                statusValue = dataTrim === ""  
                break
            case "isEmail":
                const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                statusValue = !emailReg.test(data)
                break
            case "isCapitalSymbol":
                const capitalSymbolReg = /[A-Z]+/g
                statusValue = !capitalSymbolReg.test(data)
                break
            case "isContainDigit":
                const containDigit = /\d+/g
                statusValue = !containDigit.test(data)
                break
            case "min":
                statusValue = dataTrim.length < config.value
                break
            default:
                break
        }

        if (statusValue) return config.massage
    };


    for (const dataKey in data) {
        for (const validateMethod in config[dataKey]) {
            const error =  validate(
                validateMethod, 
                data[dataKey], 
                config[dataKey][validateMethod]
            )

            if (error && !errors[dataKey]) {
                errors[dataKey] = error
            }
        }
    }

    return errors
};
