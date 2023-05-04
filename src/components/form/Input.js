import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    return (
        <div className="mb-3">
            <label htmlFor={props.name} className="form-label">
                {props.title}
            </label>
            <input
                id={props.id}
                className={props.className}
                type={props.type}
                name={props.name}
                autoComplete={props.autoComplete}
                ref={ref}
                onChange={props.onChange}
                placeholder={props.placeholder}
                value={props.value}
            />
            <div className={props.errorDiv}>{props.errorMsg}</div>
        </div>
    )
})

export default Input;