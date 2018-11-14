import React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

import { Button } from '../Button';
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

const cnApp = cn('App');
const cnCard = cn('Card');
const cnCamera = cn('Camera');

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
    <RegistryConsumer>
      {registries => {
        // reading App registry
        const registry = registries[cnApp()];

        // taking desktop or mobile version
        const Camera = registry.get(cnCamera());

        return (
          <article className={cnCard({ size, type })}>
          <div className={cnCard('Heading')}>
            <div className={cnCard('Title')}>
              <div className={cnCard('TitleIcon', {[icon]: true})}>
                <img src={`./images/${icon}.svg`} alt="" />
              </div>
              <h1 className={cnCard('TitleText')}>{title}</h1>
            </div>
            <div className={cnCard('Meta')}>
              <div className={cnCard('MetaSource')}>{source}</div>
              <div className={cnCard('MetaTime')}>{time}</div>
            </div>
          </div>
            <div className={cnCard('Body')}>
              <div className={cnCard('Description')}>{description}</div>
              {data && data.type === 'graph' &&
                <img className={cnCard('ContentGraph')} src={chart} />}

              {data && data.temperature &&
                (
                  <div className={cnCard('ContentThermal')}>
                    <div>
                      Температура: <span className={cnCard('ContentTemp')}>{data.temperature} C</span>
                    </div>
                    <div>
                      Влажность: <span className={cnCard('ContentHumi')}>{data.humidity}%</span>
                    </div>
                  </div>
                )}

              {data && data.albumcover &&
                (
                  <Player {...data} />
                )}

              {data && data.buttons &&
                (
                  <div className={cnCard('ContentButtons')}>
                    {data.buttons.map(b => (
                      <Button text={b} key={b} theme={b === 'Да' ? 'yellow' : undefined} />
                    ))}
                  </div>
                )}

              {data && data.image &&
                (
                  <Camera />
                )}
            </div>
          <div className={cnCard('Close')} />
          <div className={cnCard('Next')} />
        </article>
        );
      }}
    </RegistryConsumer>
  );
};
