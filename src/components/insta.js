import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useInstagram from '../hooks/use-instagram';

const Insta = () => {
  const instaPhotos = useInstagram();
  const username = instaPhotos[0].username;

  return (
    <>
      <h2>Instagram from {username}</h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 1rem - 0.5rem;
        `}
      >
        {instaPhotos.map(photo => (
          <a
            key={photo.id}
            href={`https://instagram.com/p/${photo.id}/`}
            css={css`
              box-shadow: 0;
              display: block;
              margin: 0.5rem;
              width: 120px;
              transition: 200ms;
              max-width: calc(33% - 1rem);
              :focus,
              :hover {
                box-shadow: 0 2px 14px #22222244;
                z-index: 10;
              }
            `}
          >
            <Image
              fluid={photo.fluid}
              alt={photo.caption}
              css={css`
                width: 100%;
                * {
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: space-between;
                }
              `}
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default Insta;
