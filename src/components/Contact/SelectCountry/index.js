import { TextField, MenuItem } from "@material-ui/core";
import { useField, useFormikContext } from "formik";

const SelectCountry = ({
  name,
  options,
  ...otherprops
}) => {

  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(name)

  const handleChange = (e) => {
    const { value } = e.target
    setFieldValue(name,value)
  }


  const configSelect = {
    ...field,
    ...otherprops,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange
  }

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error
  }

  return (
    <TextField {...configSelect}> 
    {Object.keys(options).map((country,index) => {
      return (
        <MenuItem key={index} value={country}>
          {options[country]}
        </MenuItem>
      )
    })}
    </TextField>
  )
}

export default SelectCountry
