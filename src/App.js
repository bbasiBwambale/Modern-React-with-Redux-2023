import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'
function App() {
    return (
        <div>

<section className="hero is-primary">
    <div className="hero-body">
        <p className="title">Personal Digital Assistants</p>
    </div>
</section>
            <div className="container">
                <section className="section">
                    <div className="columns">

                        <div className="colums is-4">
                            <ProfileCard 
                            title="Alexa" 
                            handle="@Alexa99" 
                            imageSrc={AlexaImage} 
                            decription="Alexa Was Created by Amazon and helps you buy things"/>
                        </div>

                        <div className="colums is-4">
                            <ProfileCard 
                            title="Cortana" 
                            handle="@Cortana32" 
                            imageSrc={CortanaImage} 
                            decription="Cortana Was Created by Microsoft and helps search things on windows"
                            />
                        </div>

                        <div className="colums is-4">
                            <ProfileCard title="Siri" 
                            handle="@Siri01" 
                            imageSrc={SiriImage} 
                            decription="Alexa Was Created by Aple and helps you play music from any source"
                            />
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;