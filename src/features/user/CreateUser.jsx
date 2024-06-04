import { useState } from "react";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  return (
    <form>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        Welcome 👋! Please start by telling us your name:
      </p>
      <input
        type="text"
        placeholder="Your full name"
        className="mb-8 input w-72"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button to="/menu">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
