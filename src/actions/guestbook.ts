'use server'

import { revalidatePath } from 'next/cache'

import { env } from '@/env'
import { getCurrentUser } from '@/lib/auth'
import prisma from '@/lib/prisma'

/**
 * Deletes a message from the guestbook.
 * @param id - The id of the message to delete.
 */
export const deleteMessage = async (id: number) => {
  const user = await getCurrentUser()

  if (!user) {
    throw new Error('Unauthorized')
  }

  const email = user.email

  const message = await prisma.guestbook.findUnique({
    where: {
      id
    },
    select: {
      email: true
    }
  })

  if (!message) {
    throw new Error('Message not found')
  }

  if (message.email !== email) {
    throw new Error('Unauthorized')
  }

  await prisma.guestbook.delete({
    where: {
      id
    }
  })

  revalidatePath('/guestbook')
}

/**
 * Creates a new message in the guestbook.
 * @param message - The message to create.
 */
export const createMessage = async (message: string) => {
  const user = await getCurrentUser()

  if (!user) {
    throw new Error('Unauthorized')
  }

  const email = user.email
  const name = user.name as string
  const image = user.image as string

  if (!message) {
    throw new Error('Message cannot be empty')
  }

  await prisma.guestbook.create({
    data: {
      email,
      body: message,
      image,
      created_by: name
    }
  })

  if (process.env.NODE_ENV === 'production') {
    await fetch(env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: null,
        embeds: [
          {
            title: 'New comment!',
            description: message,
            url: 'https://blog.jotacode.dev/guestbook',
            color: '6609519',
            author: {
              name,
              icon_url: image
            },
            timestamp: new Date().toISOString()
          }
        ],
        username: 'Blog',
        avatar_url: 'https://blog.jotacode.dev/images/projects/blog/logo.png',
        attachments: []
      })
    })
  }

  revalidatePath('/guestbook')
}

/**
 * Get all messages in the guestbook.
 * @returns A list of messages in the guestbook.
 */
export const getMessages = async () => {
  const messages = await prisma.guestbook.findMany({
    orderBy: {
      updated_at: 'desc'
    }
  })

  return messages.map((message) => {
    const { id, body, image, created_by, updated_at } = message

    return {
      id: Number(id),
      body,
      image,
      created_by,
      updated_at
    }
  })
}
