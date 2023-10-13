import {useRef, useEffect} from "react";
import {useField} from "@unform/core";
import PropTypes from 'prop-types';

const InputText = (props) => {
    const inputRef = useRef(null);
    const {
        className,
        registerField,
        fieldName,
        error
    } = props;

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: ref => {
                return ref.current.value
            },
            setValue: (ref, value) => {
                ref.current.value = value
            },
            clearValue: ref => {
                ref.current.value = ''
            },
        })
    } , [fieldName , registerField]);

    return (
        <input {...props} ref={inputRef} className={`${className} ${error?"is-invalid":""}`}/>
    )
}

const Textarea = (props) => {
    const inputRef = useRef(null);
    const {
        className,
        registerField,
        fieldName,
        error
    } = props;

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: ref => {
                return ref.current.value
            },
            setValue: (ref, value) => {
                ref.current.value = value
            },
            clearValue: ref => {
                ref.current.value = ''
            },
        })
    } , [fieldName , registerField]);

    return (
        <textarea {...props} ref={inputRef} className={`${className} ${error?"is-invalid":""}`}>
            {props?.defaultValue}
        </textarea>
    )
}

function Input(props){

    const {
        name,
    } = props;

    const field = useField(name);

    switch (props.type) {
        case"textarea":
        return <Textarea {...props} {...field}/>
        case"text":
        return <InputText {...props} {...field} />
        default:
        return <InputText {...props} {...field} />
    }
}

export default Input;


// -- PropTypes

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
};

InputText.propTypes = {
    className: PropTypes.string,
    registerField: PropTypes.func.isRequired,
    fieldName: PropTypes.string.isRequired,
    error: PropTypes.bool,
};

Textarea.propTypes = {
    className: PropTypes.string,
    registerField: PropTypes.func.isRequired,
    fieldName: PropTypes.string.isRequired,
    error: PropTypes.bool,
    defaultValue: PropTypes.string
};

