import React from 'react'
import TravelCard from './TravelCard'
import InstaCard from './InstaCard'
import Recommended from './Recommended';

type Props = {
  posts: Post[];
};

const RightContents = ({ posts }: Props) => {
  return (
    <div className="-mt-12 z-10">
      <TravelCard />
      <InstaCard />
      <Recommended posts={posts} />
    </div>
  )
}

export default RightContents