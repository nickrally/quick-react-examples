export const Buttons = ({changeBy, inc, dec}) => {
    return(
        <>
            <button onClick={()=>inc()}>+ {changeBy}</button>
            <button onClick={()=>dec()}>- {changeBy}</button>
        </>
        
    )
}