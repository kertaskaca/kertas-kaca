import Head from 'next/head'
import Image from 'next/image'

import Logo from '../assets/images/logo.png'
import Banner from '../assets/images/banner.png'
import Brands from '../assets/images/brands.png'
import IconCheckGray from '../assets/images/ic_check_gray.svg'
import IconCheckPurple from '../assets/images/ic_check_purple.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kertas Kaca</title>
        <meta name='description' content='Kertas Kaca Homepage' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <nav className='navbar navbar-expand-lg navbar-light navbar-tp'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            <Image src={Logo} alt='Logo Telepatia' height={45} width={154}/>
          </a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>Home</a>
              </li>
              <li className='nav-item'>
                <Link href='/privacy-policy' className='nav-link'>Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section>
        <div className='row content'>
          <div className='col'>
            <Image src={Banner} alt='Banner logo' width={584} height={505}/>
          </div>
          <div className='col copywriting'>
            <p className='title'>Always Connected <br/>No Lagging</p>
            <p className='subtitle'>There are many variations of passages of <br/>Lorem Ipsum available, but the majority have <br/>suffered alteration in some form</p>
            <div>
              <a className='btn btn-primary'>See Pricing</a>
              <a className='btn btn-secondary'>Testimonials</a>
            </div>
          </div>
        </div>

        <div className='brands'>
          <Image src={Brands} alt='Brands' height={30} width={724}/>
        </div>
      </section>

      <section>
        <div className='pricing'>
          <div className='pricing-header'>
            <p className='title'>Easy Budget.</p>
            <p className='subtitle'>There are many variations of passages of <br/>Lorem Ipsum available, but the majo.</p>
          </div>

          <div className='pricing-option'>
            <div className='card-basic'>
              <h5 className='title'>Basic</h5>
              <h1 className='price'>$50,000</h1>
              <p className='subtitle'>Disarankan untuk baru yang <br/>memulai bisnis tahun ini</p>
              <div className='item'>
                <div className='img-benefit'>
                  <Image src={IconCheckGray} alt=''/>
                </div>
                <p className='label'>Live Support</p>
              </div>
              <div className='item'>
                <div className='img-benefit'>
                  <Image src={IconCheckGray} alt=''/>
                </div>
                <p className='label'>10 GB Storage</p>
              </div>
              <div className='item'>
                <div className='img-benefit'>
                  <Image src={IconCheckGray} alt=''/>
                </div>
                <p className='label'>Basic Themes</p>
              </div>
              <a href='#' className='btn btn-primary'>Start With This</a>
            </div>
            <div className='card-popular'>
              <h5 className='title'>Most Popular</h5>
              <h1 className='price'>$288,800</h1>
              <p className='subtitle'>Cocok sekali untuk anda yang <br/>sedang membangun bisnis</p>
              <div className='item'>
                <div className='img-benefit'>
                  <Image src={IconCheckPurple} alt=''/>
                </div>
                <p className='label'>Live Support</p>
              </div>
              <div className='item'>
                <div className='img-benefit'>
                  <Image src={IconCheckPurple} alt=''/>
                </div>
                <p className='label'>Unlimited Storage</p>
              </div>
              <div className='item'>
                <div className='img-benefit'>
                  <Image src={IconCheckPurple} alt=''/>
                </div>
                <p className='label'>Unlock 1K Themes</p>
              </div>
              <div className='item'>
                <div className='img-benefit'>
                  <Image src={IconCheckPurple} alt=''/>
                </div>
                <p className='label'>Server Optimized</p>
              </div>
              <div className='item'>
                <div className='img-benefit'>
                  <Image src={IconCheckPurple} alt=''/>
                </div>
                <p className='label'>All Basic Features</p>
              </div>
              <a href='#' className='btn btn-tertiary'>Choose This Plan</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
