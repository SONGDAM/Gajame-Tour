import { Box, Flex } from '@chakra-ui/react';
import { FooterWrapper } from '../styles/style';

const Footer = () => {
  return (
    <FooterWrapper>
      <Flex direction='column'>
        <Box mt='2.4rem' mb='1.4rem'>
          <h3>주식회사 마카모디</h3>
          <br />
          경상북도 경주시 쪽샘길 8-1번지 8-1,
          <p>Jjoksaem-gil, Gyeongju-si, Gyeongsangbuk-do,</p>
          <p>Republic of Korea 38164</p>
          <br />
          E-mail: mina_kim@macamodi.com
          <br />
          instagram:
          <a href='https://www.instagram.com/macamodi_0km'>https://www.instagram.com/macamodi_0km</a>
        </Box>
      </Flex>
    </FooterWrapper>
  );
};

export default Footer;
