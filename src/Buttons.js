//export const Buttons = ({changeBy, inc, dec}) => {
export const Buttons = ({changeBy, setCount}) => {
    return(
        <>  {/*
            <button onClick={()=>inc()}>+ {changeBy}</button>
            <button onClick={()=>dec()}>- {changeBy}</button>
            */}
            <button onClick={()=>setCount(i => i + changeBy)}>+ {changeBy}</button>
            <button onClick={()=>setCount(i => i - changeBy)}>- {changeBy}</button>
        </>
        
    )
}