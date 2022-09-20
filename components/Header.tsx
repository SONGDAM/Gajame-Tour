import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderTheme } from '../styles/style';
import hamburger from '../assets/icon/hamburger-button.svg';
import close from '../assets/icon/close.svg';
import { Box, Flex } from '@chakra-ui/react';
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
        <Box>
          <Flex gap='1rem' position='relative' left='28.8rem' top='-0.4rem' className='header-menu'>
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
          </Flex>
        </Box>
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
