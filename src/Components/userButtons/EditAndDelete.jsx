import React from "react"
import './EditAndDelete.css'
import IconDelete from '../../assets/delete.png';
import IconEdit from '../../assets/edit.png';





export default function EditAndDelete({onDelete, onEdit}) {
    return (
            <div className="content-btns">
                <button className="list-btn-edit"  onClick={onEdit}> 
                <img src={IconEdit} className='icon-edit' alt="edit" />Edit </button>
                <button className="list-btn-delete" onClick={onDelete}>
                <img src={IconDelete} className='icon-delete' alt="delete" /> Delete </button>
            </div>
    )
}