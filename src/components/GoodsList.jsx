import GoodsItem from './GoodsItem';

export default function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    return (
        <div className='goods'>
            {goods.length ? (
                goods.map((item) => (
                    <GoodsItem
                        key={item.mainId}
                        {...item}
                        addToBasket={addToBasket}
                    />
                ))
            ) : (
                <h4>Nothing found!</h4>
            )}
        </div>
    );
}
