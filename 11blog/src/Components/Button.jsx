import React from 'react'

function Button({
    childern,
    type = 'button',
    bgcolor='bg-white-600',
    textcolor= 'text-white',
    classname ='',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${classname} ${bgcolor} ${textcolor}`}{...props}>{childern}</button>
  )
}

export default Button