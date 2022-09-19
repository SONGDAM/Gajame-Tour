import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import dummy from '../assets/image/dummy.png';
import Footer from '../components/Footer';
import { ImageContainer, LandingItem, LandingImageWrapper } from '../styles/style';
import { ArrowDownIcon } from '@chakra-ui/icons';
import { IconButton, Box } from '@chakra-ui/react';
import logo from '../assets/image/logo.png';

const Home = () => {
  const onClickScrollDown = () =>
    window.scrollTo({
      top: 800,
      left: 100,
      behavior: 'smooth',
    });

  return (
    <>
      <Head>
        <title>GajameVilage Local tour</title>
        <meta property='og:title' content='가자미투어' key='title' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Header />

      <ImageContainer className='image-container'>
        <p>이미지 영역입니다</p>
        <Image src={dummy} className='landing-image' unoptimized={true} layout='fill' />
        <IconButton
          aria-label='Search database'
          icon={<ArrowDownIcon />}
          colorScheme='blackAlpha'
          fontSize='4rem'
          onClick={onClickScrollDown}
          className='scroll-icon'
          position='relative'
          top='9rem'
          right='4rem'
        />
      </ImageContainer>

      <LandingItem className='landing-first-item'>
        <p>
          우리는 당신이 시도하고 싶은 그것, <br />
          함께 기획하고 함께 실행하는 실험공동체 입니다.
        </p>
        <Box>
          <p>
            이곳은 예능처럼 재밌게, 지역에서 가능성을 실험하고, 그 경험을 현실로 만드는 마을 ,<br /> 리얼버라이어티
            빌리지 가자미마을 입니다.
          </p>
        </Box>

        <LandingImageWrapper>
          <Image src={logo} />
        </LandingImageWrapper>
      </LandingItem>

      <LandingItem className='landing-second-item'>
        <p>
          우리는 당신이 시도하고 싶은 그것, <br />
          함께 기획하고 함께 실행하는 실험공동체 입니다.
        </p>

        <p>
          이곳은 예능처럼 재밌게, 지역에서 가능성을 실험하고, 그 경험을 현실로 만드는 마을 ,<br /> 리얼버라이어티 빌리지
          가자미마을 입니다.
        </p>

        <LandingImageWrapper>
          <Image src={logo} />
        </LandingImageWrapper>
      </LandingItem>

      <Footer />
    </>
  );
};

export default Home;
