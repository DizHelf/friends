import {useEffect, useState} from 'react';
import TextField from '../components/textField';
import { validator } from "../utils/validator"

const LoginPage = () => {

    const [data, setData] = useState({
        mail: "",
        password: "",
    })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        validate() 
    }, [data])


    const validateConfig = {
        mail: {
            isRequired: {
                massage: "поле email должно быть заполненно"
            }
        },
        password: {
            isRequired: {
                massage: "поле password должно быть заполненно"
            }
        }
    }

    const handleChange = ({target}) => {
        setData(prev => {
            return {...prev, [target.name]: target.value}
        })
    };

    const validate = () => {
        const errorsInfo = validator(data, validateConfig)
        setErrors(errorsInfo)

        return Object.keys(errorsInfo).length === 0
    };

    
    const handleSubmit = (e) => {
        e.preventDefault()

        const isValidForm = validate()

        if (!isValidForm) {
            return
        }

        console.log(data);  

    };

    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField 
                    error={errors["mail"]}
                    label={"Email"} 
                    type={"text"}
                    name={"mail"}
                    value={data.mail}
                    onChange={handleChange}
                />
                <TextField 
                    label={"Password"} 
                    type={"password"}
                    name={"password"}
                    value={data.password}
                    onChange={handleChange}
                    error={errors["password"]}
                />

                <button type='submit'>Submit</button>
            </form>
        </>
    );
};

export default LoginPage;
