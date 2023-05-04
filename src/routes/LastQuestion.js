import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import lastQuest from '../images/lastquest.jpeg';

function LastQuestion() {
    return (
        <div class='bg-yellow-200 w-full min-h-screen text-xl'>
            <NavBar />
            <div class='m-20 gap-2 flex flex-col min-h-screen items-center'>
                <h1 className='text-3xl font-bold'>
                    Isaac Asimov, The Last Question
                </h1>
                <p>
                    1. Considering Asimov's "The Last Question," I don't think we rely too much on technology and science to solve our problems. In today's society, we use technology
                    to answer basic questions, but our machines can only sometimes answer more complex questions. We seek out other humans or research them ourselves to find the answers.
                    In the future, like in the reading, I see society relying on technology to answer and solve all of our problems. As machines get more advanced,
                    it gets easier and easier to just ask a machine for an answer instead of trying to figure things out by yourself.
                </p>
                <img className='h-1/4 w-1/4 rounded-md' src={lastQuest} alt='' />
            </div>

            <Footer />
        </div>
    );
}

export default LastQuestion;