import Link from 'next/link';
import { SidebarItem, SidebarWrapper } from '../styles/style';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarItem animate={{ scale: 1.6 }}>
        <Link href='/about'>
          <a>about</a>
        </Link>
      </SidebarItem>
      <SidebarItem animate={{ scale: 1.6 }}>
        <Link href='/ask'>
          <a>ask us</a>
        </Link>
      </SidebarItem>
    </SidebarWrapper>
  );
};

export default Sidebar;
