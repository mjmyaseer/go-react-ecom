const Alert = (props) => {
    return(
        <div className={"alert "+ props.className} role="alert"> {props.alertMessage}</div>
    )
}

export default Alert;