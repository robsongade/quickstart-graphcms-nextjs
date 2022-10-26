import type { NextPage } from 'next'
import Head from 'next/head'
import { getPosts } from './../services'
import { FeaturedPosts } from '../sessions';
import { PostCard, PostWidget, Categories } from '../components'


const posts = [
  {
    title: 'React Testing', excerpt: 'Learn React Testing'
  }, {
    title: 'React Testing2', excerpt: 'Learn React Testing2'
  },
]
const Home: NextPage = ({posts} : any) => {
  console.log({
    posts
  })
  const titulo = "Hello nextj"

  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>Blog Pega o código</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 '>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post: any,index:any) => ( <PostCard post={post.node} key={post.node.slug} />))}
        </div>

        <div className='lg:col-span-4 col-span-1'>

          <div className='lg:sticky relative top-8 col-span-1'>
            <PostWidget categories={[]} slug={false} />
            <Categories />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home


export async function getStaticProps () {
  const posts = (await getPosts()) || []
  console.log(posts[0].node)
  return {
    props : {
      posts
    }
  }
}