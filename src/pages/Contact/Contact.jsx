import React, { useEffect } from 'react'

const Contact = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      contact
    </div>
  )
}

export default Contact
