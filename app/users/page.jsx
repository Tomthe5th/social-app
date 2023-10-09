import { prisma } from '@/prisma/lib/prisma'
import React from 'react'

export default async function Users() {
  const users = await prisma.user.findMany()
  console.log({users});

  return (
    <section>Users</section>
  ) 
}
