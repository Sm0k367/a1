// pages/dashboard.js
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import Head from 'next/head'
import Script from 'next/script'

export default function Dashboard({ user }) {
  return (
    <>
      <Head>
        <title>Dashboard – EPIC TECH AI OS</title>
      </Head>

      {/* Intercom boot */}
      <Script id="intercom-boot" strategy="afterInteractive">
        {`
          window.intercomSettings = {
            app_id: "${process.env.NEXT_PUBLIC_INTERCOM_APP_ID}",
            user_id: "${user.sub}",
            email: "${user.email}"
          };
          (function(){var w=window;var ic=w.Intercom;
            if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}
            else{var d=document;var i=function(){i.c(arguments)};i.q=[];
            i.c=function(args){i.q.push(args)};
            w.Intercom=i;var l=function(){var s=d.createElement('script');
            s.type='text/javascript';s.async=true;
            s.src='https://widget.intercom.io/widget/${process.env.NEXT_PUBLIC_INTERCOM_APP_ID}';
            var x=d.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s,x);};
            if(document.readyState==='complete'){l();}
            else if(w.attachEvent){w.attachEvent('onload',l);}
            else{w.addEventListener('load',l,false);}
          }})();
        `}
      </Script>

      <main style={{
        fontFamily: 'system-ui',
        padding: '2rem'
      }}>
        <h1>Welcome, {user.email}!</h1>
        <p>Your EPIC TECH AI OS is now unlocked 🎉</p>
        {/* Place your app/dashboard components here */}
      </main>
    </>
  )
}

export async function getServerSideProps({ req }) {
  const cookies = cookie.parse(req.headers.cookie || '')
  const token = cookies.token || ''

  if (!token) {
    return { redirect: { destination: '/', permanent: false } }
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET)
    return { props: { user } }
  } catch (err) {
    return { redirect: { destination: '/', permanent: false } }
  }
}
