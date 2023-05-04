import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import lastQuest from '../images/lastquest.jpeg';

function LastQuestion() {
    return (
        <div class='bg-green-200 w-full min-h-screen text-xl'>
            <NavBar />
            <div class='m-20 gap-2 flex flex-col min-h-screen items-center'>
                <p className='text-3xl font-bold'>
                    Isaac Asimov, The Last Question
                </p>
                <p>
                    "The Last Question" is a short story that explores the idea of entropy and the potential for humanity to transcend the limitations of the universe.
                    The story follows the progression of humanity's supercomputer AI and its quest to answer the ultimate question: "Can entropy be reversed?"
                    The central argument in The Last Question revolves around humanity's growing dependence on technology and science to solve problems.
                    Throughout the narrative, the AC, a supercomputer computer, provides solutions to various issues but cannot answer the critical question of reversing entropy.
                    People in each generation instinctively turn to the AC for answers, highlighting their increasing reliance on technology rather than seeking solutions independently.
                    People have a misconception that computers can solve every question, and if not right now, it's only a matter of time before it is solved.
                    Asimov shows that we may never receive answers to our most significant questions through science and technology alone.
                    Humanity might continue waiting for answers that may only arrive when it is too late.
                </p>
                <img className='h-1/4 w-1/4 rounded-md mt-6' src={lastQuest} alt='' />
            </div>

            <Footer />
        </div>
    );
}

export default LastQuestion;