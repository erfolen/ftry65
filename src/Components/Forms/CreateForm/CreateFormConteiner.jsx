import {connect} from "react-redux";
import FormPage from "../../FormPage/FormPage";
import {addCreateForm} from "../../../redux/create-form";

const mapStateToProps = (state) => {
    return {
        createFormData : state.createForm.createFormData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createForm: (inputBuild, textareaBuild, checkboxBuild) => {
            dispatch(addCreateForm(inputBuild, textareaBuild, checkboxBuild));
        }
    }
}

const CreateFormConteiner = connect(mapStateToProps, mapDispatchToProps)(FormPage);

export default CreateFormConteiner;