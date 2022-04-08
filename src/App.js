import './App.css';

function App() {
  const tiles = []
  for (let i = 0; i < 30; ++i) {
    tiles.push(<div className='tile' />)
  }

  const keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
  const firstRow = []
  for (let i = 0; i < 10; ++i) {
    firstRow.push(<button className='key' data-key={keys[i]}>{keys[i]}</button>)
  }
  const secondRow = []
  for (let i = 10; i < 19; ++i) {
    secondRow.push(<button className='key' data-key={keys[i]}>{keys[i]}</button>)
  }
  const lastRow = []
  for (let i = 19; i < 26; ++i) {
    lastRow.push(<button className='key' data-key={keys[i]}>{keys[i]}</button>)
  }

  return (
    <>
      <div className="alert-container" data-alert-container></div>

      <div data-guess-grid className='guess-grid'>
        {tiles}
      </div>

      <div data-keyboard className='keyboard'>
        {firstRow}
        <div className='space' />
        {secondRow}
        <div className='space' />
        <button data-enter className='key large'>Enter</button>
        {lastRow}
        <button data-delete className='key large'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path fill="var(--color-tone-1)" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
        </svg>
        </button>
      </div>
    </>
  );
}

export default App;
