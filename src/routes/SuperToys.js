import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import supertoy from '../images/supertoy.jpg';

function SuperToys() {
    return (
        <div class='bg-yellow-200 w-full min-h-screen text-xl'>
            <NavBar />
            <div class='m-20 gap-2 flex flex-col min-h-screen items-center'>
                <p className='text-3xl font-bold'>
                    Brian Aldiss, Supertoys Last All Summer Long
                </p>
                <p>
                    "Supertoys Last All Summer Long" is a short story in the future where procreation is restricted and families are supplemented with advanced artificial intelligence robots designed to look and behave like humans.
                    One family has a robot child who struggles to find acceptance and prove himself as a true replacement for a couple's lost son.
                    Artificial intelligence can easily be adapted to provide companionship between an animal and a human.
                    AI is already being used to provide companionship through virtual assistants and chatbots.
                    In the future, as AI develops, robots with smart AI could be used to provide any level of companionship the user would want.
                    I feel that an intermediate level of camaraderie would be weird, and there would always be a level of cognizant dissonance as it wouldn't be quite human.
                    Personally, the droids in Star Wars, like R2D2, would be a good level of companionship. Creating facsimiles indistinguishable from real humans is still a long way off.
                    My guess would be in 100 years, we would have AI at that level, but the robot body would be lacking.
                    There are ethical considerations to consider, and society would not easily allow these robots to be created on a large scale.
                    The only way I see it working is if they were in non-human forms.
                </p>
                <img className='w-1/5 rounded-md mt-6' src={supertoy} alt='' />
            </div>

            <Footer />
        </div>
    );
}

export default SuperToys;