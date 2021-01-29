import Header from './components/header'
import Layout from './components/layout'
import Footer from './components/footer'

import Bg2 from './bg2.jpg'
import Bg3 from './bg3.jpg'

const App = () => {
  return (
    <>
      <Header title={'This is title'} descr={'This is Description!'} />
      <Layout id={1} title={'title 1'} descr={'descr 1'} urlBg={Bg2} />
      <Layout id={2} title={'title 2'} descr={'descr 2'} colorBg={'#907090'} />
      <Layout id={3} title={'title 3'} descr={'descr 3'} urlBg={Bg3} />
      <Footer />
    </>
  )
}

export default App
