import React from 'react'
import Hero from '../hero/Hero' // NOTE: Ignore an error here about file name if you see one. It is VSCode being goofy because orignally the component had a lower case h in the word Hero. This was later adjusted and VScode's brain exploded.

const Home = ({movies}) => {
  return (
    <Hero movies={movies}/>
  )
}

export default Home