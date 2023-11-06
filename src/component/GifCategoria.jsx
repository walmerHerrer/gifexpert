/* eslint-disable react/prop-types */

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import Row from "react-bootstrap/Row";
export const Gifcategoria = ({ categoria }) => {
  //console.log(categoria);
  const { images } = useFetchGifs(categoria);
  console.log(images);
  return (
    <>
      <Row>
            {images.map((image) => (
              <GifItem key={image.id} {...image} />
            ))}
      </Row>
    </>
  );
};
