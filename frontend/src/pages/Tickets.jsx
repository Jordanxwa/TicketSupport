import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getTickets, reset} from "../features/tickets/ticketSlice"
import Spinner from "../components/Spinner"
import backButton from '../components/BackButton'

function Tickets() {
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
    <div>Tickets</div>
  )
}

export default Tickets