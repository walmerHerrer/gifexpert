/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Col from "react-bootstrap/Col";

export const GifItem = ({ title, url, id }) => {
  return (
    <Col xs={4}>
      <div className="text-center">
        <img src={url} alt={title} width={300} height={300} />
        <p>{title}</p>
      </div>
    </Col>
  );
};
