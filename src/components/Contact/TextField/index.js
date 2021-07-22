import { useField } from 'formik';
// import * as Yup from 'yup';
import { TextField } from '@material-ui/core';


const TextFieldWrapper = ({name, ...otherprops}) => {

  const [field, meta] = useField(name)

  const configTextField = {
    ...field,
    ...otherprops,
    fullWidth: true,
    variant: "outlined"
  }

  if(meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }


  return (
    <TextField {...configTextField} />
      
  )
}

export default TextFieldWrapper
