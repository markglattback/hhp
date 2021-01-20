import Image, { ImageProps } from "next/image";
import StyledPageImage from './styles';

export default function PageImage({ src, header, ...props }: { src: string, header: boolean | undefined, props: ImageProps }) {
  return (
    <StyledPageImage className="grid">
      <Image
        src={src}
        width={1036}
        height={491}
        quality={100}
        priority={header || undefined}
        {...props}
      />
    </StyledPageImage>
  );
}
