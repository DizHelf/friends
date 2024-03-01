
export const validator = (data, config) => {
    const errors = {}

    const validate = (validateMethod, data, config) => {
        switch(validateMethod){
            case "isRequired":
                if(data.trim() === ""){
                    return config.massage
                }
                break
            default:
                break
        }
    };


    for (const dataKey in data) {
        for (const validateMethod in config[dataKey]) {
            const error =  validate(
                validateMethod, 
                data[dataKey], 
                config[dataKey][validateMethod]
            )

            if (error) {
                errors[dataKey] = error
            }
        }
    }

    return errors
};
