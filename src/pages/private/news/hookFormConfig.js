import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
    name : Yup.string().required("Không được để trống !"),
    description : Yup.string().required()
})