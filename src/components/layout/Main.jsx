import { useState } from "react";

export default function ButtonsLayout() {
  return (
    <main>
      <h1>Learn Web Development</h1>
      <div className="custom-container">
        <section className="btns-row">
          <button className="custom-button">HTML</button>
          <button className="custom-button">CSS</button>
          <button className="custom-button">Javascript</button>
          <button className="custom-button">NODE.JS</button>
          <button className="custom-button">Express</button>
          <button className="custom-button">ReactJS</button>
        </section>
        <section className="main-pharagraph">
          <h3 className="pharagraph-title">HTML</h3>
          <p className="pharagraph-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            repellendus?
          </p>
        </section>
      </div>
    </main>
  );
}
