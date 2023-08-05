
import { FaEdit, FaTrash } from "react-icons/fa";


const TodoListItem = ({ items, handleEditClick, handleDeleteClick }) =>  {
  return items.map((item, idx) => (
    <li className="item-list" key={item.id}>
      <span className="item">{item.value}</span>
      <div className="btn-div">
        <FaEdit
          size={25}
          className="edit_btn"
          onClick={() => handleEditClick(item)}
        >
        </FaEdit>
        <FaTrash
        size={25}
          className="delete_btn"
          onClick={() => handleDeleteClick(idx)}
        >
          
        </FaTrash>
      </div>
    </li>
  ));
}

export default TodoListItem;



