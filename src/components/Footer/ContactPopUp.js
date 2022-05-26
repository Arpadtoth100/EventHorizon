import React from 'react'

export default function ContactPopUp({showContactPopUp, setShowContactPopUp}) {
  return (
      <>
      {showContactPopUp ? <div>Thank you for your message!</div> : null}
      
      </>
      )
}
