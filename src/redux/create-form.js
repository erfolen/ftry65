let initState = {
    createFormData:
        []
}

const createForm = (state = initState, action) => {

    switch (action.type) {
        case 'ADD_CREATE_FORM' :
            let stateCopy ={...state};
            stateCopy.createFormData=[...state.createFormData];
            let resitem = [];

            function createField(name, data) {
            for (let i = 1; i <= data; i++) {
                let fielditem ={};
                switch (name) {
                    case "inputBuild":
                        fielditem.name = `${name}-${i}`;
                        fielditem.component = "input";
                        fielditem.type = "text";
                        resitem.push(fielditem);
                        break
                    case  "textareaBuild":
                        fielditem.name = `${name}-${i}`;
                        fielditem.component = "textarea";
                        resitem.push(fielditem);
                        break
                    case "checkboxBuild":
                        fielditem.name = `${name}-${i}`;
                        fielditem.component = "input";
                        fielditem.type = "checkbox";
                        resitem.push(fielditem);
                        break
                    default:
                        return state;
                }
            }
        }

            createField('inputBuild', action.inputBuild);
            createField('textareaBuild', action.textareaBuild);
            createField('checkboxBuild', action.checkboxBuild);
            stateCopy.createFormData =resitem;
            return stateCopy;
        default:
            return state;
    }
 }
export const addCreateForm = (inputBuild, textareaBuild, checkboxBuild) => {
    return {
        type: 'ADD_CREATE_FORM', inputBuild, textareaBuild, checkboxBuild
    };
}
export default createForm;