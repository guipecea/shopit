import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <h3>{greeting}</h3>
            <ItemCount initial={1} stock={0} onAdd={(quantity) => console.log("Cantidad agregada: ", quantity)}></ItemCount>
        </>
    )
}
export default ItemListContainer