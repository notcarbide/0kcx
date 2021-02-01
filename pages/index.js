import xw from 'xwind'
import ButtonReact from '../components/ButtonReact'

const Index = () => (
  <div css={xw`grid justify-center items-center h-screen`}>
    <div css={xw`space-y-20`}>
      <ButtonReact href="https://www.carbi.de.com">Carbide</ButtonReact>
      <ButtonReact href="https://vh1.cc">Virtualhost1</ButtonReact>
      <ButtonReact href="https://github.com/notcarbide">Github</ButtonReact>
    </div>
  </div>
)

export default Index
