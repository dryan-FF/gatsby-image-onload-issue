import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function ListItem({ image, onLoad }) {
  return (
    <li key={image.description}>
      <GatsbyImage
        alt={image.description}
        image={image.gatsbyImageData}
        onLoad={() => {
          onLoad();
        }}
      />
    </li>
  );
}
