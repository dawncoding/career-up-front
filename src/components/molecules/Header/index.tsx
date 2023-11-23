// import styled from 'styled-components'
import Icon from 'components/atoms/Icon/index.tsx'
import Logo from 'components/atoms/Logo/index.tsx'
import Text from 'components/atoms/Text/index.tsx'
import Box from 'components/layout/Box/index.tsx'
import Flex from 'components/layout/Flex/index.tsx'

const Header = () => {
  return (
    <Flex
      backgroundColor={'black'}
      justifyContent={'space-between'}
      height={'40px'}
      padding={'10px'}
    >
      <Flex>
        <Logo customWidth={50} customHeight={17} />
      </Flex>

      <Flex justifyContent={'space-evenly'} width={'300px'}>
        <Text
          variant="small"
          fontSize={{ base: 'extraSmall', md: 'small' }}
          color={'white'}
        >
          멘토 찾기
        </Text>

        <Text
          variant="small"
          fontSize={{ base: 'extraSmall', md: 'small' }}
          color={'white'}
        >
          나의 채팅
        </Text>

        <Text
          variant="small"
          fontSize={{ base: 'extraSmall', md: 'small' }}
          color={'white'}
        >
          로그인
        </Text>
      </Flex>
      <Box>
        <Icon iconName="menu" width={24} height={24} />
      </Box>
    </Flex>
  )
}

export default Header