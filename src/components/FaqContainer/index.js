import {useState} from 'react';
import "./index.css"

const faq = [
    {
        id: 0,
        question : 'What is Protein Cold Coffee?',
        answer : 'It is a cold coffee blended with whey protein for added nutrition and energy.',
        isShow : false,
    },
    {
        id: 1,
        question : 'How much protein does one serving contain?',
        answer : 'Each serving provides 15g of high-quality whey protein.',
        isShow : false,
    },
    {
        id: 2,
        question : 'Does it contain added sugar?',
        answer : 'No, this coffee has zero added sugar.',
        isShow : false,
    },
    {
        id: 3,
        question : 'How do I prepare this coffee?',
        answer : 'Add one sachet to cold water or milk, shake well, and enjoy.',
        isShow : false,
    },
    {
        id: 4,
        question : 'How many calories are in one serving?',
        answer : 'Each serving contains less than 97 calories.',
        isShow : false,
    },
    {
        id: 5,
        question : ' Is it suitable for daily consumption?',
        answer : 'Yes, it can be enjoyed daily as part of an active lifestyle.',
        isShow : false,
    },
    {
        id: 0,
        question : 'What flavours are available?',
        answer : 'Classic, Hazelnut, and French Vanilla flavours are available.',
        isShow : false,
    }
]

const FaqContainer  = () => {
    
    const [faqData , setFaqData] = useState(faq)
    
    const onShowAnswer = (id) => {
         setFaqData((prevState => prevState.map(eachItem => {
             if (eachItem.id === id) {
                 const showAnswer = !eachItem.isShow
                
                 return{...eachItem, isShow : showAnswer}
             }

             return eachItem
         })))
    }

    return (
      <div className='faq-container'>
           <h1 className='faq-heading'>Customers Often Ask-</h1>

           <ul className='faq-main-container'>
              {
               
                faqData.map(eachItem => {
                    
                    const showAnswer  = eachItem.isShow
                    const rotateArrow = showAnswer ? "faq-answer-arrow" :''

                    return(
                             <li id={eachItem.id}>
                                 <div className='faq-flex-container' onClick={() => onShowAnswer(eachItem.id)}>
                                     <h1 className='faq-question'>{eachItem.question}</h1>
                                      <img src="/thebrandopediaUi/iconsAndlogs/17.svg" className={`faq-arrow ${rotateArrow}`} alt="faq icons" />
                                     
                                 </div>
                                  
                                   {
                                        showAnswer && <p className='faq-answer'>{eachItem.answer}</p>
                                     }

                                <hr className='hr'/>
                             </li>
                    )
                })
               

              }
           </ul>
      </div>
)
}

export default FaqContainer;