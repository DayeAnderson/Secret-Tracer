import React from 'react'
import { Image } from 'semantic-ui-react'

const ImageLink = ({details}) => (
  
  <Image
    src={'/images/wireframe/image-text.png'}
    as='a'
    size='medium'
    href='http://google.com'
    target='_blank'
  />
)

export default ImageLink