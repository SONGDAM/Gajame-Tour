import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const HeaderTheme = styled.header`
  display: flex;
  position: fixed;
  box-sizing: border-box;

  align-items: center;

  background-color: white;

  width: 100%;
  height: 64px;

  justify-content: space-between;

  top: 0;

  z-index: 9999;
  font-size: 1.4rem;
  padding: 0.4rem 1rem;
`;

export const HeaderMenu = styled(Box)`
  display: flex;
  gap: 1rem;
  align-items: center;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 24.8rem;
  margin-top: 4rem;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100vw;

  flex-wrap: wrap;
  padding-top: 12rem;
  height: 33.8rem;
  p {
    color: white;
    position: relative;
    top: -8rem;
    left: 2.2rem;
    z-index: 2;
    display: block;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 200;
  }
`;

export const LandingText = styled.div`
  position: absolute;
  top: 4rem;
  font-size: 1rem;
  font-weight: 200;
  color: white;
`;

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 4rem;
  right: 0;
  width: 26rem;
  height: 100vh;
  background-color: #fff;
`;

export const SidebarItem = styled(motion.div)`
  margin-bottom: 2.4rem;
  color: black;
  text-align: center;
  font-size: 1rem;
  &:first-child {
    margin-top: 6.8rem;
  }
`;

export const LandingItem = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* flex-direction: column; */
  margin-top: 20rem;
  padding: 1rem;
  height: 10rem;
  text-align: center;
  line-height: 1.2;
  img {
    margin-top: 1.2rem;
  }
  &.landing-second-item {
    margin-top: 22rem;
  }
`;

export const LandingImageWrapper = styled(motion.div)`
  width: 12rem;
  height: 12rem;
`;

export const FooterWrapper = styled.div`
  padding-left: 2rem;
  margin-top: 20rem;
  height: 24rem;
  display: flex;
  background-color: black;
  color: white;
`;

export const AboutItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  height: 24rem;
  align-items: center;
`;

export const ErrorMessage = styled.div`
  width: 8rem;
  height: 1rem;
  font-size: 14px;
  color: red;
  margin-bottom: 1rem;
`;

export const FormWrapper = styled.div`
  display: flex;
  margin-top: 3rem;
  margin-bottom: 4rem;
  padding-left: 1.4rem;
  padding-right: 1.4rem;
  justify-content: center;
  align-items: center;
  height: 24rem;
  /* border: 1px solid #000; */
  border-radius: 8px;
  p {
    margin-bottom: 0.6rem;
  }
`;
