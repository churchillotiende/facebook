import React from 'react';
import './story-reel.scss';
import Story from '../../components/story/Story';
const StoryReel = () => {
  return (
    <div className='storyReel'>
      <Story
            image='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119733779/original/cc2e5944473be8570911a5f558f0d28a150e3cdc/paint-you-a-custom-abstract-portrait-drawing-illustration.png'
            profileSrc='https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4'
            title='Sonny Sangha'
        />
        <Story
            image='https://assets.yellowtrace.com.au/wp-content/uploads/2019/07/25141848/Abstract-Portrait-Paintings-by-Joseph-Lee-Yellowtrace-05.jpg'
            profileSrc='https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4'
            title='Rafeh Qazi '
        />
        <Story
            image='https://cdn.shopify.com/s/files/1/0128/3672/products/DIMENSIONAL_ABSTRACT_PORTRAIT_no._IV_1024x1024.png?v=1507719723'
            profileSrc='https://miro.medium.com/fit/c/336/336/2*4lH0jftaq_sPRqQisUsVqw.jpeg'
            title='Nazariy Dumanskyy '
        />
        <Story
            image='https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            profileSrc='https://miro.medium.com/fit/c/336/336/2*4lH0jftaq_sPRqQisUsVqw.jpeg'
            title='Nazariy Dumanskyy '
        />
    </div>
  )
}

export default StoryReel