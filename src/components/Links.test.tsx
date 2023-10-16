import { render, screen } from '@testing-library/react'
import Links from './Links'
import '@testing-library/jest-dom'

describe('Links', () => {
  it('should render the title', () => {
    render(
      <Links
        links={[
          {
            href: 'href',
            label: 'label',
            icon: <div>icon</div>,
          },
        ]}
      />,
    )
    expect(screen.getByText('Links')).toBeInTheDocument()
  })

  it('should render a list of links', () => {
    const links = [
      {
        href: 'https://github.com',
        label: 'GitHub',
        icon: <div>G</div>,
      },
      {
        href: 'https://linkedin.com',
        label: 'LinkedIn',
        icon: <div>L</div>,
      },
    ]
    render(<Links links={links} />)
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
  })

  it('should render the correct href for each link', () => {
    const links = [
      {
        href: 'https://github.com',
        label: 'GitHub',
        icon: <div>G</div>,
      },
      {
        href: 'https://linkedin.com',
        label: 'LinkedIn',
        icon: <div>L</div>,
      },
    ]
    render(<Links links={links} />)
    const githubLink = screen.getByText('GitHub')
    const linkedinLink = screen.getByText('LinkedIn')
    expect(githubLink).toHaveAttribute('href', 'https://github.com')
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com')
  })

  it('should render the correct label for each link', () => {
    const links = [
      {
        href: 'https://github.com',
        label: 'GitHub',
        icon: <div>G</div>,
      },
      {
        href: 'https://linkedin.com',
        label: 'LinkedIn',
        icon: <div>L</div>,
      },
    ]
    render(<Links links={links} />)
    const githubLink = screen.getByText('GitHub')
    const linkedinLink = screen.getByText('LinkedIn')
    expect(githubLink).toHaveTextContent('GitHub')
    expect(linkedinLink).toHaveTextContent('LinkedIn')
  })

  it('should render the correct icon for each link', () => {
    const links = [
      {
        href: 'https://github.com',
        label: 'GitHub',
        icon: <div>G</div>,
      },
      {
        href: 'https://linkedin.com',
        label: 'LinkedIn',
        icon: <div>L</div>,
      },
    ]
    render(<Links links={links} />)
    const githubIcon = screen.getByText('G')
    const linkedinIcon = screen.getByText('L')
    expect(githubIcon).toBeInTheDocument()
    expect(linkedinIcon).toBeInTheDocument()
  })
})
