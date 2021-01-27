import React from 'react';
import styles from './FormPage.module.css';
import BuildReduxForm from "./../Forms/BuildForm";
import InputForm from "../Forms/CreateForm/InputForm/InputForm";

const FormPage = (props) => {

    let addBuildForm = (values) => {
        props.createForm(values.inputBuild, values.textareaBuild, values.checkboxBuild);
    }

    return (
        <div>
            <div className={styles.form}>
                <BuildReduxForm onSubmit={addBuildForm}/>
            </div>
            <hr/>
            <div className={styles.createform}>
                <InputForm formData={props.createFormData}/>
            </div>
        </div>
    )
}

export default FormPage;