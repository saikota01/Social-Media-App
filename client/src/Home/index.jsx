import React from 'react'
import CreatePost from '../CreatePost'
import Posts from '../Posts'
import './style.scss'

function Home() {
    return (
        <>
            <CreatePost />
            {/* <Post /> */}
            <Posts />
        </>
    )
}

export default Home