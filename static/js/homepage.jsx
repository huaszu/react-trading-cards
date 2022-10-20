'use strict';

function Homepage() {
  return (
    <React.Fragment>
      <a href="/cards">Click here to view the trading cards.</a>
      <br></br>
      <img src="/static/img/balloonicorn.jpg"></img>
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
