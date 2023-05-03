import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import rough from '../images/rough.jpg';

function Rough() {
    return (
        <div class=' bg-lime-200 w-full min-h-screen text-xl'>
            <NavBar />
            <div class='m-20 gap-2 flex flex-col min-h-screen items-center'>
                <h1 className='text-3xl'>
                    Jon Turney, The Rough Guide To The Future
                </h1>
                <p>
                    Talks about the future of space travel and robots. Robots will take over the universe if they are capable of self replication.
                </p>
                <img className='h-1/4 w-1/4 m-6' src={rough} alt='' />
            </div>

            <Footer />
        </div>
    );
}

export default Rough;