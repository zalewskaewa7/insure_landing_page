import React from 'react'
import "./scss/contentWeAreDifferent.scss"
import snappy from "../images/icon-snappy-process.svg"
import affordablePrices from "../images/icon-affordable-prices.svg"
import peopleFirst from "../images/icon-people-first.svg"

function contentWeAreDifferent() {
const contentInformation =[
    {
        imgSrc: snappy,
        title: "Snappy Process",
        content: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."

    },
    {
        imgSrc: affordablePrices,
        title: "Affordable Prices",
        content: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
    },
    {
        imgSrc: peopleFirst,
        title: "People First",
        content: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it."
    }
]
    



  return (
    <div className="componentContentWeAreDiffrent">
         <hr />
        <h2>We’re different</h2>
        <div className="divContentInformationElements"> 
            {contentInformation.map((item, index) => {
            return(
                <div className="contentInformationElement" key={index}>
                    <img src={item.imgSrc}  alt={item.title}/>
         <h3>{item.title}</h3>
         <p>{item.content}</p>

    </div>
            )
                
            
    

    
            }
        )}
    
        </div>
       
        


       
        
    </ div>
  )
}

export default contentWeAreDifferent