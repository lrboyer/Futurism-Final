import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

function Rough() {
    return (
        <div class=' bg-lime-200 w-full min-h-screen text-xl'>
            <NavBar />
            <div class='m-20 gap-2 flex flex-col min-h-screen'>
                <h1 className='text-3xl'>
                    Jon Turney, The Rough Guide To The Future
                </h1>
                <p>
                    Talks about the future of space travel and robots. Robots will take over the universe if they are capable of self replication.    
                </p>
            </div>

            <Footer/>
        </div>
    );
}

export default Rough;