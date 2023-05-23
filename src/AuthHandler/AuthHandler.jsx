import React from 'react'
import { useSearchParams } from 'react-router-dom'

function AuthHandler() {
  const [params, setParams] = useSearchParams();
  return (
    <div>Name: {params.get("name")},Email: {params.get("email")}</div>
  )
}

export default AuthHandler