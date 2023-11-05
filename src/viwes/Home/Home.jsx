import './Home.css';
import { useSearchParams } from 'react-router-dom';
import React from 'react';

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

    const to = searchParams.get("to");
    const from = searchParams.get("from");
    const greetingNumber = searchParams.get("g" )>= GREETINGS.length ? 0 :searchParams.get("g") ||  0;
    return (
        <>
            <div className='greeting-container'>
               
                <span className='to-container'> 💐Dear {to}</span>
                <p>
                  {GREETINGS[greetingNumber]}  
                </p>
               <br/><br/><br/><br/>
                <span className='from-container'>🙏 शुभेच्छुक {from}</span>
            </div>
        </>
    )
}
export default Home