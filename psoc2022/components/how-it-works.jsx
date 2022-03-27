import styles from '../styles/how.module.css'
import Link from 'next/link'
import Image from 'next/image'

const How = ({ how }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>How does it work?</h1>
            <div className={styles.how}>
                {how.map((element)=>(
                        <div className={styles.element}>
                            <div className={styles.catInfo}>{element.desc}</div>
                            <span className={styles.cat}>{element.title}</span>
                            <div className={styles.media}>
                                <Image src={`/img/${element.photo}`} width='52.71px' height='50px' layout= 'fixed'
                                alt=''/>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default How