import LinkButton from "./LinkButton";

function PageNotFound() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <h1>Page not found.</h1>
        <LinkButton to="-1">&larr; Go back</LinkButton>
      </div>
    </div>
  );
}

export default PageNotFound;
