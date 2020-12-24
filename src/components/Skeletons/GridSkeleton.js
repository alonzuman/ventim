import { Card, CardContent, Grid } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab';
import React from 'react'

const GridSkeleton = () => {
  const arr = [1, 2, 3];

  return (
    <Grid container spacing={2}>
      {arr.map(v => (
        <Grid key={v} lg={6} md={6} xs={12} item>
          <Card variant='outlined'>
            <CardContent>
              <Skeleton height={18} width={96} />
              <Skeleton height={48} width={144} />
              <Skeleton height={24} width={256} />
              <Skeleton height={24} width={256} />
              <Skeleton height={24} width={200} />
            </CardContent>
          </Card>
        </Grid>
      ))}

    </Grid>
  )
}

export default GridSkeleton
