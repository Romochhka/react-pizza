import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="426" y="154" rx="10" ry="10" width="150" height="90" />
    <circle cx="124" cy="124" r="124" />
    <rect x="0" y="309" rx="13" ry="13" width="268" height="88" />
    <rect x="0" y="269" rx="13" ry="13" width="268" height="26" />
    <rect x="0" y="417" rx="13" ry="13" width="95" height="30" />
    <rect x="119" y="409" rx="27" ry="27" width="152" height="45" />
  </ContentLoader>
);
