import { useState } from "react";

function CreateUser() {
  const [username, setUsername] = useState("");

  return (
    <form>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        Welcome 🍕! Please start by telling us your name:
      </p>
      <input
        type="text"
        placeholder="Your full name"
        className="mb-8 input w-72"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
    </form>
  );
}

export default CreateUser;
