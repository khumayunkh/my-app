export function Product(props) {
    return (
        <>
        <h1>
            {props.title}
        </h1>
        {
            props.data.map(
                (item) => (
                    <img src={item.image}/>
                )
            )
        }
        </>
    )
}
