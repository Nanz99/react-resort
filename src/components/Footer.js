import React from 'react'

export default function Footer() {
   return (
      <footer style={{
         lineHeight:"3rem",
         height:"3rem",
         width:"100%",
         textAlign:"center",
         background: "#333",
         color:"#fff"
      }}>
         @ {new Date().getFullYear() } with <strong>Anh Nhựt</strong>
      </footer>
   )
}
