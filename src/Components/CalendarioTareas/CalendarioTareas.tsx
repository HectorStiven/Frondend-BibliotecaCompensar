'use client'

import React, { useState } from 'react'
import { format, parse, isSameDay } from 'date-fns'
import { Button } from "@mui/material" // Using Material UI Button
import { Dialog, DialogContent, DialogTitle, DialogActions } from "@mui/material" // Using Material UI Dialog components
import { TextField, TextareaAutosize } from "@mui/material" // Using Material UI Input and Textarea
import { InputLabel, FormControl } from "@mui/material" // Material UI Form components

interface Event {
  id: string
  title: string
  description?: string
  date: Date
  time?: string
  location: string
}

const INITIAL_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Team Meeting',
    description: 'Weekly team sync',
    date: new Date('2023-09-15'),
    time: '10:00 AM',
    location: 'Conference Room A'
  },
  {
    id: '2',
    title: 'Project Deadline',
    date: new Date('2023-09-20'),
    location: 'Office'
  }
]

export default function FullScreenEventCalendar() {
  const [events, setEvents] = useState<Event[]>(INITIAL_EVENTS)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isEventFormOpen, setIsEventFormOpen] = useState(false)
  const [isEventListOpen, setIsEventListOpen] = useState(false)

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    setIsEventListOpen(true)
  }

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event)
  }

  const handleAddEvent = () => {
    setSelectedEvent(null)
    setIsEventFormOpen(true)
  }

  const handleEditEvent = (event: Event) => {
    setSelectedEvent(event)
    setIsEventFormOpen(true)
  }

  const handleDeleteEvent = (eventId: string) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter(event => event.id !== eventId))
      setSelectedEvent(null)
    }
  }

  const handleEventSubmit = (event: Event) => {
    if (selectedEvent) {
      setEvents(events.map(e => e.id === selectedEvent.id ? event : e))
    } else {
      setEvents([...events, { ...event, id: Date.now().toString() }])
    }
    setIsEventFormOpen(false)
  }

  const EventList: React.FC<{ events: Event[], onEventClick: (event: Event) => void }> = ({ events, onEventClick }) => (
    <div className="space-y-4">
      {events.map(event => (
        <div
          key={event.id}
          className="p-4 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-50"
          onClick={() => onEventClick(event)}
        >
          <h3 className="font-semibold">{event.title}</h3>
          <p className="text-sm text-gray-600">{format(event.date, 'PPP')}</p>
          {event.time && <p className="text-sm text-gray-600">{event.time}</p>}
          <p className="text-sm text-gray-600">{event.location}</p>
        </div>
      ))}
    </div>
  )

  const EventForm: React.FC<{ event?: Event, onSubmit: (event: Event) => void }> = ({ event, onSubmit }) => {
    const [title, setTitle] = useState<string>(event?.title || '')
    const [description, setDescription] = useState<string>(event?.description || '')
    const [date, setDate] = useState<Date>(event?.date || new Date())
    const [time, setTime] = useState<string>(event?.time || '')
    const [location, setLocation] = useState<string>(event?.location || '')

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      onSubmit({
        id: event?.id || Date.now().toString(),
        title,
        description,
        date,
        time,
        location
      })
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormControl fullWidth>
          <InputLabel htmlFor="title">Title</InputLabel>
          <TextField id="title" value={title} onChange={e => setTitle(e.target.value)} required />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="description">Description</InputLabel>
          <TextareaAutosize
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            minRows={3}
            style={{ width: '100%' }}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="date">Date</InputLabel>
          <TextField
            id="date"
            type="date"
            value={format(date, 'yyyy-MM-dd')}
            onChange={e => setDate(parse(e.target.value, 'yyyy-MM-dd', new Date()))}
            required
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="time">Time</InputLabel>
          <TextField id="time" type="time" value={time} onChange={e => setTime(e.target.value)} />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="location">Location</InputLabel>
          <TextField id="location" value={location} onChange={e => setLocation(e.target.value)} required />
        </FormControl>
        <Button type="submit" variant="contained">{event ? 'Update Event' : 'Create Event'}</Button>
      </form>
    )
  }

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Event Calendar</h1>
        <Button onClick={handleAddEvent} variant="contained">Add Event</Button>
      </header>
      <main className="flex-grow overflow-auto p-4">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          className="rounded-md border mx-auto"
          modifiers={{
            hasEvent: (date:any) => events.some(event => isSameDay(event.date, date))
          }}
          modifiersClassNames={{
            hasEvent: "bg-primary text-primary-foreground font-bold"
          }}
        />
      </main>
      <Dialog open={isEventFormOpen} onClose={() => setIsEventFormOpen(false)}>
        <DialogContent>
          <DialogTitle>{selectedEvent ? 'Edit Event' : 'Create Event'}</DialogTitle>
          <EventForm event={selectedEvent || undefined} onSubmit={handleEventSubmit} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsEventFormOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={isEventListOpen} onClose={() => setIsEventListOpen(false)}>
        <DialogContent>
          <DialogTitle>Events for {selectedDate && format(selectedDate, 'MMMM d, yyyy')}</DialogTitle>
          <EventList 
            events={events.filter(event => selectedDate && isSameDay(event.date, selectedDate))} 
            onEventClick={handleEventClick} 
          />
          {selectedDate && events.filter(event => isSameDay(event.date, selectedDate)).length === 0 && (
            <p>No events for this day.</p>
          )}
          <Button onClick={handleAddEvent} variant="contained">Add Event</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsEventListOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={!!selectedEvent} onClose={() => setSelectedEvent(null)}>
        <DialogContent>
          <DialogTitle>{selectedEvent?.title}</DialogTitle>
          <div className="space-y-2">
            <p><strong>Date:</strong> {selectedEvent && format(selectedEvent.date, 'PPP')}</p>
            {selectedEvent?.time && <p><strong>Time:</strong> {selectedEvent.time}</p>}
            <p><strong>Location:</strong> {selectedEvent?.location}</p>
            {selectedEvent?.description && (
              <p><strong>Description:</strong> {selectedEvent.description}</p>
            )}
          </div>
          <div className="flex justify-end space-x-2">
            <Button onClick={() => handleEditEvent(selectedEvent!)} variant="outlined">Edit</Button>
            <Button variant="contained" color="error" onClick={() => handleDeleteEvent(selectedEvent!.id)}>Delete</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
