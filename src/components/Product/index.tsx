import { MdAddShoppingCart } from 'react-icons/md';

interface ProductFormatted {
  id: number;
  title: string;
  price: number;
  image: string;
  priceFormatted: string;
}

interface ProductProps{
  data: ProductFormatted;
}

const Product = ({data: {id, image, price, title, priceFormatted}}: ProductProps): JSX.Element => {

    function handleAddProduct() {
      // TODO
    }
    return (
        <li>
        <img src={image} alt={title} />
        <strong>{title}</strong>
        <span>{priceFormatted}</span>
        <button
          type="button"
          data-testid="add-product-button"
        onClick={handleAddProduct}
        >
          <div data-testid="cart-product-quantity">
            <MdAddShoppingCart size={16} color="#FFF" />
            {/* {cartItemsAmount[product.id] || 0} 2 */}
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    )
}

export default Product;