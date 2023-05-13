import React from 'react'
import data from '../MenuApi'

const Skill = () => {
  return (
    <div className='border m-5 p-4 rounded-3 d-flex justify-content-evenly'>
        {data.map((i)=>(
            <div key={i.id} style={{width:'10rem'}} className='border skill'>
                <img src={i.imageUrl} alt="" className='w-100' />
            </div>
        ))}
      <div>
      </div>
    </div>
  )
}

export default Skill
