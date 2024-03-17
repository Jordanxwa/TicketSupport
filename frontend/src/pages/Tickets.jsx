import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getTickets, reset} from "../features/tickets/ticketSlice"
import Spinner from "../components/Spinner"
import { BackButton } from '../components/BackButton'
import TicketItem from "../components/TicketItem"

function Tickets() {
  // Deconstruct tickets from state
const {tickets, isLoading, isSuccess} = useSelector((state) => state.tickets)

// Init dispatch
const dispatch = useDispatch()

useEffect(() => {
dispatch(getTickets())

// Return func to effect unMount
return () => {
  if(isSuccess){
    dispatch(reset())
  }
}

}, [dispatch, isSuccess])

if(isLoading){
  return <Spinner />
}

  return (
    <>
    <BackButton url="/" />
    <h1>Tickets</h1>
    <div className="tickets">
      <div className="ticket-headings">
        <div>Date</div>
        <div>Product</div>
        <div>Status</div>
        <div></div>
      </div>
      {/* loop through tickets and display item for each one */}
      {tickets.map((ticket) => (
        <TicketItem key={ticket._id} ticket={ticket} />
      ))}
    </div>
    </>
  )
}

export default Tickets