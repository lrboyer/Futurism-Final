import ArtGenerator from '../components/ArtGenerator';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Youtube from '../components/Youtube';

function Dashboard() {
  return (
    <div class='bg-indigo-200 w-full min-h-screen'>
      <NavBar />
      <div class='m-20 text-xl'>
        <h1>
          The future of AI holds a lot of potential for advancements and breakthroughs. Here are some of the areas where we can expect to see progress:
        </h1>
        <br />
        <ul >

          <li>
            Deep Learning: Deep Learning is a subset of machine learning that uses neural networks with multiple layers to improve accuracy in predicting outcomes. We can expect to see more advancements in this area, particularly with regards to the development of more efficient and powerful neural networks.
          </li>
          <li>
            Natural Language Processing (NLP): NLP involves the ability of computers to understand human language and respond appropriately. This technology is already being used in various applications such as virtual assistants, chatbots, and voice recognition systems. We can expect to see more advancements in NLP, particularly with regards to making these systems more human-like in their responses.
          </li>
          <li>
            Robotics: Robotics is the application of AI to the development of robots. With advancements in AI, we can expect to see more sophisticated robots that are capable of performing complex tasks in different environments.
          </li>
          <li>
            Autonomous Vehicles: Self-driving cars are becoming increasingly popular, and the technology behind them is advancing rapidly. We can expect to see more advancements in autonomous vehicle technology in the coming years, particularly with regards to safety features and the ability of these vehicles to operate in complex urban environments.
          </li>
          <li>
            Healthcare: AI has the potential to revolutionize healthcare by improving diagnostics and treatment options. We can expect to see more AI-powered healthcare solutions in the future that will help to improve patient outcomes.
          </li>
          <li>
            Overall, the future of AI is exciting, and we can expect to see a lot of advancements in this field in the coming years.
          </li>
        </ul>

      </div>
      <div class="flex m-6 justify-center">
        <ArtGenerator />
      </div>

      <div class="flex m-6  justify-center">
        <Youtube />
      </div>

      <Footer />

    </div >
  );
}

export default Dashboard;
