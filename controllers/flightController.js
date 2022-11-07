const { Flights } = require("../models/Flight.js")
const { v4: uuid } = require("uuid")

// get all flights
exports.getFlights = async (req, res) => {
  try {
    const flight = Flights
    res.status(200).json({
      message: "all flights",
      flight: flight,
    })
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

// get single flights
exports.getFlight = async (req, res) => {
  try {
    let id = req.params.id
    const flight = Flights.find((flight) => flight.id === id)
    res.status(200).json({
      message: "flight",
      flight,
    })
  } catch (error) {}
}

// book a flight
exports.bookFlight = async (req, res) => {
  try {
    const { title, time, price, date } = await req.body
    const flight = {
      id: uuid(),

      title: "flight to Canada",
      time: "1pm",
      price: "26000",
      date: "26-06-2022",
    }
    Flights.push(flight)
    res.status(201).json({
      message: "flight booked",
      flight: flight,
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// update a flight
exports.updateFlight = async (req, res) => {
  try {
    let id = req.params.id
    const flight = Flights.find((flight) => flight.id === id)
    const { title, time, price, date } = await req.body
    flight.title = title
    flight.time = time
    flight.price = price
    flight.date = date
    res.status(200).json({
      message: "flight update",
      flight,
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

// delete a flight
exports.deleteFlight = async (req, res) => {
  try {
    let id = req.params.id
    const flight = Flights.find((flight) => flight.id === id)
    Flights.splice(Flights.indexOf(flight), 1)
    res.status(200).json({
      message: "flight deleted",
      flight,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}