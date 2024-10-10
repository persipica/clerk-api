'use client'
import { useAuth, useUser } from '@clerk/nextjs'
import React from 'react'

export default function DashboardClientPage() {
  const { isLoaded: isLoadedAuth, userId, sessionId, getToken } = useAuth()
  const { isLoaded: isLoadedUser, isSignedIn, user } = useUser()

  console.log(user)

  if (!isLoadedAuth || !userId) {
    return null
  }

  if (!isLoadedUser || !isSignedIn) {
    return null
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard (Client-side)</h1>
      <p>Hello, {user.fullName}</p>
      <p>Your first name is {user.firstName}</p>
      <p>User ID: {userId}</p>
      <p>Session: {sessionId}</p>
    </div>
  )
}
