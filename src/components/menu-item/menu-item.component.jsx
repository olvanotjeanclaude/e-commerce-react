import {  Link,withRouter } from "react-router-dom";
import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div
      className="content"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <h1 className="title">{title.toUpperCase()}</h1>
      <Link to="/shop">
        <span className="subtitle">SHOP NOW</span>
      </Link>
    </div>
  </div>
);

export default withRouter(MenuItem);