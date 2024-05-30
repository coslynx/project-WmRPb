import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DistractionBlocker = () => {
  const [blockedWebsites, setBlockedWebsites] = useState([]);
  const [currentTab, setCurrentTab] = useState(null);

  useEffect(() => {
    const handleTabChange = (tab) => {
      if (blockedWebsites.includes(tab.url)) {
        // Display a warning message in the chat popup
        console.log('Warning: You are visiting a distracting website!');
      }
    };

    // Monitor user's tab activities
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      setCurrentTab(tab);
      handleTabChange(tab);
    });

    return () => {
      chrome.tabs.onUpdated.removeListener(handleTabChange);
    };
  }, [blockedWebsites]);

  // Function to add a website to the list of blocked websites
  const addBlockedWebsite = (website) => {
    setBlockedWebsites([...blockedWebsites, website]);
  };

  // Function to remove a website from the list of blocked websites
  const removeBlockedWebsite = (website) => {
    setBlockedWebsites(blockedWebsites.filter((w) => w !== website));
  };

  return null;
};

export default DistractionBlocker;