import React from 'react'
import "./Card.css" 
import Cloud from "./../../Images/cloud1-removebg-preview.png"
import Mg from "./../../Images/Mg.png"
import Cs from "./../../Images/Cost.png"
import Arch from "./../../Images/Arch.png"
import Dp from "./../../Images/Deops.png"
import Iac from "./../../Images/Iac.png"

const list = [
    { 
      id:0,
      src:Cloud,
      Heading: "Cloud Consulting",
      Title: "Our consulting team will assess the whole infrastructure of our client company. Design the best plan for Architecture in Cloud. Advise the required services and help in cost optimization of the Architecture.",
      
      
    },{ 
        id:1,
        src:Mg,
        Heading: "Migration Process",
        Title: "Cloud migration is a process which is defined as most crucial process for companies to move to the newly trending technology. As the cloud provide whole services but the expertise is required to complete the migration process smoothly and securely. As there are multiple services from On-Premises are going through the transitioning process, Our Architect team will prepare the whole best plan to migrate the On-Premises infrastructure very securely without exposure to Public",
        
        
    },{
        id:2,
        src:Cs,
        Heading: "Cost Optimization",
        Title: "We can help your organization to get rid of the costly services and provide you with the best cost saving plan and services, which will help your organization to save much more cost. We will look into the running Infrastructure and assess the whole Architecture and come forward with the best and saving alternative plan. Our rendered plan will be the best plan to dissolve into the flow of the business without effecting the current running process. ",
        
    }
]
const list1 = [
    { 
      id:3,
      src:Arch,
      Heading: "Architect Management",
      Title: "Some of the companies that had went through the cloud migration, they would like to maintain or upgrade their architecture. We will help your organization in maintain the Architect or upgrade the architect with the best cost saving plan. Our team will be available 24/7 to provide the support for the Cloud Architecture. "
      
      
    },{ 
        src:Dp,
        Heading: "DevOps",
        Title: "Several organizations had and are adopting the DevOps tool to automate their manual process of delivering the services, which re costly and time consuming for their Organization. We will help out your organization to adopt the best tool for automating the services with fast delivery and best result oriented. We will work and advise accordingly your team to let them adopt the best tool. Which will be helping out your services."
       
        
    },{
        id:4,
        src:Iac,
        Heading: "IaC",
        Title: "As the cloud have attracted every single business in the world. IaaC (Infrastructure as a Tool) came forward to help the Infrastructure launch and run on just single click. Most of the companies are requiring their infrastructure should be based upon code so they can easily modify according to their need. We will write the script in the Terraform whole or partial infrastructure as per Client requirement. Also we will Help our client in their IaaC to edit it or rectify the mistakes."
       
    }
]

export default function Card() {
  return (
    <>
      <div className='service1'>
      {list.map(({src,Heading, Title})=>(
        <div key={list.id} className="cards" data-aos="fade-up" data-aos-duration="1000">
          <img src={src} alt='cloud'></img>
          <h2>{Heading}</h2>
          <article>{Title}</article>
          
        </div>
      ))}
        </div>

        <div className='service1'>
      {list1.map(({src,Heading, Title, More})=>(
        <div key={list1.id} className="cards" data-aos="fade-up"  >
          <img src={src} alt='cloud'></img>
          <h2>{Heading}</h2>
          <article>{Title}</article>
          
        </div>
      ))}
        </div>

    </>
  )
}
