import React from "react";

const Poruduct_CommentAlert = () => {
  return (
    <div className="text-center p-2 bg-light rounded mb-2">
      <div>
      You must be registered or logged in to post a comment.
      </div>
      <br />
      <a href="/kayit" class="btn btn-danger">
        Register
      </a>
      <a href="/giris" class="btn btn-danger ml-2">
        Login
      </a>
    </div>
  );
};

export default Poruduct_CommentAlert;
