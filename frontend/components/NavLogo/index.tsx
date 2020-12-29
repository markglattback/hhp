import { route } from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';
import LogoWrapper from './styles';

export default function NavLogo({ path }: { path: string; }) {
  const router = useRouter();

  function handleOnClick(e: SyntheticEvent) {
    router.push('/');
  }

  return (
    <LogoWrapper onClick={handleOnClick}>
      <img src={path} alt="Hip Hop Pop Logo" />
    </LogoWrapper>
  )
}