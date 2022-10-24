import React from "react";

function BacktoTop() {
  return (
    <a className="btn-scroll-top" href="#top" data-scroll>
      <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
      <i className="btn-scroll-top-icon ci-arrow-up"> </i>
    </a>
  );
}

export default BacktoTop;
