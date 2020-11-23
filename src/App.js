import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { Card, ListGroup } from 'react-bootstrap'


function App() {
  const [task, setTask] = useState('')
  const [tasks, settasks] = useState([])

  const keyPressed = (e) => {
    const { key } = e
    // Capture search on Enter key
    if (key === "Enter") {
      handleClick(e)
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    settasks(tasks => [...tasks, task]);
  }

  const deleting = (index) => {
    // e.preventDefault()
    const element = tasks[index]
    console.log("event", index, element);
    settasks(tasks => tasks.filter(el => el !== element))
    // settasks(tasks.slice(index + 1, 1))
  }

  const editing = (index) => {
    // e.preventDefault()
    const element = tasks[index]
    console.log("event", index, element);
    settasks(tasks => tasks.filter(el => el !== element))
    // settasks(tasks.slice(index + 1, 1))
  }

  return (

    <div>
      {console.log("tasks", tasks)
      }
      <Form onSubmit={handleClick}>
        <Form.Group controlId="formBasicTask">

          <Form.Control value={task} name={task} type="text" placeholder="Enter your task" onChange={(e) => setTask(e.target.value)} onKeyPress={keyPressed} />
          <Button type="submit" variant="outline-success">+</Button>

        </Form.Group>

      </Form >

      <Card Card Card style={{ width: '18rem' }}>

        {tasks.map((task, index) => (
          <Card.Body>
            {console.log("task", task, index)}
            <Card.Text >{task}</Card.Text>
            <Button onClick={() => deleting(index)} variant="primary">Delet</Button>
            <Button onClick={() => editing(index)} variant="primary">Edit</Button>

          </Card.Body>
        ))

        }

      </Card>

    </div >
  );
}

export default App;


// {
//   console.log("task", task, index)
// }