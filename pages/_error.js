import Layout from "../components/Layout";

const Error = ({statusCode}) => (
   <Layout title="Error">
        <h1>Error Page</h1>
        {statusCode ? `Could not load the user data error with status code: ${statusCode}` : `Could not load the page sorry :(`}
    </Layout>
);

export default Error;