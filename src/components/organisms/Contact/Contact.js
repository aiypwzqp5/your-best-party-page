import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { useForm } from "react-hook-form"
import { StyledContact, StyledForm, StyledSuccessMessage, StyledGlobalError } from "./Contact.styles"
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledSecondTitle } from "../../../styles/sharedStyles";

import Input from "../../atoms/Input/Input"
import Button from "../../atoms/Button/Button"

import { formValidation, labels } from "./Contact.data"

const Contact = () => {
    const { datoCmsSekcjaKontakt } = useStaticQuery(graphql`
        query ContactQuery {
            datoCmsSekcjaKontakt {
                tytu
                tekstWPrzycisku
                labelEMail
                labelImi
                labelWiadomo
            }
        }
    `)

    const [isSend, setIsSend] = useState(false);
    const [isError, setIsError] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(formValidation),
      })

    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
                )
            .join("&");
    };

    const onSubmit = (data) => {
        fetch('/', {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "kontakt", ...data }),
        }).then(() => {
            setIsError(false);
            setIsSend(true);
        }).catch(() => setIsError(true))
    }

    const fields = [
        {
            type: 'text',
            name: 'name',
            label: datoCmsSekcjaKontakt.labelImi   
        },
        {
            type: 'email',
            name: 'email',
            label: datoCmsSekcjaKontakt.labelEMail   
        },
        {
            type: 'textarea',
            name: 'message',
            label: datoCmsSekcjaKontakt.labelWiadomo   
        },
    ]

  return (
    <StyledContact>
        <StyledSecondTitle>{datoCmsSekcjaKontakt.tytu}</StyledSecondTitle>
        <StyledForm 
            onSubmit={handleSubmit(onSubmit)}
            method='POST'
            name="kontakt"
            data-netlify="true"
        >
            {fields.map(({ name, type, label }) => (
                <Input 
                    key={name}
                    name={name}
                    type={type}
                    error={errors?.[name]?.message}
                    label={label}
                    register={register(name)}
                />
            ))}
            <Button type="submit" text={datoCmsSekcjaKontakt.tekstWPrzycisku} />
            {isError ? <StyledGlobalError>{labels.globalError}</StyledGlobalError> : null}
            {isSend ? <StyledSuccessMessage>{labels.successMsg}</StyledSuccessMessage> : null}
        </StyledForm>
    </StyledContact>
  )
}

export default Contact