import axios from 'axios';

const tabMonitor = {
  startMonitoringTabs: () => {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      if (changeInfo.url) {
        // Check if the user navigates to an irrelevant website
        const irrelevantWebsites = ['example.com', 'test.com']; // Add irrelevant websites here
        if (irrelevantWebsites.some((website) => changeInfo.url.includes(website))) {
          tabMonitor.displayWarningMessage();
        }
      }
    });
  },

  displayWarningMessage: () => {
    // Display a warning message in the chat popup to refocus the user
    // You can implement this functionality based on your chat popup component
  },
};

tabMonitor.startMonitoringTabs();

export default tabMonitor;