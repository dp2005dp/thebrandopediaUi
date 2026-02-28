import { useState }  from "react";
import {v4 as uuisv4} from 'uuid'
import "./index.css"



const cusReviewDetais = [
    {
              id : 0,
              cusName : 'Durgaprasad',
              reviTopic : 'Excellent Product',
              review : 'This product quality is really good and easy to use. I am fully satisfied and would recommend it to others.',
              createAt : 'just now',
              rating : 4,
    },
    {
              id : 2,
              cusName : 'Karthick',
              reviTopic : 'Worth the Price',
              review : 'The design looks premium and performance is smooth. Totally worth the price and delivery was also fast.',
              createAt : 'just now',
              rating : 3,
    },
    {
              id : 3,
              cusName : 'Karunakaran',
              reviTopic : 'Highly Recommended',
              review : 'Very useful product with great features. Customer support is responsive and overall experience is excellent.',
              createAt : 'just now',
              rating : 5,
    }
]

const totalrating = [
     {
        id:0,
        star : '/thebrandopediaUi/iconsAndlogs/21.svg',
        alt:'rating'
     },
      {
        id:1,
        star : '/thebrandopediaUi/iconsAndlogs/21.svg',
        alt:'rating'
     },
      {
        id:2,
        star : '/thebrandopediaUi/iconsAndlogs/21.svg',
        alt:'rating'
     },
      {
        id:3,
        star : '/thebrandopediaUi/iconsAndlogs/21.svg',
        alt:'rating'
     },
      {
        id:4,
        star : '/thebrandopediaUi/iconsAndlogs/6.svg',
        alt:'rating'
     }
]

const customerRating = [
     {
        id:0,
        fullStar : '/thebrandopediaUi/iconsAndlogs/21.svg',
        star : '/thebrandopediaUi/iconsAndlogs/20.svg',
        alt:'rating',
        isRating : false,
     },
      {
        id:1,
        fullStar : '/thebrandopediaUi/iconsAndlogs/21.svg',
        star : '/thebrandopediaUi/iconsAndlogs/20.svg',
        alt:'rating',
        isRating : false,
     },
      {
        id:2,
        fullStar : '/thebrandopediaUi/iconsAndlogs/21.svg',
        star : '/thebrandopediaUi/iconsAndlogs/20.svg',
        alt:'rating',
        isRating : false,
     },
      {
        id:3,
        fullStar : '/thebrandopediaUi/iconsAndlogs/21.svg',
        star : '/thebrandopediaUi/iconsAndlogs/20.svg',
        alt:'rating',
        isRating : false,
     },
      {
        id:4,
        fullStar : '/thebrandopediaUi/iconsAndlogs/21.svg',
        star : '/thebrandopediaUi/iconsAndlogs/20.svg',
        alt:'rating',
        isRating : false,
     }
]

const CustomerReviews = () => {
    
     const [customerReviewData , setCustomerData] = useState(cusReviewDetais)
     const [cusName , setcusName] = useState('')
     const [reviTopic , setRevTopic] = useState('')
     const [review , setReview] = useState('')
     const [isFormOpen , setOpen] = useState(false)
     const [cusAddRating , setCusAddrating] = useState(customerRating)

     
 

     const openReviewForm = () => {
          setOpen((prevState => !prevState))
     }
     
     const onName = (e) => {
            setcusName(e.target.value)
     }

      const onTopic = (e) => {
            setRevTopic(e.target.value)
     }

      const onReview = (e) => {
            setReview(e.target.value)
     }

     const reviewForm = (e) => {
          e.preventDefault();
          
          const totalcusrating  = cusAddRating.filter(eachStar => eachStar.isRating === true).length
          
                        if (!cusName || !reviTopic || !review || totalcusrating === 0) {
                alert("Please fill all fields and give rating");
                return;
                }

          const addCustomerReview  = {
              id : uuisv4(),
              cusName,
              reviTopic,
              review,
              createAt : 'just now',
              rating : totalcusrating
          }

          setCustomerData((prevData =>[ ...prevData,addCustomerReview]))
          setcusName('')
          setRevTopic('')
          setReview('')

           setOpen(false)
     }
     
     const onStar = (id) => {
          setCusAddrating((prevRating =>   prevRating.map(eachItem => {
                 if (eachItem.id === id) {
                  const addRating = !eachItem.isRating
                  return {...eachItem , isRating : addRating}
               }

               return eachItem
          })))

          
     }
    
    
      
    return (
      <div className="customer-review-container">
         <h1 className="customer-review">Customer Reviews</h1>
     
      <div className="total-review-container">
           <p className="total-rating-count">4.0</p>
            <ul className="total-rating-ul">
                {
                    totalrating.map(eachStar => (
                         <li>
                             <img src={eachStar.star} className="total-rating-star" alt={eachStar.alt} />
                         </li>
                    ))
                }
            </ul>
            <p>{customerReviewData.length} reviews</p>
        </div>
        
        {
           isFormOpen &&  <form onSubmit={reviewForm} className="form-container">
               <input type="text" placeholder="Enter your name" value={cusName} onChange={onName} className="input-container"/> <br />
               <input type="text" placeholder="Enter Topic" value={reviTopic} onChange={onTopic} className="input-container"/><br />
               <textarea
                    className="textarea-input-container"
                    onChange={onReview}
                    value={review}
                    rows="10" cols={50}
                    placeholder="Write your reviews..."
                    ></textarea>
                <p className="recommend">Your Rating</p>
            
                 <ul className="form-total-rating">
                {
                   cusAddRating.map(eachStar => {
                        
                        const addrating  = eachStar.isRating
                        
                        return (
                         <li id={eachStar.id} onClick={() => onStar(eachStar.id)}>
                             {
                                addrating ?  <img src={eachStar.fullStar} className="total-rating-star" alt={eachStar.alt} /> :  <img src={eachStar.star} className="total-rating-star" alt={eachStar.alt} />
                             }
                            
                         </li>
                    )})
                }
            </ul>
                 <button className="submit-btn" type="submit" >Submit</button>
         </form>
        }
        
            <button className="review-button" type="button" onClick={openReviewForm}>WRITE A REVIEW</button>
          
           <div className="responsive-review">
            <ul className="review-ul">
                {
                    customerReviewData.map(eachReview => (
                        <li id={eachReview.id} className="responsive-review-li">
                            <div className="flex-name">
                                <div className="user-intial">
                                 <h1>{eachReview.cusName[0].toUpperCase()}</h1>
                                 </div>
                                     <h1 className="name">{eachReview.cusName}</h1>
                                 
                            </div>

                            <p className="recommend">I recommend this product</p>
                            

                            <div className="star-flex">
                                 <div className="total-rating-ul">
                                      
                                      {[...Array(eachReview.rating)].map((_, index) => (
                                    <img
                                    key={index}
                                    src="/thebrandopediaUi/iconsAndlogs/21.svg"
                                    className="total-rating-star"
                                    alt="cusRating"
                                    />
                                ))}

                                </div>
                                 
                                 <p className="recommend">{eachReview.createAt}</p>
                            </div>

                        <h1 className="topick">{eachReview.reviTopic}</h1>
                        <p className="review">{eachReview.review}</p>  
                            

                        </li>
                    ))
                }
            </ul>
            </div>
      </div>
)
}
export default CustomerReviews;