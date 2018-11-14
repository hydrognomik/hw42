import React from 'react';
import { cn } from '@bem-react/classname';

import { IEventData } from '../Card/Card';

import './Player.css';

const cnPlayer = cn('Player');

const Player = ({
  albumcover,
  artist,
  track,
  volume,
}: IEventData) => (
  <div className={cnPlayer()}>
    <div className={cnPlayer('Top')}>
      <img className={cnPlayer('Albumcover')} alt="Обложка альбома" src={albumcover} />
      <div className={cnPlayer('Track')}>
        <span className={cnPlayer('Artist')}>{artist}</span>
        -
        <span className={cnPlayer('TrackName')}>{track.name}</span>
      </div>
      <div className={cnPlayer('TrackLength')}>
        <div className={cnPlayer('Value')}>{track.length}</div>
      </div>
    </div>
    <div className={cnPlayer('Controls')}>
      <div className={cnPlayer('Button', { prev: true })} />
      <div className={cnPlayer('Button', { next: true })} />
      <div className={cnPlayer('Volume')}>
        <div className={cnPlayer('VolumeValue', [cnPlayer('Value')])}>{volume}</div>
      </div>
    </div>
  </div>
);

export default Player;
