import ProductGrid from '../components/ProductGrid';

async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-products`, { method: 'GET' });
  const productsData = await res.json()
  return productsData;
}

export default async function Home() {
  const products = await getServerSideProps();
  return (
    <div>
      <ProductGrid productsData={products}/>
    </div>
  );
}
