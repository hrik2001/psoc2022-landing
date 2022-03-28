import Head from 'next/head'
import Image from 'next/image'

const Login = () => {
    return(
        <div>
            <Head>
                <title>PSOC 2022</title>
                <meta name="description" content="PClub Summer Of Code login page" />
            </Head>
            <Image src='/img/coding.svg' height="500px" width="500px" layout='fixed' alt=''/>
        </div>
    )
}

export default Login