import styled from "styled-components";
import Image, { ImageProps } from "next/image";

const ImageWrapper = styled.div`
  max-width: 976px; /* to maintain 16:9 aspect ratio */
  margin: 0 auto;
  position: relative;

  img {
    display: block;
    object-fit: cover;
  }
`;

export default function PageImage({ src, header, ...props }: { src: string, header: boolean | undefined, props: ImageProps }) {
  // header images
 
    return (
      <ImageWrapper>
        <Image
          src={src}
          width={1036}
          height={491}
          layout="intrinsic"
          quality={100}
          priority={header || undefined}
          loading={header ? "eager" : "lazy"}
          {...props}
        />
      </ImageWrapper>
    );
  }
