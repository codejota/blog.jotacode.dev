/* eslint-disable unicorn/prefer-logical-operator-over-ternary */
import { NextResponse } from 'next/server'

import { type WakatimeLanguagesData, type WakatimeRes } from '@/types'

export const dynamic = 'force-dynamic'

export const GET = async () => {
  // Primeira chamada de API
  const res1 = await fetch(
    'https://wakatime.com/api/v1/users/current/all_time_since_today',
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.WAKATIME_API_KEY as string
        ).toString('base64')}`
      }
    }
  )
  const data1: WakatimeRes = await res1.json()

  // Segunda chamada de API
  const res2 = await fetch('https://wakatime.com/api/v1/users/current/stats', {
    headers: {
      Authorization: `Basic ${Buffer.from(
        process.env.WAKATIME_API_KEY as string
      ).toString('base64')}`
    }
  })
  const data2: WakatimeLanguagesData = await res2.json()

  // Combinando os resultados
  const combinedData = {
    seconds: data1.data.total_seconds,
    languages: data2.data.languages ? data2.data.languages : [],
    operating_systems: data2.data.operating_systems
      ? data2.data.operating_systems
      : []
  }

  return NextResponse.json(combinedData)
}
