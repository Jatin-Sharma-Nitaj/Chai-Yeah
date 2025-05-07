import React from "react";

const Page = ({ params }) => {
  return (
    <>
      <div>
        <h1 className="bg-red-900">
          Username: {params.username}
        </h1>
      </div>
    </>
  );
};

export default Page;