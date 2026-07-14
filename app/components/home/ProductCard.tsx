import Image from "next/image";

type ProductCardProps = {
  image: string;
  category: string;
  title: string;
  price: string;
  unit: string;
};

export default function ProductCard({
  image,
  category,
  title,
  price,
  unit,
}: ProductCardProps) {
  return (
    <div className="product-card">
      <Image
        src={image}
        alt={title}
        width={250}
        height={250}
        className="product-image"
      />

      <p className="product-category">{category}</p>

      <h3>{title}</h3>

      <div className="line"></div>

      <div className="product-bottom">
       <div className="price-wrapper">
  <span className="price">{price}</span>
  <span className="price-unit">{unit}</span>
</div>

        <button>View Product</button>
      </div>
    </div>
  );
}