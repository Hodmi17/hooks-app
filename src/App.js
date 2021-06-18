import StockComponent from './StockComponents'

function App(){
  return(
    <div className="container">
      <StockComponent Name="pants"/>
      <StockComponent Name="T-shirts"/>
      <StockComponent Name="Socks"/>
    </div>
  )
}
export default App;