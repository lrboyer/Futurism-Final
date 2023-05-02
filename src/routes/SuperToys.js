import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import supertoy from '../images/supertoy.jpg';

function SuperToys() {
    return (
        <div class='bg-green-200 w-full min-h-screen text-xl'>
            <NavBar />
            <div class='m-20 gap-2 flex flex-col min-h-screen items-center'>
                <h1 className='text-3xl'>
                    Brian Aldiss, Supertoys Last All Summer Long
                </h1>
                <p>
                    2. Artificial intelligence is already being used to provide companionships, such as in the form of virtual assistants or chatbots. AI most definitely could be adapted to provide companionship that is more than an animal but less than a human. I feel that an intermediate level of companionship would be weird, and there would always be a level of cognizant dissonance as it wouldn't be quite human. Creating human facsimiles that are indistinguishable from real humans is still a long way off. My guess would be in 100 years, we would have AI at that level, but the robot body would be lacking. There are ethical considerations to take into account; society would not easily allow these robots to be created on a large scale.
                </p>
                <img className='h-1/4 w-1/4' src={supertoy} alt='' />
            </div>

            <Footer />
        </div>
    );
}

export default SuperToys;