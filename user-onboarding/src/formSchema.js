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
        .required("password required"),
    tos: yup.boolean(),
})

export default formSchema;