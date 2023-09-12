const ProductCards = (productData: any) => {
    return ( 
        <div className="w-full">

            <div className="grid grid-col-3">
                {
                    productData.map((product: any) =>{
                        console.log(product)
                        return (
                            <div key={product.title}>
                                <p>{product.title}</p>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
     );
}
 
export default ProductCards;