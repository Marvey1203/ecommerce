import Image from "next/image";

const ProductCards = ({ productData }: { productData: any[] }) => {
    // Check if productData is defined and is an array
    if (!Array.isArray(productData)) {
        return <div>No product data available</div>;
    }

    return (
        <div className="w-full">
            <div className="grid grid-cols-2 w-full gap-5">
                {productData.map(({ title, id, featuredImage, priceRangeV2 }) => {
                    return <div className="col-span-2 md:col-span-1 py-8" key={id}>
                        <div className="relative">
                                <Image
                                    src={featuredImage.url} 
                                    alt={""} 
                                    height={500}
                                    width={500}
                                />
                                <p className="font-semibold text-white absolute top-2 left-2 bg-[#89CFF0] py-1 px-3 rounded-2xl">R{priceRangeV2.maxVariantPrice.amount}</p>
                        </div>
                        <p className="my-3 font-bold text-xl">{title}</p>
                        <button className="capitalize w-full bg-black text-white py-2 font-semibold">Add to cart</button>
                    </div>;
                })}
            </div>
        </div>
    );
}

export default ProductCards;
