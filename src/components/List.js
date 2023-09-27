import { Button } from 'react-bootstrap';
import '../assets/list.css'


function List(props) {

    const { list , deleteList, completeList } = props;

    return (

        <div className='list-container'>

                <div id="info">

                    <p>{list.description}</p>

                    <p>{list.date}</p>

                </div>

                <div id="cataegory">{list.title}</div>

                <Button id="delete" className="btn delete-list" onClick={()=>completeList(list)} style={{background: 'green'}}>Task Complete</Button>
                
                <Button id="delete" className="btn delete-list" onClick={()=>deleteList(list,'todoLists')} style={{background : 'darkred'}} >Delete Task</Button>

        </div>

    )

}

export default List;