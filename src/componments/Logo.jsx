import { Roboto } from 'next/font/google'
// import styles from '../styles/component.module.css'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin']
})

export default function Logo() {
    return (
        <>
            <div className='logo-text'>
                <h2 className="landrup">Landrup</h2>
                <h1 className='dans'>Dans</h1>
            </div>
            <hr className='lilla-linje' />
        </>
    )
}