export default function BasketItem(props) {
    const { id, name, price, quantity, removeFromBasket, editQuantity } = props;
    return (
        <li
            id={id}
            className='collection-item'
        >
            {name} x
            <i
                className='material-icons basket-quantity'
                onClick={() => editQuantity('add', id)}
            >
                add
            </i>
            {quantity}
            <i
                className='material-icons basket-quantity'
                onClick={() => editQuantity('remove', id)}
            >
                remove
            </i>
            = {price * quantity}
            <span className='secondary-content'>
                <i
                    className='material-icons basket-delete'
                    onClick={() => removeFromBasket(id)}
                >
                    delete
                </i>
            </span>
        </li>
    );
}
