import { forwardRef } from 'react';
import style from './MyInput.module.css'


const MyInput = (props) => {
    return <input  className={style.form__input} {...props} />;

}

export default MyInput