import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import Header from "./Header";

const GptSearchPage = () => {
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="fixed -z-10">
        <div className="absolute w-full h-full bg-black bg-opacity-40 z-10"></div>
        <img
          alt="background"
          className="h-screen w-screen object-cover"
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="w-screen">
        <div className="text-white font-extrabold text-md sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-center w-full pt-[10rem] lg:pt-[15rem] ">
          <span>Discover your next cinematic escape with AI!</span>
        </div>

        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearchPage;
