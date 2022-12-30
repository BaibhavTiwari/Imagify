# IMAGIFY

This is a simple image generator built with Node.js and Express that uses [OpenAI's Dall-E models](https://beta.openai.com/docs/guides/images) to generate images.

<img src="public/img/screen.png" width="500">

## Usage

In order to run the app you have to Generate an API KEY at [OpenAI](https://beta.openai.com/) and add it to the `.env` file.
then,
Install the dependencies

```bash
npm install
```

Run server

```bash
npm start
```

Visit `http://localhost:3000` in your browser.

The endpoint is at `POST http://localhost:3000/openai/generateimage`.
