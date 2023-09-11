import { render, screen } from '@testing-library/react'
import Expirencies from './Expirencies'
import '@testing-library/jest-dom'

describe('Expirencies', () => {
  it('should render the title', () => {
    render(
      <Expirencies
        title="title"
        description="description"
        date="date"
        resume="resume"
        image="image"
      />,
    )
    expect(screen.getByText('title')).toBeInTheDocument()
  })

  it('should render the description', () => {
    render(
      <Expirencies
        title="title"
        description="description"
        date="date"
        resume="resume"
        image="image"
      />,
    )
    expect(screen.getByText('description')).toBeInTheDocument()
  })

  it('should render the date', () => {
    render(
      <Expirencies
        title="title"
        description="description"
        date="date"
        resume="resume"
        image="image"
      />,
    )
    expect(screen.getByText('date')).toBeInTheDocument()
  })

  it('should render the resume', () => {
    render(
      <Expirencies
        title="title"
        description="description"
        date="date"
        resume="resume"
        image="image"
      />,
    )
    expect(screen.getByText('resume')).toBeInTheDocument()
  })

  it('should render the image', () => {
    render(
      <Expirencies
        title="title"
        description="description"
        date="date"
        resume="resume"
        image="image"
      />,
    )
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('should render the image with the correct src', () => {
    render(
      <Expirencies
        title="title"
        description="description"
        date="date"
        resume="resume"
        image="image"
      />,
    )
    expect(screen.getByRole('img')).toHaveAttribute('src', 'image')
  })

  it('should render the image with the correct alt', () => {
    render(
      <Expirencies
        title="title"
        description="description"
        date="date"
        resume="resume"
        image="image"
      />,
    )
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'title')
  })

  it('should render the image with the correct width', () => {
    render(
      <Expirencies
        title="title"
        description="description"
        date="date"
        resume="resume"
        image="image"
      />,
    )
    expect(screen.getByRole('img')).toHaveAttribute('width', '200')
  })

  it('should render the image with the correct height', () => {
    render(
      <Expirencies
        title="title"
        description="description"
        date="date"
        resume="resume"
        image="image"
      />,
    )
    expect(screen.getByRole('img')).toHaveAttribute('height', '200')
  })

  it('should render the image with the correct className', () => {
    render(
      <Expirencies
        title="title"
        description="description"
        date="date"
        resume="resume"
        image="image"
      />,
    )
    expect(screen.getByRole('img')).toHaveClass('rounded-md')
  })

  it('should render the title with the correct className', () => {
    render(
      <Expirencies
        title="title"
        description="description"
        date="date"
        resume="resume"
        image="image"
      />,
    )
    expect(screen.getByText('title')).toHaveClass('text-2xl')
  })

  it('should render the description with the correct className', () => {
    render(
      <Expirencies
        title="title"
        description="description"
        date="date"
        resume="resume"
        image="image"
      />,
    )
    expect(screen.getByText('description')).toHaveClass('text-xl')
  })

  it('should render the date with the correct className', () => {
    render(
      <Expirencies
        title="title"
        description="description"
        date="date"
        resume="resume"
        image="image"
      />,
    )
    expect(screen.getByText('date')).toHaveClass('text-lg')
  })

  it('should render the resume with the correct className', () => {
    render(
      <Expirencies
        title="title"
        description="description"
        date="date"
        resume="resume"
        image="image"
      />,
    )
    expect(screen.getByText('resume')).toHaveClass('text-base')
  })

  it('should render the container with the correct className', () => {
    render(
      <Expirencies
        title="title"
        description="description"
        date="date"
        resume="resume"
        image="image"
      />,
    )

    expect(screen.getByRole('img').parentElement).toHaveClass(
      'flex flex-row gap-4',
    )
  })

  it('should render the image container with the correct className', () => {
    render(
      <Expirencies
        title="title"
        description="description"
        date="date"
        resume="resume"
        image="image"
      />,
    )

    expect(screen.getByRole('img').parentElement).toHaveClass(
      'flex flex-row gap-4',
    )
  })

  it('should render the text container with the correct className', () => {
    render(
      <Expirencies
        title="title"
        description="description"
        date="date"
        resume="resume"
        image="image"
      />,
    )

    expect(screen.getByText('title').parentElement).toHaveClass(
      'flex flex-col gap-2',
    )
  })

  it('should render the title with the correct className', () => {
    render(
      <Expirencies
        title="title"
        description="description"
        date="date"
        resume="resume"
        image="image"
      />,
    )

    expect(screen.getByText('title')).toHaveClass('text-2xl')
  })
})
