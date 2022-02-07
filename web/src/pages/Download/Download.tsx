import { FC } from 'react'
import { Flex } from 'theme-ui'
import { Button as Btn } from '../../components/Button/Button'
import { Nav as Menu } from '../../components/Nav/Nav'
import { saveAs } from 'file-saver'

export const Download: FC = () => {
  const saveFile = () => {
    saveAs('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', 'example.pdf')
  }

  return (
    <>
      <Menu />
      <Flex p={4} sx={{ height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
        <Flex
          p={4}
          sx={{
            borderRadius: 'sm',
            border: '1px solid',
            borderColor: 'primary',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <h2>Download some data here 👇</h2>
          <Btn onClick={saveFile}>Download</Btn>
        </Flex>
      </Flex>
    </>
  )
}
