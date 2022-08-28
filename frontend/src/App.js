function App() {
  const get = async function () {
    const res = await fetch('http://localhost:5000', { mode: 'cors' })
    console.log(res)
  }
  get()
  return <div>welcome to frontend</div>
}

export default App
