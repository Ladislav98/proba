import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="px-4 my-10 text-center sm:my-16">
      <h1 className="mb-8 text-xl text-semibold md:text-3xl">
        The best pizza
        <br />
        <span className="text-yellow-500">
          Baked for you. With purpose for you 🔥
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
