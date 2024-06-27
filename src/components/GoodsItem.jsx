export default function GoodsItem(props) {
    const {
        mainId: id,
        displayName: name,
        displayDescription: description,
        price: { regularPrice: price },
        displayAssets: [{ full_background }],
        addToBasket,
    } = props;
    return (
        <div
            className='card'
            id={id}
        >
            <div className='card-image'>
                <img
                    src={full_background}
                    alt={name}
                />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() => addToBasket({ id, name, price })}
                >
                    Buy
                </button>
                <span className='right'>{price}</span>
            </div>
        </div>
    );
}
