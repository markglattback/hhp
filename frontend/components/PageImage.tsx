import styled from "styled-components";
import Image from "next/image";

const ImageWrapper = styled.div`
  max-width: 976px; /* to maintain 16:9 aspect ratio */
  margin: 0 auto;

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

type NextImageProps = Parameters<typeof Image>[0];

export type OptimisedImageProps = {
  alt: string;
  header: boolean | undefined;
  width?: number;
  height?: number;
} & NextImageProps;

export default function PageImage({ ...props }: OptimisedImageProps) {
  // header images
  if (props.header) {
    return (
      <ImageWrapper>
        <Image
          width={1036}
          height={491}
          quality={100}
          priority
          loading="eager"
          {...props}
        />
      </ImageWrapper>
    );
  }

  return (
    <ImageWrapper>
      <Image unsized {...props} />
    </ImageWrapper>
  );
}
