import { useEffect, useState } from "react"
import Link from 'next/link'
import { Button } from "react-bootstrap"

const BackToTopButton = () => {
  let [hidden, setHidden] = useState<boolean>(true)
  const button = (
    <div style={{
      position: 'relative'
    }} hidden={hidden}>
      <Link href='' style={{
        position: 'fixed',
        bottom: '40px',
        right: '25px'
      }}>
        <Button variant='secondary' className="p-4">
          TOP ↑
        </Button>
      </Link>
    </div>)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setHidden(false)
      } else {
        setHidden(true)
      }
    })
  })
  return button
}

export default BackToTopButton