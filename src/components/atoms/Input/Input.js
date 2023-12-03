import React from "react";

import { 
    StyledInputWrapper, 
    StyledLabel, 
    StyledError,
    StyledTextArea,
    StyledInput
} from "./Input.styles";

const Input = ({ name, type, error, label, register }) => (
    <StyledInputWrapper>
        {label ? <StyledLabel htmlFor={name}>{label}</StyledLabel> : null}
        {(() => {
            switch(type){
                case 'textarea':
                    return <StyledTextArea id={name} {...register} />
                default: 
                    return <StyledInput id={name} type={type} {...register} />
            }
        })()}
        {error ? <StyledError>{error}</StyledError> : null}
    </StyledInputWrapper>
)

export default Input;