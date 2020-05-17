import Layout from "../components/Layout";
import Error from './_error';
import { Component } from "react";


class About extends Component {

    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/robihamanto');
        const data = await res.json();
        const statusCode = res.status > 200 ? res.status : false;

        return {user: data, statusCode};
    }


    render() {

        const { user, statusCode } = this.props;

        if (statusCode) {
            return <Error statusCode={statusCode} />
        }

        return (
            <Layout title="About">
                <p>{user.name}</p>
                <img src={user.avatar_url} alt="Robihamanto" height="200px"
                />
            </Layout>
        );
    }
}


export default About; 