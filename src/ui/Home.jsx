import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="px-4 my-10 text-center sm:my-16">
      <h1 className="mb-8 text-xl text-semibold md:text-3xl">
        Your Local shop.
        <br />
        <span className="text-pink-500">
          Here for you. Quick and easy order🔥
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
