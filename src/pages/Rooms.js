import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Calendar from 'react-calendar';

function getDateDiffInDays(startDate, endDate) {
  const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
}

export default function Rooms() {
  const images = [
    "https://static01.nyt.com/images/2020/01/25/travel/25checkin-caribbean-palmaia-02/25checkin-caribbean-palmaia-02-mobileMasterAt3x.jpg",
    "https://static01.nyt.com/images/2020/01/25/travel/25checkin-caribbean-rosewood-02/25checkin-caribbean-rosewood-02-superJumbo.jpg?quality=75&auto=webp",
    "https://media.cntraveler.com/photos/54c66011040ea1175236b4d0/master/pass/Jade-Mountain.jpg",
  ];

  const [date, setDate] = useState(new Date());
  const [numPersons, setNumPersons] = useState("");
  const [roomType, setRoomType] = useState("");
  const [showBookingDetails, setShowBookingDetails] = useState(false);
  //const pricePerNight = roomType === "Standard" ? 50 : roomType === "Luxury" ? 100 : roomType === "Penthouse" ? 150 : 0;
  const diffDays = date.length > 0 ? getDateDiffInDays(date[0], date[1]) - 1 : 0;
  //const totalCost = diffDays * pricePerNight;
  const tileDisabled = ({ activeStartDate, date, view }) => {
    return date < new Date();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowBookingDetails({
      checkIn: date[0],
      checkOut: date[1],
      numberOfPersons: numPersons,
      roomType: roomType,
      pricePerNight: getPricePerNight(roomType),
      totalCost: getPricePerNight(roomType) * diffDays,
    });
  }

  const getPricePerNight = (roomType) => {
    switch (roomType) {
      case "standard":
        return 50;
      case "luxury":
        return 100;
      case "penthouse":
        return 150;
      default:
        return 0;
    }
  };

  return (
    <div>
      <img src="https://resize2.wimco.com/?image=vacation-rental-photo_virgingorda_littledi_littledirwjrstebd101_desktop.jpg&amp;w=900" className="rooms-mainpic" alt="hotel room" />

      <h1 className="acco">Accommodation</h1>

      <Slide slidesToScroll={2} slidesToShow={2} indicators={true}>
        <div className="each-slide-effect standard-room-slide">
          <div style={{ 'backgroundImage': `url(${images[0]})` }}>
            <span>Standard Room</span>
          </div>
        </div>
        <div className="each-slide-effect luxury-room-slide">
          <div style={{ 'backgroundImage': `url(${images[1]})` }}>
            <span>Luxury Room</span>
          </div>
        </div>
        <div className="each-slide-effect penthouse-slide">
          <div style={{ 'backgroundImage': `url(${images[2]})` }}>
            <span>Penthouse</span>
          </div>
        </div>
      </Slide>

    
      <div className='app'>
        <h1 className='text-center'>Calendar</h1>
        <div className='calendar-container'>
          <Calendar
            onChange={setDate}
            value={date}
            selectRange={true}
            minDate={new Date()}
            tileDisabled={tileDisabled}
            />
            <br />
          </div>
        
          <form className="adults" onSubmit={handleFormSubmit}>
                <label htmlFor="numPersons">Number of persons</label>
                <select id="numPersons" value={numPersons} onChange={(e) => setNumPersons(e.target.value)}>
                    <option value="">-- Choose --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <br></br>

                <label htmlFor="roomType">Room type</label>
                <select id="roomType" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                    <option value="">-- Choose --</option>
                    <option value="standard">Standard</option>
                    <option value="luxury">Luxury</option>
                    <option value="penthouse">Penthouse</option>
                </select>

                <br /><br />

                <button type="submit">Submit</button>
                </form>
        </div>

        {showBookingDetails && (
            <div className="booking-details">
                <h2>Booking Details</h2>
                <p>Check-in: {date[0].toDateString()}</p>
                <p>Check-out: {date[1].toDateString()}</p>
                <p>Number of persons: {numPersons}</p>
                <p>Room type: {showBookingDetails.roomType}</p>
                <p>Price per night: ${showBookingDetails.pricePerNight}</p>
                <p>Total cost: ${showBookingDetails.totalCost}</p>
            </div>
    

)}

    </div>
    
);
}  

  

 