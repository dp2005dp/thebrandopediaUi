import "./index.css";


const fiveSachets = [
  {
    id: 1,
    image: "/thebrandopediaUi/iconsAndlogs/7.svg",
    alt: "sachet1",
    sachet: "15g Protein",
  },
  {
    id: 2,
    image: "/thebrandopediaUi/iconsAndlogs/8.svg",
    alt: "sachet2",
    sachet: "2 Espresso shots",
  },
  {
    id: 3,
    image: "/thebrandopediaUi/iconsAndlogs/9.svg",
    alt: "sachet3",
    sachet: "No Added Sugar",
  },
  {
    id: 4,
    image: "/thebrandopediaUi/iconsAndlogs/10.svg",
    alt: "sachet4",
    sachet: "Under 100 Calories",
  },
  {
    id: 5,
    image: "/thebrandopediaUi/iconsAndlogs/11.svg",
    alt: "sachet5",
    sachet: "FAQ",
  },
];


const similarProducts = [
    {
        id: 1,
        image: "/thebrandopediaUi/images/10.jpeg",
        alt: "similar product1",
        name : 'classic',
        isBestSeller : false,
    },
    {
        id: 2,
        image: "/thebrandopediaUi/images/11.jpeg",
        alt: "similar product2",
        name : 'vanilla',
        isBestSeller : false,
    },
    {
        id: 3,
        image: "/thebrandopediaUi/images/12.jpeg",
        alt: "similar product3",
        name : 'hazelnut',
        isBestSeller : false,
    },
    {
        id: 4,
        image: "/thebrandopediaUi/images/13.jpeg",
        alt: "similar product4",
        name : 'assorted',
        isBestSeller : true,
    }
]



const ProductDetails = () => (
    <div className="product-details-container">
        <div className="product-details">
        <h1 className="heading">Product Details</h1>
          
          
        <h1 className="main-heading">Classic Protein Cold Coffee Mix</h1>

        <div className="flex-container">
            <img src="/thebrandopediaUi/iconsAndlogs/21.svg" alt="rating" className="rating" />
             <img src="/thebrandopediaUi/iconsAndlogs/21.svg" alt="rating" className="rating" />
              <img src="/thebrandopediaUi/iconsAndlogs/21.svg" alt="rating" className="rating" />
              <img src="/thebrandopediaUi/iconsAndlogs/21.svg" alt="rating" className="rating" />
               <img src="/thebrandopediaUi/iconsAndlogs/5.svg" alt="rating" className="rating" />
               <p>(4)</p>
        </div>
      
         <div>
        <p className="descripition">Experience the power of protein with every sip.
                                    Each sachet delivers 15g of high-quality protein, 
                                    enhanced with two espresso shots,zero added sugar,
                                    and under 100 calories.Simply add cold water or milk,
                                    shake or blend,and enjoy instantly.Designed for busy 
                                    days when you need energy,strength, and great taste.
                                    Each pack includes 5 easy-to-use sachets.
        </p>
         </div>

         <ul className="sachets-container">
             {
                fiveSachets.map(eachItem => (

                     <li key={eachItem.id} className="sachet">
                        <img src={eachItem.image} alt={eachItem.alt} className="sachet-image" />
                        <p className="sachet-title">{eachItem.sachet.toUpperCase()}</p>
                     </li>
                ))
             }
         </ul>
         
         <ul className="similar-products-container">
            {
                similarProducts.map(eachProduct => {
                   
                    const bestSeller = eachProduct.isBestSeller ? 'best-seller' : '';
                    
                    return (
                    <li key={eachProduct.id} className={`similar-products ${bestSeller}`}>
                        <img src={eachProduct.image} alt={eachProduct.alt} className="similar-product-image" /> 
                        <p className="similar-product-name">{eachProduct.name}</p>
                        {
                            eachProduct.isBestSeller && <p className="best-seller-label">Best Seller</p>
                        }
                    </li>
             )})
            }
         </ul>

         <button className="add-to-cart-button">
             <h1 className="amount">ADD TO CART</h1>
             <h1 className="button-content">MRP $600 <span className="amount">$499</span> </h1>

             
         </button>
        
                 <p className="tax">Inclusive of all taxes</p>
         
       </div>
        <div className="othe-news">
            <img src="/thebrandopediaUi//images/Container-6.png" className="othe-news-image" alt="Startup India Magazine" />
            <div>
                <h1>Startup India Magazine is a leading platform that features startup success stories.</h1>
            </div>
        </div>
    </div>
)

export default ProductDetails;