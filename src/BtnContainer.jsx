import React from 'react'

export const BtnContainer = ({jobs, currentItem, setCurrentItem}) => {
  return (
    <div className='btn-container'>
        {jobs.map((item, index) => {
            return <button 
            key={item.id} 
            onClick={() => setCurrentItem(index)}
            className={index === currentItem ? 'active-btn' : 'btn'}
            >{item.company}</button>
        })}
    </div>
  )
}