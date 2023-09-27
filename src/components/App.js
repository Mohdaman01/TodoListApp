
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TodoForm from "./todoForm";
import List from './List';
import DoneList from "./DoneList";
import '../bootstrap.min.css';



function App() {

  const [render, setRender] = useState(false);
  const [lists, setLists] = useState([]);
  const [doneLists, setDoneLists] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {

    try {

      const lists = JSON.parse(localStorage.getItem("todo-lists") || "[]");
      setLists(lists);


      const doneLists = JSON.parse(localStorage.getItem('done-lists') || '[]');
      setDoneLists(doneLists);


      setRender(false);

      return;

    } catch (err) {

      console.log(err.message);

      return;

    }

  }, [render]);


  const completeList = (list) => {

    setDoneLists(prv => [...prv, list]);

    localStorage.setItem('done-lists', JSON.stringify([...doneLists, list]));

    deleteList(list, 'todoLists');

  }



  const deleteList = (list, typeOfList) => {

    if (typeOfList === 'todoLists') {

      const newLists = lists.filter(item => item !== list);

      setLists(newLists);

      localStorage.setItem('todo-lists', JSON.stringify(newLists));

      return;

    } else if (typeOfList === 'doneLists') {

      const newLists = doneLists.filter(item => item !== list);

      setDoneLists(newLists);

      localStorage.setItem('done-lists', newLists);

    }
    return;
  }

  const resetLists = () => {

    localStorage.removeItem('todo-lists');

    localStorage.removeItem('done-lists');

    setLists([]);

    setDoneLists([]);

    return;
  }


  return (

    <div className="App">

      <Navbar resetLists={resetLists} setShow={setShow} />

      <TodoForm lists={lists} setRender={setRender} setShow={setShow} show={show} />

      {lists.length === 0 && doneLists.length === 0 ?

        <div style={{  position: 'absolute' , top: '40%', left: '0',right: '0'  , textAlign: 'center', fontSize: '2rem', color: 'darkgrey' }}>There is No List</div>
        
        :

        <div style={{ paddingTop: '7rem' }}>

          {lists.map((list) => (

            <List list={list} key={list._id} deleteList={deleteList} completeList={completeList} />

          ))}

          {

            doneLists.map((list) => (

              <DoneList list={list} deleteList={deleteList} /> 

            ))

          }

        </div>
      }

    </div>
  );

}

export default App;
