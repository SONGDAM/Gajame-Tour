import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderTheme, HeaderMenu } from '../styles/style';
import hamburger from '../assets/icon/hamburger-button.svg';
import close from '../assets/icon/close.svg';
import { Box } from '@chakra-ui/react';
import Sidebar from './Sidebar';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <>
      <HeaderTheme className='header'>
        <Link href='/'>
          <a>Local Tour</a>
        </Link>
        <HeaderMenu>
          <Box>
            <Link href='/ask'>
              <a>ask us</a>
            </Link>
          </Box>
          <Box>
            <Link href='/about'>
              <a>about</a>
            </Link>
          </Box>
          <Box>
            <a href='http://www.gajame.com/'>gajame</a>
          </Box>
        </HeaderMenu>

        {isSidebarOpen ? (
          <Image src={close} alt='' onClick={handleSidebar} className='sidebar-button' />
        ) : (
          <Image src={hamburger} alt='' onClick={handleSidebar} className='sidebar-button' />
        )}

        {isSidebarOpen && <Sidebar />}
      </HeaderTheme>
    </>
  );
};

export default Header;
