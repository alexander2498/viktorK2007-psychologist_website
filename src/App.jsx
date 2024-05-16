import './App.css';
import ButtonSign from './buttons/buttonSign';
import TopButton from './buttons/topButton';


function App() {
  return (
    <div className='background' style={styles.background} >
      <div className='flex' style={styles.flex}>
        <TopButton border={'none'} backgroundColor={'rgb(255, 255, 255, 0.4)'} sign="о методах" padding={"0.22em"} marginLeft={"2%"} />
        <ButtonSign border={'none'} backgroundColor='rgb(255, 255, 255, 0.4)' sign="о сеансах" />
        <ButtonSign border={'none'} backgroundColor='rgb(255, 255, 255, 0.4)' sign="об образовании" />
        <ButtonSign border={'none'} backgroundColor='rgb(255, 255, 255, 0.4)' sign="как связаться" />
      </div>
      <ButtonSign border={'3px solid white'} backgroundColor ='rgb(255, 255, 255, 0.4)' sign="Записаться" />

    </div>
  );
}

const styles = {
  background: {
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  flex: {
    display: "flex",
    marginRight: "2vw",
    justifyContent: "flex-end",
    paddingTop: "4vh",
    fontSize: "26px"
  },
}



export default App;