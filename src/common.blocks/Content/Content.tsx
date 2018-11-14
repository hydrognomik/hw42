import React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

import { IEvent, ICardProps } from '../Card/Card';
import data from './events.json';

import './Content.css';

const cnApp = cn('App');
const cnCard = cn('Card');
const content = cn('Content');

export class Content extends React.Component {
  state = { events: [] };

  componentDidMount() {
    const events = data.events;

    this.setState({ events });
  }

  render() {
    const { events } = this.state;

    return (
      <RegistryConsumer>
        {registries => {
            // reading App registry
            const registry = registries[cnApp()];

            // taking desktop or mobile version
            const Card = registry.get<ICardProps>(cnCard());

            return (
              <div className={content()}>
                {events && events.map((event: IEvent, index) => (
                  <Card event={event} key={index} />
                ))}
              </div>
            );
        }}
      </RegistryConsumer>
    );
  }
}
