import { cleanup, render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import { ListItem } from "./ListItem";

afterEach(cleanup);

const props = {
	author: 'Arthur Morgan',
	body: 'How are you doin?',
	id: '12345',
	publish_date: '2016-06-17T23:25:47.684323Z',
	rating: 4.4
}

it('should render the component', () => {
	render(<ListItem {...props} />, {wrapper: MemoryRouter});
});

it('should render author name', () => {
	render(<ListItem {...props} />, {wrapper: MemoryRouter});
	expect(screen.getByText(props.author)).toHaveTextContent(props.author);
});

it('should render the rating', () => {
	render(<ListItem {...props} />, {wrapper: MemoryRouter});
	expect(screen.getByText(props.rating)).toHaveTextContent(props.rating);
});

it('should render the publish date', () => {
	render(<ListItem {...props} />, {wrapper: MemoryRouter});
	const dateString = new Date(props.publish_date).toDateString();
	expect(screen.getByText(`Reviewed on ${dateString}`)).toHaveTextContent(`Reviewed on ${dateString}`);
});

it('should render body text', () => {
	render(<ListItem {...props} />, {wrapper: MemoryRouter});
	expect(screen.getByText(props.body)).toHaveTextContent(props.body);
});

it('should render a show review link with the correct route', () => {
	render(<ListItem {...props} />, {wrapper: MemoryRouter});
	expect(screen.getByRole('link')).toHaveTextContent('Show Review');
	expect(screen.getByRole('link')).toHaveAttribute('href', `/review/${props.id}`);
});