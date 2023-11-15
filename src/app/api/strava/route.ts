/* eslint-disable no-console */
import { NextResponse } from 'next/server'

/**
 *
 */
type Activity = {
  /**
   *
   */
  steps: number
  /**
   *
   */
  id: number
  /**
   *
   */
  name: string
  /**
   *
   */
  type: string
  /**
   *
   */
  distance: number
  /**
   *
   */
  moving_time: number
}

export const GET = async () => {
  const clientID = process.env.STRAVA_CLIENT_ID
  const clientSecret = process.env.STRAVA_CLIENT_SECRET
  const refreshToken = process.env.STRAVA_REFRESH_TOKEN

  if (!clientID || !clientSecret || !refreshToken) {
    return NextResponse.error()
  }

  const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`
  const callActivities =
    'https://www.strava.com/api/v3/athlete/activities?per_page=90&access_token='

  try {
    // Get Strava access token
    const resRefresh = await fetch(callRefresh, {
      method: 'POST'
    })

    const resultRefresh = await resRefresh.json()
    const accessToken = resultRefresh.access_token

    // Get Strava activities
    const resActivities = await fetch(callActivities + accessToken)
    const resActivitiesData = await resActivities.json()

    if (!Array.isArray(resActivitiesData)) {
      console.error('Invalid Strava activities data:', resActivitiesData)
      return NextResponse.error()
    }

    if (!Array.isArray(resActivitiesData)) {
      console.error('Invalid Strava activities data:', resActivitiesData)
      return NextResponse.error()
    }

    const stravaActivities: Activity[] = resActivitiesData.map((activity) => {
      if (
        typeof activity === 'object' &&
        activity !== null &&
        'distance' in activity &&
        'moving_time' in activity &&
        'type' in activity
      ) {
        return activity as Activity
      } else {
        throw new Error('Invalid activity data')
      }
    })

    // Process Strava data
    const totalActivities = stravaActivities.length
    const totalDistance = stravaActivities.reduce(
      (total, activity) => total + activity.distance,
      0
    )
    const totalMovingTime = stravaActivities.reduce(
      (total, activity) => total + activity.moving_time,
      0
    )
    const totalSteps = Math.round(totalDistance * 1500)

    // Calculate activity types count
    const activityTypesCount: Record<string, number> = {}
    for (const activity of stravaActivities) {
      if (activityTypesCount[activity.type]) activityTypesCount[activity.type]++
      else activityTypesCount[activity.type] = 1
    }

    const stravaData = {
      totalActivities,
      totalDistance,
      totalMovingTime,
      totalSteps,
      activityTypesCount
    }

    return NextResponse.json(stravaData)
  } catch (error) {
    console.error(error)
    return NextResponse.error()
  }
}
