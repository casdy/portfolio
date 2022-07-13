import React from "react";
import CSSTypes from "../../Types";
const styles: CSSTypes = {


}
const Resume = () => {
  return <div >
    <a href= "data\caleb_ojukwu(res).pdf" style={styles.workLink} download>
              {`My Resume`}
            </a>
  </div>;
};

export default Resume;
