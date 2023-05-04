import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import probe from '../images/vonNeumann.jpg';

function Rough() {
    return (
        <div class=' bg-purple-200 w-full min-h-screen text-xl'>
            <NavBar />
            <div class='m-20 gap-2 flex flex-col min-h-screen items-center'>
                <p className='text-3xl font-bold'>
                    Jon Turney, The Rough Guide To The Future
                </p>
                <p>
                There were a couple of times Turney brought up ideas of AI in The Rough Guide, but I thought the concept of Von Neumann probes was the most interesting. 
                If AI robots become capable of self-reproduction, we could colonize the universe using robots. 
                I had never thought of a future where AI robots are capable of landing on a new planet, creating more spaceships, and going to another solar system. 
                This is a possible future because the biggest problem with space travel is the vast distances between galaxies. 
                Distance wouldn't matter with AI robots as they aren't living, so food, radiation, and aging are not a factor. 
                Turney also mentions a "Darwinian twist to the argument for computerized intelligence taking over the cosmos" (Turney 354). 
                If there is a large number of planets with intelligent life, then if every civilization uses Neumann probes, the winner will fill the universe. 
                It reminds me of the Fermi Paradox, which is there is a high likelihood that the universe is full of life, but we haven't seen any signs of alien life. 
                In the near future, I see AI being used in space missions like on Mars. 
                The time for a message to reach Mars is around 5-20 minutes which is too long for life-critical decisions. 
                AI could help astronauts make calculations or decisions they don't want to wait for.
                </p>
                <img className='w-1/2 m-6 rounded-md' src={probe} alt='' />
            </div>

            <Footer />
        </div>
    );
}

export default Rough;