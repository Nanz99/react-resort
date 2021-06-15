import React from 'react'
import Title from '../../components/Title'
import { services } from '../../utils/data'
export default function Services() {
   return (
      <div className="services">
         <Title title="Services" />
         <div className="services-center">
            {
               services.map(item => {
                  return (
                     <article key={item.id} className="service">
                        {item.icon}
                        <h5>{item.title}</h5>
                        <p>{item.info}</p>
                     </article>
                  )
               })
            }
         </div>
      </div>
   )
}
