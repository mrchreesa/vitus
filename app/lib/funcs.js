import React from "react";
// Function to convert new line characters to <br /> elements
const renderDescriptionWithLineBreaks = (description) => {
  return description.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

export { renderDescriptionWithLineBreaks };
