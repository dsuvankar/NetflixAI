import openai from "./openai";
import { MESSAGE_REFERENCE } from "./Constants";

export const getMovieRecommendations = async (inputText) => {
  const messages = [...MESSAGE_REFERENCE];
  messages.push({ role: "user", content: inputText });

  const gptResults = await openai.chat.completions.create({
    messages: messages,
    model: "gpt-3.5-turbo",
  });

  if (!gptResults.choices) {
    throw new Error("No recommendations found.");
  }

  const movieList = gptResults.choices[0]?.message?.content;

  if (movieList.trim() === "NA") {
    return [];
  }

  const validMovies = movieList.split(",").map((movie) => movie.trim());

  return validMovies;
};
