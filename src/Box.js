export const Box = ({setChangeBy}) => {
    return (
        <>
            <input type="text" onChange={(e) => setChangeBy(parseInt(e.target.value))} />
        </>
    )
}