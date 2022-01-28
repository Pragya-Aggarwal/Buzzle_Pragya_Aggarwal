import React, { Component } from 'react';
import { Creators } from '../../constants/creators';
import './LeftNavPage.css';

export class LeftNavPage extends Component {
  render() {
    return <div>
<div class="wrapper d-flex">
    <div class="sidebar">
        <ul>
            <li><i class="bi bi-house"></i> Home</li>
            <li><i class="bi bi-house"></i> Cultures</li>
            <li><i class="bi bi-building"></i> Rooms</li>
            <li><i class="bi bi-file-music"></i> Playlist</li>
        </ul> <h5 class="text-muted px-3">Recommended Rooms</h5>
        <ul>
        {Creators.map((item) => (
            <div>
                <li>{item.name}<button className='btn'>join</button></li>
                
            </div>
            
            ))}
        </ul>
    </div>
</div>
</div>

  }
}

export default LeftNavPage;
