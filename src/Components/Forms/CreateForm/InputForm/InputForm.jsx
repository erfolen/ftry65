import {Field, reduxForm} from "redux-form";
import React from "react";
import styles from "./InputForm.module.css"

const InputForm = (props) => {

let inputCreateForm =props.formData.map(item => <div><Field name={item.name} component={item.component} type={item.type}/></div>);

    return (
        <form className={styles.form}>
            <div className={styles.createform}>
                {inputCreateForm}
            </div>

        </form>
    )
}
const InputReduxForm = reduxForm({form: "InputForm"})(InputForm);

export default InputReduxForm;
