import Image, { ImageProps } from "next/image";
import StyledPageImage from './styles';

export default function PageImage({ src, header, ...props }: { src: string, header: boolean | undefined, props: ImageProps }) {
  // header images

  return (
    <StyledPageImage>
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
    </StyledPageImage>
  );
}
