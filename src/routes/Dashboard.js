import ArtGenerator from '../components/ArtGenerator';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Youtube from '../components/Youtube';
import cat1 from '../images/cat1.png'
import cat2 from '../images/cat2.png'
import cat3 from '../images/cat3.png'

function Dashboard() {
  return (
    <div class='bg-indigo-200 w-full min-h-screen'>
      <NavBar />
      <div class='m-20 text-xl flex flex-col items-center'>
        <p className='text-3xl m-3 font-bold'>
          Our Future with AI
        </p>
        <p>
          In the last few months, the world has seen an increasing concern for AI.
          New AI technology like ChatGPT and DALL-E has recently been revealed to the public and has brought about extensive societal changes.
          If AI is still only in its infancy, what will it be like in 30 years, 100 years?
          I believe that AI will be a substantial part of our everyday lives going on into the future.
          The different webpages will explore some of the possible futures of AI envisioned by the literature we read in class.
        </p>
        <br />

        <div class="flex m-6 justify-center">
          <Youtube />
        </div>

        <p class='pt-6'>
          Since the literature we read in class is somewhat outdated, I wanted a fresher viewpoint on AI.
          This video goes over the problem with current AI training.
          We give them a fixed objective, and in the future, AI might do anything to achieve that objective.
          These are very valid concerns for the future of AI, as we would want them to be careful of doing anything detrimental to humanity.
          The video also makes an interesting point that if machines manage our society, teaching the next generation how it works may become unnecessary.
          Our society becoming like Wall-E is a genuine possibility, as I think we would see ourselves becoming more mindless and letting AI do everything for us.
        </p>

        <div class='flex flex-col justify-center items-center m-6 w-2/3 p-3 rounded-md bg-gray-700'>
          <div class='flex flex-col md:flex-row justify-center items-center bg-gray-700'>
            <img
              className="m-3 w-1/2 rounded-md"
              src={cat1}
              alt="cat1"
            />
            <img
              className="m-3 w-1/2 rounded-md"
              src={cat2}
              alt="cat2"
            />
            <img
              className="m-3 w-1/2 rounded-md"
              src={cat3}
              alt="cat3"
            />
          </div>
          <p class='text-sm text-white'>
            Given the prompt: "Guitar playing cat wearing a sombrero on stage"
          </p>
          <p class='text-sm text-white'>
            It gave me these masterpieces
          </p>
        </div>

        <br />
        <p>
          I wanted to see how good our current AI technology has gotten so I decided to use OpenAI's image generation API for my own testing (try it out below).
          This is the same model that DALL-E 2 and many companies use for AI image generation. It was quite easy to get it up and running and it can produce some convincing artwork.
          I also used ChatGPT while building this website to expedite the process. It gave me coding advice and step by step tutorials on how to fix the various issues I ran into.
          I would say that currently, AI is useful as a tool that anyone can use and can help them with their work, but good enough to replace humans fully.
          Both AI models gave me errors and wonky responses that sometimes made no sense.
          When it did work, it shocked me at how good it was.
          I asked for another code implementation, and it wrote the functionality I wanted first try.
        </p>

      </div>

      <div class="flex flex-col m-4 items-center justify-center">
        <ArtGenerator />
      </div>

      <Footer />

    </div >
  );
}

export default Dashboard;
