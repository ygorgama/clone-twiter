import { Button } from "./Button";

export function PageNotFount() {
  return (
    <div className="bg-dark-6 flex items-center justify-center h-screen w-screen">
      <div className="text-white text-center">
        <h1 className="text-xlg font-bold">Page not found</h1>
        <Button
          isPrimary={true}
          size="md"
          isLink={true}
          to="/"
          children="Back"
          className="w-56 mt-8"
        />
      </div>
    </div>
  );
}
