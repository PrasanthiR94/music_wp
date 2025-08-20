import './ConfirmButton.css'

function ConfirmButton(props){

    return(
        <button onClick={props.onClick} className="common_btn">{props.children}</button>
    )
}

export default ConfirmButton