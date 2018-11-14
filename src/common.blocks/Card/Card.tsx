import React from 'react';
import { cn } from '@bem-react/classname';

import Button from '../Button/Button';
import { Camera } from '../Camera/Camera';
import Player from '../Player/Player';

import './Card.css';

import chart from './images/richdata.svg';

export interface ITrack {
  length: string;
  name: string;
}

export interface IEventData {
  temperature?: string;
  humidity?: string;
  albumcover: string;
  artist: string;
  track: ITrack;
  volume: string;
  buttons: string[];
  image: string;
  type?: string;
}

export interface IEvent {
  type: string;
  title: string;
  source: string;
  time: string;
  icon: string;
  size: string;
  description?: string;
  data?: IEventData;
}

export interface ICardProps {
  event: IEvent;
}

const card = cn('Card');

export const Card = ({ event }: ICardProps) => {
  const {
    title,
    source,
    time,
    description,
    data,
    size,
    type,
    icon,
  } = event;

  return (
    <article className={card({ size, type })}>
      <div className={card('Heading')}>
        <div className={card('Title')}>
          <div className={card('TitleIcon', {[icon]: true})}>
            <img src={`./images/${icon}.svg`} alt="" />
          </div>
          <h1 className={card('TitleText')}>{title}</h1>
        </div>
        <div className={card('Meta')}>
          <div className={card('MetaSource')}>{source}</div>
          <div className={card('MetaTime')}>{time}</div>
        </div>
      </div>
        <div className={card('Body')}>
          <div className={card('Description')}>{description}</div>
          {data && data.type === 'graph' &&
            <img className={card('ContentGraph')} src={chart} />}

          {data && data.temperature &&
            (
              <div className={card('ContentThermal')}>
                <div>
                  Температура: <span className={card('ContentTemp')}>{data.temperature} C</span>
                </div>
                <div>
                  Влажность: <span className={card('ContentHumi')}>{data.humidity}%</span>
                </div>
              </div>
            )}

          {data && data.albumcover &&
            (
              <Player {...data} />
            )}

          {data && data.buttons &&
            (
              <div className={card('ContentButtons')}>
                {data.buttons.map(b => (
                  <Button text={b} />
                ))}
              </div>
            )}

          {data && data.image &&
            (
              <Camera />
            )}
        </div>
      <div className={card('Close')} />
      <div className={card('Next')} />
    </article>
  );
};
