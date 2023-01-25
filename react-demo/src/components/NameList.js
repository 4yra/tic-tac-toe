export const NameList = () => {
    const names = ['1', '2', '3', '4']
    return <>
        {
            names.map((name) => {
                return <h2 key={name}>{name}</h2>
            })
        }
    </>
}