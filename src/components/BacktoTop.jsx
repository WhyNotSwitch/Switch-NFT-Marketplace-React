import React from "react";
import { Link } from "react-router-dom";

function BacktoTop() {
  return (
    <Link className="btn-scroll-top" href="#top" data-scroll>
      <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
      <i className="btn-scroll-top-icon ci-arrow-up"> </i>
    </Link>
  );
}

export default BacktoTop;
