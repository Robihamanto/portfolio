import Layout from '../components/Layout';
import {withRouter} from 'next/router';

const Post = ({router}) => (
    <Layout>
        <h1>{router.query.title}</h1>
        <p style={{width: "80vw"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus suscipit rem laboriosam, tempora architecto dolore? Facilis quo nostrum laudantium placeat corrupti excepturi nobis, velit omnis aut officiis id molestias quidem.</p>
    </Layout>
);


export default withRouter(Post);