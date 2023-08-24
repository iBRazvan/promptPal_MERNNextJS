import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Explore & Collaborate
        <br className="max-md:hidden" />
        <span className="blue_gradient"> AI-Enhanced Suggestions</span>
      </h1>
      <p className="desc text-center">
        PromptPal: Empowering the Modern World with an Open-Source AI Prompting
        Tool to Uncover, Craft, and Exchange Inspirational Prompts.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
