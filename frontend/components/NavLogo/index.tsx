import LogoWrapper from './styles';

export default function NavLogo({ path }: { path: string; }) {
  return (
    <LogoWrapper>
      <img src={path} alt="Hip Hop Pop Logo" />
    </LogoWrapper>
  )
}