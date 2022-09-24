import React from 'react'

const User = {
    firstName: 'Mike',
    lastName: 'Webb'
}

function greetUser(user){
    return user.firstName+' '+user.lastName;
}

export default function UserFunction() {
  return (
    <div>Hi, <b>{greetUser(User)}!</b> Welcome to world of react</div>
  )
}
