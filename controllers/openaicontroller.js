const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
    const { prompt, size } = req.body;
    const imageSize = size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';


    try {
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: imageSize,
        });
        const imageurl = response.data.data[0].url

        res.status(200).json({
            success: true,
            data: imageurl,
        });
    } catch (err) {
        if (err.response) {
            console.log(err.response.status);
            console.log(err.response.data);
        } else {
            console.log(err.message);
        }
        res.status(400).json({
            success: false,
            error: 'image could not be created'
        });

    }
};
module.exports = { generateImage }