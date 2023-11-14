import React from "react";

function More({ btn }) {
  return (
    <section className="more">
      <button onClick={btn} className="more__btn">
        Ещё
      </button>
    </section>
  );
}

export default More;
