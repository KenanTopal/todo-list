import React from 'react'

const List = ({items, handleDelete, handleEdit}) => {
  return (
    <div>
      {items.map((item)=>{
        const {id, title} = item;
        return(
          <article style={{display: "flex", justifyContent:"space-between", width:"300px"}} key={id}>
            <p>{title}</p>
            <div className='btn-container' >
              <button type='edit-btn' style={{marginRight:"5px"}} onClick={()=> handleDelete(id)}>DELETE</button>
              <button type='delete-btn' onClick={()=> handleEdit(id)}>EDIT</button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List