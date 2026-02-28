import "./index.css"

const futures  = [
    {
        id: 0,
        image: "/thebrandopediaUi//images/14.jpeg",
        alt: "product1",
        topic :'PROTEIN-ENRICHED COLD COFFEE',
        content : 'Upgrade your everyday cold coffee with added strength and energy.This protein-powered blend combines rich coffee flavour with the goodness of high-quality whey protein to keep you active throughout the day.',
    },
     {
        id: 1,
        image: "/thebrandopediaUi//images/6.jpeg",
        alt: "product2",
        topic :'0g ADDED SUGAR          UNDER 97 KCAL',
        content : 'Crafted for modern lifestyles that demand both taste and nutrition.With zero added sugar and under 97 calories per serving, this coffee delivers energy without compromising on flavour or health.',
    },
     {
        id: 2,
        image: "/thebrandopediaUi//images/8.jpeg",
        alt: "product3",
        topic :'AVAILABLE IN 3 FLAVOURS',
        content : 'Choose from Classic, Hazelnut, or French Vanilla Protein Cold Coffee.Switch between flavours anytime and keep your taste buds refreshed with every sip.',
    }
]

const ProductFuture = () => (
     <div className="future-container">
          <h1 className="topic">AS SEEN ON</h1>
           
           <div className="future-flex-container">
               <img src="/thebrandopediaUi/iconsAndlogs/15.svg" className="flex-imageone"  alt="main heading" /> <img src="/thebrandopediaUi/iconsAndlogs/16.svg" className="flex-imagetwo" alt="main heading"/>
           </div>
           
        <ul className="future-order-list">
            {
                futures.map(eachItem => (
                     <li>
                        <img src={eachItem.image} className="future-image" alt={eachItem.alt} />
                        <p className="topic">{eachItem.topic}</p>
                        <p className="future-content">{eachItem.content}</p>
                     </li>
                ))
            }
        </ul>
     </div>
)

export default ProductFuture