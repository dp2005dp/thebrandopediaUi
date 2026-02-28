import "./index.css";

const coffee = [
      {
        text : 'Incredible DEALS' ,
      },
      {
         text : '  5-Minute Bags' ,
      },
      {
         text : 'Premium Instan' ,
      },
      {
        text : 'Arabica Beans' ,
      },
      {
        text : 'Ready to Drink' ,
      }
]

const curated = [
      {
        text : ' Best Sellers' ,
      },
      {
         text : 'Merchandise' ,
      },
      {
         text : 'Premium Instan' ,
      },
      {
        text : 'Deal of the Week' ,
      }
]

const Fooder = () => (
    <div className="fooder-container">


   
      <div className="fooder-top-container">
           <h1 className="foder-heading">review on JUMP*</h1>

           <h1 className="foder-heading">COFFEE</h1>
           <ul className="footer-ul">
            {
                coffee.map(eachItem => (
                     <li className="footer-li">
                         <p className="text">{eachItem.text}</p>
                     </li>
                ))
            }
           </ul>

           <h1 className="foder-heading">CURATED</h1>
           <ul className="footer-ul">
            {
                curated.map(eachItem => (
                     <li className="footer-li">
                         <p className="text">{eachItem.text}</p>
                     </li>
                ))
            }
           </ul>
      </div>

      <div className="fooder-bottom-container">
           <img src="iconsAndlogs/28.svg" className="social-iamge" alt="logo" />
           <p className="social-content">Our journey began with three friends and one simple idea — to make great coffee accessible to everyone. What started as a shared passion soon became a mission to deliver high-quality, freshly roasted coffee without compromise. Today, we continue to craft products that bring real flavor, energy, and joy to your everyday routi</p>

           <input type="email" placeholder="Email Newsletter" className="email"/>

           <div className="social-icons-flex">
              <img src="iconsAndlogs/30.svg" className="social-icons" alt="logo" />
              <img src="iconsAndlogs/31.svg" className="social-icons" alt="logo" />
              <img src="iconsAndlogs/32.svg" className="social-icons" alt="logo" />
              <img src="iconsAndlogs/33.svg" className="social-icons" alt="logo" />
              <img src="iconsAndlogs/34.svg"  className="social-icons"alt="logo" />
           </div>
      </div>


      <div className="history">
          <p>@2026 Sleepy Owl Coffee</p>
          <p className="text-dec history">Privacy .Terms of Use</p>
      </div>
       </div>
)

export default Fooder;