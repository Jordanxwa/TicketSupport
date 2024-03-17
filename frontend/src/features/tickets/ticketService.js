import axios from 'axios';

const API_URL = '/api/tickets/';

// Create New Ticket
const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, ticketData, config);

  return response.data;
};

// Get user  Ticket
const getTickets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Get user  Ticket
const getTicket = async (tickedId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + tickedId, config);

  return response.data;
};

const ticketService = {
  createTicket,
  getTickets,
  getTicket,
};

export default ticketService;
