import React, { Component } from 'react';
import './Buzzle.css';

export class Buzzle extends Component {
  render() {
   const { title, data} = this.props
    return <div>
      <section id="data-science" className='data'>
        <div className='container'>
          <div className='section-title'>
          <h3><span className="text-muted">TOP</span> LIVE EVENTS<span className="text-muted"> FROM </span>{title}<span className='text-muted'> WORLD</span></h3>
          </div>
          <div className='row'>
            {data.map((item) => (
              <div className="card text-white bg-dark my-3" style={{width: "13rem"}}>
              <img src={item.image} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.name}</p>
                <p className="card-text"><i class="bi bi-clock"></i> {item.time}</p>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        
    </div>;
  }
}

export default Buzzle;
