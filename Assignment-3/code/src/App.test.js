import { render, screen } from '@testing-library/react';
import App from './App';

test('check if container have .info class for div', () => {
  const { container } =render(<App />);
  expect(container.getElementsByClassName('info').length).toBe(1);
});

test('check if container have .order class', () => {
  const { container } =render(<App />);
  expect(container.getElementsByClassName('order').length).toBe(1);
});
test('check if container have .list class', () => {
  const { container } =render(<App />);
  expect(container.getElementsByClassName('list').length).toBe(1);
});
test('check if container has Appointment On data', () => {
  const { container } =render(<App />);
  const AppointmentElement = screen.getByText(/Appointment On/i);
  expect(AppointmentElement).toBeInTheDocument();
});

test('check if container has phone data', () => {
  const { container } =render(<App />);
  const AppointmentElement = screen.getByText(/phone/i);
  expect(AppointmentElement).toBeInTheDocument();
});

test('check if container has Email data', () => {
  const { container } =render(<App />);
  const AppointmentElement = screen.getByText(/Email/i);
  expect(AppointmentElement).toBeInTheDocument();
});
