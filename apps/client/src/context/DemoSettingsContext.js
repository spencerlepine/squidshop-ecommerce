import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Alert, Button, Typography } from '@mui/material';

import * as status from '../api/status';

export const DemoSettingsContext = React.createContext();

const demoSettingsKey = 'squidshopDemoSettingsKey';

export const DemoSettingsProvider = ({ children }) => {
  const defaultToDemo = !!localStorage.getItem(demoSettingsKey)
  const [useDemoData, setUseDemoData] = useState(defaultToDemo)
  const [loading, setLoading] = useState(defaultToDemo ? false : true)
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
    localStorage.setItem(demoSettingsKey, 'true')
    setApiRunning(false)
    setRenderWarning(false)
  }

  const handleIgnore = () => {
    setRenderWarning(false)
  }

  const handleDisable = () => {
    setRenderWarning(true)
    setLoading(false)
    localStorage.removeItem(demoSettingsKey)
    setUseDemoData(false)
  }

  const value = {
    loading,
    useDemoData,
    apiRunning
  };

  const DemoDataButton = () => (
    <Button variant="contained" color="success" size="large" sx={{ mt: 1 }} onClick={handleAccept} style={{ zIndex: 99 }}>
      Use Demo Data
    </Button>
  )

  const IgnoreButton = () => (
    <Button variant="outlined" size="large" sx={{ ml: 1, mt: 1 }} onClick={handleIgnore} style={{ color: "rgb(255 232 232)", borderColor: '#b40808', background: '#bc1f1f', fontWeight: 'bold', zIndex: 99 }}>
      Ignore
    </Button>
  )

  const BrokenBackendMessage = () => (
    <div style={{ position: 'fixed', bottom: '1em', left: '0.5em', zIndex: 99 }}>
      <Alert severity="error">
        <Typography>Unable to connect to the servers</Typography>
        <DemoDataButton />
        <IgnoreButton />
      </Alert>
    </div>
  )

  const DisableDemoMessage = () => (
    <div style={{ position: 'fixed', bottom: '1em', left: '0.5em', zIndex: 99 }}>
      <Alert severity="info">
        <Typography>Using placeholder data</Typography>
        <Button variant="contained" color="secondary" size="large" sx={{ mt: 1 }} onClick={handleDisable}>
          Disable Demo
        </Button>
      </Alert>
    </div>
  )

  const GenericDemoMessage = () => (
    <div style={{ position: 'fixed', bottom: '1em', left: '0.5em', zIndex: 99 }}>
      <Alert severity="info">
        <Typography>Enable Demo Mode</Typography>
        <DemoDataButton />
        <IgnoreButton />
      </Alert>
    </div>
  )

  return (
    <DemoSettingsContext.Provider value={value}>
      {(!loading && !apiRunning && renderWarning) && <BrokenBackendMessage />}
      {(!loading && apiRunning && renderWarning) && <GenericDemoMessage />}
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