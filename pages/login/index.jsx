import React from 'react';
import {useSession, signIn, signOut} from "next-auth/react";

function Index() {
  const {data: session} = useSession();
  if(session) {
    return (
      <>
        <div>Welcome {session.user.email}</div>
        <img src={session.user.image} alt={""} style={{width: '40px', height: '40px', borderRadius: '100%'}} />
        <button onClick={()=>signOut()}>Sign Out</button>
      </>
    )
  } else {
    return (
      <div>
        <span>You are not sign in.</span>
        <button onClick={()=>signIn()}>Sign In</button>
      </div>
    );
  }
}

export default Index;