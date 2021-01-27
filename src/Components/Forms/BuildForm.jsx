import React from 'react';
import {Field, reduxForm} from "redux-form";
import styles from "./BuildForm.module.css"

const BuildForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.buildform}>
                <div className={styles.input}>
                    <label>input</label>
                    <Field name="inputBuild" component="input" type={"text"}/>
                </div>
                <div className={styles.textarea}>
                    <label>textarea</label>
                    <Field name="textareaBuild" component="input" type="text"/>
                </div>
                <div className={styles.checkbox}>
                    <label>checkbox</label>
                    <Field name="checkboxBuild" component="input" type="text"/>
                </div>
            </div>
            <button>Build</button>
        </form>

    )
}
const BuildReduxForm = reduxForm({form: 'buildForm'})(BuildForm);

export default BuildReduxForm;