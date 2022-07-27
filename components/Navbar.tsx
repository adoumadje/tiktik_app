import { GoogleLogin } from '@react-oauth/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import useAuthStore from '../store/authStore'
import { createOrGetUser } from '../utils'
import Logo from '../utils/tiktik-logo.png'

function Navbar() {
  const { userProfile, addUser } = useAuthStore()

  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
        <Link href='/'>
            <div className='w-[100px] md:w-[130px]'>
                <Image 
                    className='cursor-pointer'
                    src={Logo}
                    alt='TikTik'
                    layout='responsive'

                />
            </div>
        </Link>

        <div>SEARCH</div>

        <div>
          {userProfile ? (
            <div>{userProfile.userName}</div>
          ) : (
            <GoogleLogin 
              onSuccess={(response) => createOrGetUser(response, addUser)}
              onError={() => console.log('Error')}
            />
          )}
        </div>
    </div>
  )
}

export default Navbar