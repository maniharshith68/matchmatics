import React from 'react'
import { Card } from 'react-bootstrap'
interface StatCardProps {
  title: string
  value: string | number
  change: number
  icon: string
}
export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
}) => {
  const getImageUrl = (iconType: string) => {
    switch (iconType) {
      case 'matches':
        return '/src/images/ict.png'
      case 'runs':
        return '/src/images/sachin.jpg'
      case 'wkt':
        return '/src/images/murali.jpeg'
      case 'wins':
        return '/src/images/aus.jpg'
      
      case 'cups':
        return '/src/images/brazil.jpeg'
      case 'finals':
        return '/src/images/germany.jpg'
      case 'goal':
        return '/src/images/peter.jpeg'
      case 'home':
        return '/src/images/uru.png'
      
      case 'homewins':
        return '/src/images/spurs.png'
      case 'awaywins':
        return '/src/images/golden.jpeg'
      case '3pt':
        return '/src/images/curry.jpeg'
      case 'basket':
        return '/src/images/jabbar.webp'
      
      default:
        return '/src/images/our_logo.png'
    }
  }
  return (
    <Card className="bg-dark border border-info shadow h-100">
      <Card.Body className="d-flex flex-column align-items-center">
        <div className="text-muted mb-3">{title}</div>
        <div className="image-container mb-4 position-relative">
          <img
            src={getImageUrl(icon)}
            alt={title}
            className="rounded-circle"
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'cover',
              padding: '8px',
              backgroundColor: 'var(--card-dark)',
              border: '1px solid var(--border-color)',
            }}
          />
        </div>
        <div className="text-center text-white">
          <div className="fw-bold h3 mb-2">{value}</div>
        </div>
      </Card.Body>
    </Card>
  )
}
