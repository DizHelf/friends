import {useEffect, useState} from 'react';
import TextField from '../components/textField';
import { validator } from "../utils/validator"

const LoginPage = () => {
    const [data, setData] = useState({
        mail: "",
        password: "",
    })
    const [errors, setErrors] = useState({})
    const buttonVisible = Object.keys(errors).length === 0
    useEffect(() => {
        validate() 
    }, [data])


    const validateConfig = {
        mail: {
            isRequired: {
                massage: "поле email должно быть заполненно"
            },
            isEmail: {
                massage: "email не соответствует требованиям"
            }
        },
        password: {
            isRequired: {
                massage: "поле password должно быть заполненно"
            },
            isCapitalSymbol: {
                massage: "в поле password должен быть большой символ"
            },
            isContainDigit: {
                massage: "в породе должны быть цифры"
            },
            min: {
                value: 6,
                massage: `поле дожно содержать не менее 6 символов`,
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
        if (!isValidForm) return
        console.log(data);  
    };

    console.log();
    
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

                <button type='submit' disabled={!buttonVisible}>Submit</button>
            </form>
        </>
    );
};

export default LoginPage;
