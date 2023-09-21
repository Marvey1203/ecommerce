import Link from "next/link";

const Header = () => {
    const navigation = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'Shop',
            href: '/shop'
        }
    ]
    return ( 
        <div className="py-10 flex justify-between">
            <h2 className="font-bold uppercase text-3xl">baby boomer</h2>
            <div className="flex flex-row gap-5">
                {
                    navigation.map((item, index) =>(
                        <Link className="text-lg text-black" key={index} href={item.href}>{item.name}</Link>
                    ))
                }
                
            </div>
        </div>
     );
}
 
export default Header;