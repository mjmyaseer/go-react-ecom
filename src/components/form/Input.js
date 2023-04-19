import { forwardRef } from "react"

const Input = forwardRef((props, ref) => {
    return (
        <div className="mb-3">
            <label htmlFor={props.name} className="form-label">
                {props.title}
            </label>
            
            <input 
            type={props.type}
            name={props.name}
            id={props.id}
            autoComplete={props.autoComplete}
            placeholder={props.placeholder}
            onChange={props.onChange}
            ref={ref}
            value={props.value}
            className={props.className}
            />
            <div className={props.errorDiv}>{props.errorMsg}</div>
        </div>
    )
})

export default Input;