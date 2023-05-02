import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const apiKey = process.env.REACT_APP_API_KEY || process.env.apiKey

const ArtGenerator = () => {

    const [prompt, setprompt] = useState("")
    const [result, setresult] = useState('')
    const configuration = new Configuration({
        apiKey: apiKey
    });
    const openai = new OpenAIApi(configuration);

    const generateImage = async () => {
        try {
            const res = await openai.createImage({
                prompt: prompt,
                n: 1,
                size: "1024x1024",
            });
            setresult(res.data.data[0].url);
        } catch (error) {
            console.error(error);
            window.alert("Error generating image (bad prompt or I ran out of free uses): " + error.message);
        }
    };

    return (
        <div class='flex flex-col w-1/3 bg-gray-700 rounded-md gap-3 text-white'>
            <h1 class="mt-3 flex justify-center">
                Generate an Image using OpenAI API (may take a moment)
            </h1>
            <div class="mb-3 mx-8 gap-3 flex flex-col justify-center items-center">
                <input
                    className="app-input"
                    class="border rounded py-2 px-3 text-black w-5/6" type="text" placeholder="Type Prompt"
                    onChange={(e) => {
                        setprompt(e.target.value);
                    }}
                />
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-2/5" onClick={generateImage}>
                    Generate an image
                </button>
            </div>

            {result && (
                <img
                    className="result-image m-3 max-w-full max-h-400 object-contain"
                    src={result}
                    alt=""
                />
            )}
        </div>
    );
};

export default ArtGenerator;