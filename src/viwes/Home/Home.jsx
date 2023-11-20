import './Home.css';
import { useSearchParams } from 'react-router-dom';
import React, { useState } from 'react';
import Diwalilamp from "./../diwali-lamp.png";
import Lampg from "./../lamp-g.png";
import Lamp from "./../lamp.png";
import env from 'dotenv';

const GREETINGS = [
    "स्नेहाचा सुगंध दरवळला,आनंदाचा सण आला.विनंती आमची परमेश्वराला,सौख्य, समृध्दी लाभो तुम्हाला.दिवाळीच्या हार्दिक शुभेच्छा!",
    "सर्व मित्र परिवाराला …दीपावलीच्या धनदायी ,प्रकाशमय,चैतन्यदायी मंगलमय शुभेच्छा !!!दीपावलीच्या हार्दिक शुभेछा…",
    "सगळा आनंद सगळे सौख्य,सगळ्या स्वप्नांची पूर्णता,यशाची सगळी शिखरे,सगळे ऐश्वर्य,हे आपल्याला मिळू दे,ही दीपावली आपल्या आयुष्याला एक नवा उजाळा देवू दे…",
    "लक्ष लक्ष दिव्यांनी उजळुन निघो ही निशाघेऊनि येवो नवी उमेद नवी आशा,सोबत आमच्या लक्ष लक्ष शुभेच्छा!",
    "यशाची रोषणाई कीर्तीचे अभ्यंग स्नान मनाचे लक्ष्मिपुजनसमृद्धीचे फराळप्रेमाची भाऊबीजअशा मंगल दिवाळीच्या शुभेच्छा",
    "एक दिवा लावु जिजाऊचरणी।  एक दिवा लावु शिवचरणी।  एक दिवा लावु शंभुचरणी। आमचा इतिहास हीच आमची प्रतिष्ठा….. दिपावलीच्या हार्दिक शिवशुभेच्छा…. आपल्या घरि सुख समाधान सदैव नांदो हिच जगदंबेचरणी प्रार्थना॥ ।। जय शिवराय ।। तुम्हाला व तुमच्या कुटुंबियांना दिवाळीच्या हार्दिक शुभेछा !!"
]

function Home() {
    const [searchParams] = useSearchParams();

    const [to, setTo]=useState(searchParams.get("to"));
    const [from , setFrom]= useState(searchParams.get("from"));
    const [greetingNumber, setGreetingNumber] = useState(searchParams.get("g") >= GREETINGS.length ? 0 : searchParams.get("g") || 0)
    const [thimNumber,setThimNumber]=useState(searchParams.get("t"))

    return (
        <>
            <div>
                <div className={`greeting-container ${`theme-${thimNumber}`}`}>
                    <img src={Diwalilamp} className='lamp' />
                    <span className='to-container'> 💐 Dear {to}</span>
                    <p>
                        {GREETINGS[greetingNumber]}
                    </p>
                    <br /><br /><br /><br />
                    <span className='from-container'>🙏 शुभेच्छुक {from}</span>

                    <img src={Lampg} className='diwali-lamp left-lamp' />
                    <img src={Lamp} className='diwali-lamp right-lamp' />
                </div>
                <p className='create-your-won'>Do you want to create your own Diwali Greeting? Custmiztion it here 👇</p>
                <p className='url'>{import.meta.env.VITE_BASE_URL}?to={to}&from={from}&g={greetingNumber}&t={thimNumber}</p>
                <div className='input-container'>
                <input className="input-box" type='text' placeholder='To' onChange={(e)=>{setTo(e.target.value)}} value={to} />
                <input className="input-box" type='text' placeholder='From' onChange={(e)=>{setFrom(e.target.value)}} value={from} />
                <select className="input-box" value={greetingNumber} onChange={(e)=>{setGreetingNumber(e.target.value)}} >
                <option value="0">Greeting 1</option>
                <option value="1">Greeting 2</option>
                <option value="2">Greeting 3</option>
                <option value="3">Greeting 4</option>
                </select> 
                <select className="input-box" value={thimNumber} onChange={(e)=>{setThimNumber(e.target.value)}}>
                    <option value="1">Theme 1</option>
                    <option value="2">Theme 2</option>
                    <option value="3">Theme 3</option>
                    <option value="4">Theme 4</option>
                    <option value="5">Theme 5</option>
                </select>
                </div>
            </div>
        </>
    )
}
export default Home