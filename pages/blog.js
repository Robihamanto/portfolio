import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({title, slug}) => (
        <li>
            <Link as={`/${slug}`} href={`/post?title=${title}`}>
                <a>{`${title}`}</a>
            </Link>
        </li>
    );
    

const Blog = () => (
    <Layout title="My Blog">
        <ul>
            <PostLink slug="react"title="React Post"/>
            <PostLink slug="angular"title="Angular Post"/>
            <PostLink slug="vue"title="Vue Post"/>
        </ul>         
    </Layout>
);


export default Blog;