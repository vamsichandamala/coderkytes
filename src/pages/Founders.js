import FounderCard from '../components/founder_card';
import './Founders.css'
import vamsi from '../assets/vamsi.png'
import mani from '../assets/mani.png'
import vishnu from '../assets/vishnu.jpg'
import shiva from '../assets/shiva.jpeg'
const persons_list = [
    {
      name:"Shiva Krishna",
        title: "Founder & CEO",
      image: shiva,
    },
    {
        name:"Vishnu Vardhan",
          title: "Tech Lead",
        image: vishnu,
      },
      {
        name:"Manendra",
          title: "Senior Developer",
        image: mani,
      },
      {
        name:"Vamsi",
          title: "Senior Developer",
        image: vamsi,
      },
  
  ];
const Founders=()=>{
    return(
<div className="founders-container">
    <h1 className='founders-title'>Meet Our Team</h1>
    <div className='founders-grid'>
        {persons_list.map((person, index) => (
            <FounderCard key={index} name={person.name} title={person.title} image={person.image} />
        ))}
    </div>
  
</div>
    );
}
export default Founders;