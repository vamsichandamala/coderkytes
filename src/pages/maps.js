import './maps.css';
export default function Maps() {
    return(
<div className="maps-container">
    <h1 className='maps-title'>Find Us Here <i  style={{color:"green"}} class="fa-solid fa-location-dot"></i></h1>
    <p className='maps-description'>We are located at Kurnool Airport, Andhra Pradesh, India.</p>
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964114.9515829547!2d76.63281718181565!3d15.952913486132024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5dd30a7a5391b%3A0x7c9155732b3eef1c!2sKurnool%20Airport%20cabs!5e0!3m2!1sen!2sin!4v1745903301999!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen="true"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
</div>
    );
}