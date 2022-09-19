import { useForm, SubmitHandler } from 'react-hook-form';
import { Input, Button, Box, Textarea } from '@chakra-ui/react';
import { ErrorMessage, FormWrapper } from '../styles/style';
import Header from '../components/Header';
import emailJs from '@emailjs/browser';
interface IAskFormProps {
  [name: string]: string;
  phoneNumber: string;
  email: string;
  content: string;
}

const ask = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IAskFormProps>();

  const onSubmit: SubmitHandler<IAskFormProps> = (data: IAskFormProps) => {
    emailJs.send('service_v69alin', 'template_7gn7w38', data, 'vl9M2ZLeDiCWI11Cn').then(
      () => {
        alert('문의가 등록되었습니다');
      },
      (error) => {
        console.warn(error, 'error: Check the network response');
      }
    );
    console.log(data);
  };

  //service_pzxpa0j == servicekey

  //

  return (
    <>
      <Header />
      <Box ml='0.6rem' mt='6rem' fontSize='1.8rem' fontWeight='600'>
        <h4>문의하기</h4>
      </Box>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mt='1rem' w='18rem' pt='1rem'>
            <label htmlFor='이름'>
              <p>이름</p>
              <Input
                variant={'flushed'}
                pl='0.4rem'
                {...register('name', {
                  required: '필수 입력 항목입니다',
                })}
                mb='1.2rem'
                placeholder='이름을 입력해주세요'
              />
            </label>

            {errors?.name?.type === 'required' && <ErrorMessage>이름을 입력해주세요</ErrorMessage>}

            <label htmlFor='전화번호'>
              <p>전화번호</p>
              <Input
                pl='0.4rem'
                variant={'flushed'}
                {...register('phoneNumber', {
                  required: '필수 입력 항목입니다',
                })}
                mb='1.2rem'
                placeholder='번호를 -빼고 입력해주세요'
              />
            </label>

            {errors?.phoneNumber?.type === 'required' && <ErrorMessage>번호를 입력해주세요</ErrorMessage>}

            <label htmlFor='이메일'>
              <p>이메일</p>
              <Input
                pl='0.4rem'
                variant={'flushed'}
                {...register('email', {
                  required: '필수 입력 항목입니다',
                })}
                mb='1.8rem'
                placeholder='이메일을 입력해주세요'
              />
            </label>

            {errors?.email?.type === 'required' && <ErrorMessage>이메일을 입력해주세요</ErrorMessage>}

            <label htmlFor='내용'>
              <p>내용</p>
              <Textarea
                pt='0.8rem'
                fontSize='1rem'
                {...register('content', {
                  required: '필수 입력 항목입니다',
                })}
                mb='1.8rem'
                placeholder='질문 내용을 입력해주세요'
              />
            </label>

            {errors?.content?.type === 'required' && <ErrorMessage>질문내용을 입력해주세요</ErrorMessage>}
          </Box>
          <Button colorScheme='teal' type='submit'>
            문의하기
          </Button>
        </form>
      </FormWrapper>
    </>
  );
};

export default ask;
