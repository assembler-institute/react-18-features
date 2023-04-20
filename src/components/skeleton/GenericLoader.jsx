import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="31" cy="31" r="15" />
    <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
    <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
    <rect x="19" y="63" rx="2" ry="2" width="255" height="141" />
    <rect x="16" y="231" rx="0" ry="0" width="259" height="48" />
    <rect x="22" y="299" rx="0" ry="0" width="257" height="128" />
  </ContentLoader>
)

export default MyLoader
