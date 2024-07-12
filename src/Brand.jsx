import BrandCard from "./BrandCard";

const Brand = ({ data }) => {

  const brands = Array.isArray(data) ? data : [data];

  if (!brands || brands.length === 0) {
    return <div className="text-center text-red-500">No brands available</div>;
  }
  
  return (
    <div>
      <h1 className="text-4xl text-center mt-10 bg-green-900 text-white p-3">Brand</h1>
      <div className="grid md:grid-cols-3 mb-5 p-10 text-center">
        {brands.map(tech => (
          <BrandCard key={tech.id} tech={tech} />
        ))}
      </div>
    </div>
  );
};

export default Brand;
