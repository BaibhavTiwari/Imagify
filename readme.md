# IMAGIFY

This is a simple image generator built with Node.js and Express that uses [OpenAI's Dall-E models](https://beta.openai.com/docs/guides/images) to generate images.

<img src ="https://user-images.githubusercontent.com/75496387/210049156-05e43aec-e1ef-47a8-937e-6dd9f686a7ab.png" width="500">

## Usage

In order to run the app you have to Generate an API KEY at [OpenAI](https://beta.openai.com/) and add it to the `.env` file.
then,
Install the dependencies

```bash
npm install
```

To start the server run the following command in your terminal

```bash
npm start
```

Visit `http://localhost:3000` in your browser.

The endpoint is at `POST http://localhost:3000/openai/generateimage`.
