import { useState } from 'react';
import '../assets/todoForm.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function TodoForm(props) {

    const { lists, setRender, show, setShow } = props;

    const [title, setTitle] = useState('');
    const [date, setDate] = useState(getDate());
    const [description, setDescription] = useState('');

    function getDate() {

        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${year}-${month}-${date}`;

    }

    async function formHandler(e) {

        e.preventDefault();

        const listObject = {
            title,
            date,
            description
        }

        const newLists = JSON.stringify([listObject, ...lists])

        localStorage.setItem('todo-lists', newLists);


        setTitle('');
        setDate(getDate());
        setDescription('');
        setShow(false);
        setRender(true);
    }

    return (

        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            style={{ 'top' : '10%'}}
        >
            <Modal.Body>

                <div className='form-container'>

                    <form onSubmit={(e) => formHandler(e)} >

                        <div className="info-container">

                            <input type="text" maxLength={20} name="category" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Topic" required />
                            
                            <input className="input" type="date" name="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />

                        </div>

                        <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} cols="30" rows="5" placeholder="Description" required></textarea>

                        <Button type="submit" className="btn add-list">Add Task</Button>

                    </form>

                </div>

            </Modal.Body>
            
        </Modal>

    )

}

export default TodoForm;