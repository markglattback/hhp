import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';
import LogoWrapper from './styles';

type NavLogoProps = {
  path: string;
} & React.PropsWithoutRef<JSX.IntrinsicElements['div']>

export default function NavLogo({ path, ...props }: NavLogoProps) {
  const router = useRouter();

  function handleOnClick(e: SyntheticEvent) {
    router.push('/');
  }

  return (
    <LogoWrapper onClick={handleOnClick} data-testid="nav-logo" {...props} >
      <img src={path} alt="Hip Hop Pop Logo" />
    </LogoWrapper>
  )
}