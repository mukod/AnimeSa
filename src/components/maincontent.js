import './maincontent.css';
import { useEffect, useState } from 'react';
import { FaUsers, FaCalendarAlt, FaShoppingBag, FaMapMarkerAlt, FaUserFriends } from 'react-icons/fa';
import cape from '../images/cape.jpeg';
import con from '../images/con1.jpg'
import night from '../images/night1.png';

function Maincontent() {
  const [animeList, setAnimeList] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/top/anime')
      .then(res => res.json())
      .then(data => setAnimeList(data.data))
      .catch(err => console.error('Failed to fetch anime:', err));
  }, []);

  const displayedAnime = isMobile ? animeList.slice(0, 2) : animeList.slice(0, 6);

  // Dummy event data
  const events = [
    {
      id: 1,
      image: con,
      name: 'Anime Con Joburg',
      date: 'May 25, 2025',
      location: 'Johannesburg Expo Centre',
      description: 'The biggest anime convention in South Africa!',
      attendees: 120,
      tags: ['Convention', 'Gaming', 'Cosplay', 'Panels']
    },
    {
      id: 2,
      image: cape,
      name: 'Cape Town Otaku Fest',
      date: 'June 10, 2025',
      location: 'CTICC, Cape Town',
      description: 'A celebration of all things anime and geek culture.',
      attendees: 80,
      tags: ['Cosplay', 'Merch', 'Games', 'Workshops']
    },
    {
      id: 3,
      image: night,
      name: 'Anime Night Pretoria',
      date: 'July 2, 2025',
      location: 'Menlyn Park Rooftop',
      description: 'Outdoor anime screening with food trucks and fun.',
      attendees: 45,
      tags: ['Screening', 'Food', 'Meetup', 'Games']
    }
  ];

  return (
    <div className='main-content'>
      <section className='hero-section'>
        <h1 className='hero-h1'>South Africa's Anime Community</h1>
        <p className='hero-p'>Connect with fellow anime fans, discover trending series, attend local events, and shop for your favorite merchandise - all in one place.</p>
        <div className='hero-buttons'>
          <button className='signup-button'>Join Now</button>
          <button className='login-button'>Learn More</button>
        </div>
      </section>

      <section className='anime-section'>
        <div className='anime-header'>
          <h2 className='anime-h2'>Top Rated Anime</h2>
          <span className='view-all-link' onClick={() => {}}>View All  ➜</span>
        </div>
        <div className='anime-cards'>
          {displayedAnime.map(anime => (
            <div key={anime.mal_id} className='anime-card'>
              <div className='anime-overlay'>
                <h3 className='anime-title'>{anime.title}</h3>
                <p className='anime-score'>⭐ {anime.score ?? 'N/A'}</p>
              </div>
              <img src={anime.images.jpg.image_url} alt={anime.title} className='anime-image' />
            </div>
          ))}
        </div>
      </section>

      <section className='connect-section'>
        <h2 className='connect-h2'>Connect with South Africa's Anime Community</h2>
        <div className='connect-cards'>
          <div className='connect-card'>
            <FaUsers className='connect-icon' />
            <h3 className='connect-title'>Join the Community</h3>
            <p className='connect-description'>Engage in discussions, share fan art, and meet other anime lovers near you.</p>
            <a className='connect-link' href='#'>Join Now  ➜</a>
          </div>
          <div className='connect-card'>
            <FaCalendarAlt className='connect-icon' />
            <h3 className='connect-title'>Discover Events</h3>
            <p className='connect-description'>Find local anime meetups, conventions, and virtual gatherings happening in South Africa.</p>
            <a className='connect-link' href='#'>Find Events  ➜</a>
          </div>
          <div className='connect-card'>
            <FaShoppingBag className='connect-icon' />
            <h3 className='connect-title'>Shop Merchandise</h3>
            <p className='connect-description'>Browse exclusive anime merchandise from local vendors and official stores.</p>
            <a className='connect-link' href='#'>Visit Shop  ➜</a>
          </div>
        </div>
      </section>

      <section className='events-section'>
        <div className='anime-header'>
          <h2 className='anime-h2'>Upcoming Events</h2>
          <span className='view-all-link' onClick={() => {}}>View All  ➜</span>
        </div>
        <div className='event-cards'>
          {events.map(event => (
            <div key={event.id} className='event-card'>
              <img src={event.image} alt={event.name} className='event-image' />
              <div className='event-content'>
                <h3 className='event-name'>{event.name}</h3>
                <p className='event-date'> < FaCalendarAlt/> {event.date}</p>
                <p className='event-location'><FaMapMarkerAlt /> {event.location}</p>
                <p className='event-description'>{event.description}</p>
                <div className='event-meta'>
                  <div className='event-attendees'><FaUserFriends className='attendees-icon' /> {event.attendees} attending</div>
                  <div className='event-tags'>
                    {event.tags.map((tag, index) => (
                      <span key={index} className='event-tag'>{tag}</span>
                    ))}
                  </div>
                  <div className='event-actions'>
                    <button className='event-details-button'>Details</button>
                    <button className='event-rsvp-button'>RSVP</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Maincontent;
