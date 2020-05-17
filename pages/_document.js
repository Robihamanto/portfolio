import Document, { Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta name="description" content="Traveling website"/>
                    <meta name="robots" content="noindex, nofollow"/>
                    <meta name="viewport" content="width=device-width"/>
                    <meta charSet="utf-8"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto"/>

                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>

                <style global jsx>{`
                    body {
                        font-family: 'Roboto', sans-serif;
                    }
                `}</style>
            </html>
        )
    }
}

export default MyDocument;