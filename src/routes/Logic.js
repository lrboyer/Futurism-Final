import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import logic from '../images/logic.jpg';

function Logic() {
    return (
        <div class='bg-fuchsia-200 w-full min-h-screen text-xl'>
            <NavBar />
            <div class='m-20 gap-2 flex flex-col min-h-screen items-center'>
                <h1 className='text-3xl'>
                    Murray Leinster, A Logic Named Joe
                </h1>
                <p>
                    1. I think that humans can be careless and be too excited about new ideas when making new inventions, mainly because we want to be the first to create something. This eagerness can cause us to be negligent, and we don't fully realize the consequences of what we are bringing into the world. In the story "A Logic Named Joe," I feel that Feinster did foresee the misuse of the internet because he talks about how AI has taken over our lives. The story has parallels to the modern search engine as we use it to answer most of our questions.
                </p>
                <p>
                    2. I think that new technology creates a sense of distrust because we still don't know the long-term impacts of new inventions. Older people who occupy positions of power don't have any experience with new technologies growing up, usually causing them to blame any issues that arise unjustly. The new technologies may disrupt the norm, and older people generally dislike changing their ways. I think this desensitizes us to the dangers of new technology because we are scared of the fears of what may come out of new technology and can't see the dangers that have already ensued.
                </p>
                <p>
                    3. I think Brown's greatest fears are a bit dramatic; some of his ideas are entirely possible. The idea that almost all jobs will be taken by robots is very possible because robots and computers will eventually be advanced enough to be better than humans. A similar article written today might discuss the dangers of ChatGPT, neural networks, and self-driving cars taking our jobs and humans being replaced.
                </p>
                <img className='h-1/4 w-1/4' src={logic} alt='' />
            </div>

            <Footer />
        </div>
    );
}

export default Logic;