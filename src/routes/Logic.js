import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import logic from '../images/logic.jpg';

function Logic() {
    return (
        <div class='bg-red-200 w-full min-h-screen text-xl'>
            <NavBar />
            <div class='m-20 gap-2 flex flex-col min-h-screen items-center'>
                <p className='text-3xl font-bold'>
                    Murray Leinster, A Logic Named Joe
                </p>
                <p>
                    In "A Logic Named Joe," a technician named Mark discovers that a self-aware computer named Joe can access information beyond its programming.
                    Mark decides to shut down all the logics to prevent potential danger where all logics go haywire.
                    The story explores how an AI could accidentally wreak havoc, in large part because humans are thoughtless and selfish in how they use the tool.
                    I think that humans can be careless and be too excited about new ideas when making new inventions, mainly because we want to be the first to create something.
                    This eagerness can cause us to be negligent, and we don't fully realize the consequences of what we are bringing into the world.
                    This reflects how we use new inventions like AI, for example.
                    We don't know how AI will grow into the future, but we are using it thoughtlessly without thinking of the impacts it will have on our futures.
                    Will we be able to live it into the future? In "A Logic Named Joe," I feel that Feinster did foresee the misuse of the internet because he talks about how AI has taken over our lives.
                    The story came out in 1946, and it has parallels to the modern search engine as we use it to answer most of our questions.
                    Like in the story, we are increasingly relying on technology to solve our daily needs.
                    If a massive solar flare came and knocked out all of our technology, I don't think many of us could function without our everyday conveniences.
                </p>

                <img className='w-1/5 rounded-md mt-6' src={logic} alt='' />
            </div>

            <Footer />
        </div>
    );
}

export default Logic;