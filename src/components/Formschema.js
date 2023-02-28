import * as Yup from "yup";
export const FormSchema=Yup.object({
    name:Yup.string().min(3,'Too short').max(20,'Too long').required('Name is must '),
    email:Yup.string().email('invalid email').required('Email is required')
});