import './fouder_card.css';
export default function FounderCard({ name, title, image }) {
  return (
    <div className="founder-card">
      <div className='person-image'>
      <img src={image} alt={name}/>
      </div>
      <h2 >{name}</h2>
      <p >{title}</p>
    </div>
  );
}