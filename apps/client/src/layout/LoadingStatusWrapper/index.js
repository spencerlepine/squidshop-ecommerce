import React from 'react';
import { Alert, Typography, Button, CircularProgress } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';

const LoadingStatusWrapper = (props) => {
  const {
    loading,
    isError,
    apiRunning,
    handleRefresh,
    dataForChild,
    usingDemoData
  } = props

  const RefreshBtn = () => <Button style={{ marginLeft: '0.5em' }} onClick={handleRefresh}><CachedIcon /> Refresh</Button>

  if (isError || !dataForChild || (!usingDemoData && !apiRunning === false)) {
    return (
      <Alert severity="warning" style={{ marginTop: '2em' }}>
        <Typography>Failed to load <RefreshBtn /></Typography>
      </Alert>
    )
  }

  if (loading) {
    return <CircularProgress />
  }

  return <>{props.children}</>
}

export default LoadingStatusWrapper;