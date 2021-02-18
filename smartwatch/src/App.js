import logo from './logo1.png'
import React from 'react'
import classes from './App.module.css';
import Information from './Information';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.TopBar}>
          <img className="img" src={logo} alt="eStore" />
        </nav>
      </header>
<br></br>
      <div className={classes.Main}>
        <div className={classes.Products}>
          <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" />
        </div>

        <div className={classes.Information}>
          <h1 className={classes.Title}>{Information.title}</h1>
          <p className={classes.description}>{Information.description}</p>
          <h3 className={classes.Heading}>Select Color:</h3>
          <div>
            <img className={[classes.Pimage, classes.SelectedImage].join(' ')} src='https://imgur.com/PTgQlim.png' alt="Black watch" />
            <img className={classes.Pimage} src='https://imgur.com/Mplj1YR.png' alt="Blue watch" />
            <img className={classes.Pimage} src='https://imgur.com/xSIK4M8.png' alt="Purple watch" />
            <img className={classes.Pimage} src='https://imgur.com/iOeUBV7.png' alt="Black watch" />
          </div>

          <h3 className={classes.SecHeading}>Features</h3>
          <div>
            <button className={[classes.feature, classes.SelectedFeatureItem].join(' ')}>Time</button>
            <button className={classes.feature}>Heart Rate</button>
          </div>

          <button className={classes.PrimaryButton}>Buy</button>
        </div>

      </div>
    </div>
  );
}

export default App;
