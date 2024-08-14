import styles from './ProductCard.module.css';
import cart from './../assets/whitecart.png';

function ProductCard({product}) {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img src={product.product_photos} alt='Product Image'/>
      </div>
      <div className={styles.down}>
        <p>{product.product_title}</p>
        <h2>{product.offer.price}</h2>
        <div className={styles.Addonbutton}>
          <img src={cart} alt="Add to cart icon" />
          "Add to cart"
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
