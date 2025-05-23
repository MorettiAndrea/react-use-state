import { useState } from "react";

export default function ButtonsLayout() {
  return (
    <main>
      <h1>Learn Web Development</h1>
      <div className="custom-container">
        <div className="btns-row">
          <button className="button">HTML</button>
          <button className="button">CSS</button>
          <button className="button">Javascript</button>
          <button className="button">NODE.JS</button>
          <button className="button">Express</button>
          <button className="button">ReactJS</button>
        </div>
        <div className="main-pharagraph">
          <h3>HTML</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            repellendus?
          </p>
        </div>
      </div>
    </main>
  );
}
