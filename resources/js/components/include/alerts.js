
const AlertError = (props) => {
    return(
        <div className="alert alert-danger" role="alert">
            {props.children}
        </div>
    )
}
export {
    AlertError
}