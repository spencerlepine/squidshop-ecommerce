import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Alert, Button, Typography } from '@mui/material';

import * as status from '../api/status';

export const DemoSettingsContext = React.createContext();

export const DemoSettingsProvider = ({ children }) => {
  const [useDemoData, setUseDemoData] = useState(true) // TODO change this
  const [loading, setLoading] = useState(true)
  const [renderWarning, setRenderWarning] = useState(true)
  const [apiRunning, setApiRunning] = useState(false)

  useEffect(() => {
    status.fetchApiStatus((isRunning, error) => {
      setApiRunning(isRunning)
      setLoading(false)
    })
  }, [setApiRunning])

  const handleAccept = () => {
    setLoading(false)
    setUseDemoData(true)
    setApiRunning(false)
    setRenderWarning(false)
  }

  const handleIgnore = () => {
    setRenderWarning(false)
  }

  const handleDisable = () => {
    setRenderWarning(true)
    setLoading(false)
    setUseDemoData(false)
  }

  const value = {
    loading,
    useDemoData,
    apiRunning
  };

  const DemoDataButton = () => (
    <Button variant="contained" color="success" size="large" sx={{ mt: 4, mb: 2 }} onClick={handleAccept}>
      Use Demo Data
    </Button>
  )

  const IgnoreButton = () => (
    <Button variant="outlined" size="large" sx={{ mt: 4, mb: 2, ml: 1 }} onClick={handleIgnore} style={{ backgroundColor: "#fff" }}>
      Ignore
    </Button>
  )

  const BrokenBackendMessage = () => (
    <div style={{ position: 'fixed', bottom: '1em', left: '0.5em' }}>
      <DemoDataButton />
      <IgnoreButton />
      <Alert severity="error">
        <Typography>Unable to connect to the servers</Typography>
      </Alert>
    </div>
  )

  const DisableDemoMessage = () => (
    <div style={{ position: 'fixed', bottom: '1em', left: '0.5em' }}>
      <Button variant="contained" color="secondary" size="large" sx={{ mt: 4, mb: 2 }} onClick={handleDisable}>
        Disable Demo
      </Button>
    </div>
  )

  return (
    <DemoSettingsContext.Provider value={value}>
      {(!loading && !apiRunning && renderWarning) && <BrokenBackendMessage />}
      {(!renderWarning && useDemoData) && <DisableDemoMessage />}
      {children}
    </DemoSettingsContext.Provider>
  );
};

const useDemoSettings = () => useContext(DemoSettingsContext);

export default useDemoSettings;

DemoSettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};