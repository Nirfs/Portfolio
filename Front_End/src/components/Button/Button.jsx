export function Button({label, onClickButton}){
    return(
        <button onClick={onClickButton}>{label}</button>
    )
}