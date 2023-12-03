import * as yup from "yup"

export const formValidation = yup.object({
    name: yup.string().required("To pole jest wymagane"),
    email: yup.string().email("To pole musi być typu email").required("To pole jest wymagane"),
    message: yup.string().min(3, "Wiadomość jest za krótka").required("To pole jest wymagane")
})

export const labels = {
    globalError: 'Wystąpił błąd',
    successMsg: 'Wiadomość została wysłana'
}