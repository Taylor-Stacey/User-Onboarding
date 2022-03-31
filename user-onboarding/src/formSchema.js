import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required("Username required")
        .min(3, "Username must be three characters long"),
    email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .trim()
        .required("password required")
        .min(6, 'password must be 6 characters long'),
    tos: yup
    .boolean()
    .oneOf([true], 'must accept the terms and conditions!')
})

export default formSchema;