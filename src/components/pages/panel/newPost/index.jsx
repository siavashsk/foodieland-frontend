import React from "react";
import { icons } from "../../../../utils/icons";
import PanelLayout from "../../../layout/panelLayout";
import styles from "./index.module.css";

const NewPost = () => {
  const listClasses = `${styles["nav__links"]} mx-8 cursor-pointer flex items-center`;

  return (
    <PanelLayout>
      <>
        <nav className="border-b-2 border-slate-300 py-3">
          <ul className="flex justify-start">
            <li className={listClasses}>
              <span className="mr-2 fill-slate-800">{icons.search()}</span>{" "}
              <p>Recipe</p>
            </li>
            <li className={listClasses}>
              <span className="mr-2 fill-slate-800">{icons.security()}</span>{" "}
              <p>Article</p>
            </li>
          </ul>
        </nav>
        <section>zcdfdfsa</section>
      </>
    </PanelLayout>
  );
};

export default NewPost;
