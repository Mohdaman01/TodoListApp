import React from 'react'

const DoneList = (props) => {

    const { list, deleteList} = props;

    return (

        <div className='list-container' style={{backgroundColor: 'darkgreen'}} >

            <div id="info">

                <p>{list.description}</p>
                <p>{list.date}</p>

            </div>

            <div id="cataegory">{list.title}</div>
            
            <div id="delete" className="btn delete-list" onClick={() => deleteList(list,'doneLists')} style={{backgroundColor: 'darkred'}}>Delete Task</div>

        </div>

    )
}

export default DoneList