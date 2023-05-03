import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const apiKey = process.env.REACT_APP_API_KEY

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
                size: "256x256",
                response_format: "b64_json"
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`,
                }
            });
            setresult(res.data.data[0].b64_json);
        } catch (error) {
            console.error(error);
            window.alert("Error generating image (bad prompt): " + error.message);
        }
    };

    return (
        <div class='flex flex-col w-2/5 bg-gray-700 rounded-md gap-2 text-white items-center justify-center align-middle'>
            <h1 class="mt-3 mx-4 flex justify-center">
                Generate an Image using OpenAI (takes a moment)
            </h1>

            <div class="mb-3 mx-8 gap-3 flex flex-col justify-center items-center w-1/2">
                <input
                    className="w-full border rounded py-2 px-3 text-black"
                    type="text"
                    placeholder="Type a prompt"
                    onChange={(e) => {
                        setprompt(e.target.value);
                    }}
                />
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-1/2" onClick={generateImage}>
                    Generate an image
                </button>
            </div>

            {result && (
                <img
                    className="m-3 max-w-full max-h-400 object-contain"
                    src={`data:image/png;base64,${result}`}
                    alt=""
                />
            )}

            <p class='text-sm text-white m-2'>(I ran out of free tokens so I'm paying for this, its like $0.015 an image so go easy)</p>
            
        </div>
    );
};

export default ArtGenerator;