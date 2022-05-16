import './App.css';
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
const [showModal, setShowModal] = useState(false)
const [showEvents, setShowEvents] = useState(true)
const [events, setEvents] = useState([
  {title: "mario's birthday bash", id: 1},
  {title: "bowser's live stream", id: 2},
  {title: "race on moo moo farm", id: 3}
])

const handleClick = (id) => {
  setEvents((prevEvents) => {
    return prevEvents.filter((event) => {
      return id !== event.id
    })
  })
  console.log(id)
}

  const handleClose = () => {
    setShowModal(false)
  }
  const subtitle = "All the latest events in Marioland"
  return (
    <div className="App">

      <Title title="Events In Your Area" subtitle={subtitle}/>
     
      {showEvents && (
      <div>
        <button onClick={() => setShowEvents(false)}>hide events</button>
      </div>
      )}
      {!showEvents && (
      <div>
        <button onClick={() => setShowEvents(true)}>show events</button>
      </div>
      )}
      
  
      {showEvents && <EventList events={events} handleClick={handleClick}/>}
      
      {/*<Modal >
        <h2>10% Off Coupon Code!</h2>
       <p>Use the code at the checkout.</p>
      </Modal>*/}
      {showModal && <Modal handleClose={handleClose} isSalesModal={true}>
      <NewEventForm />
      </Modal>}
      <button onClick={() => setShowModal(true)}>Add New Event</button>
      
    </div>
  );
}

export default App;
