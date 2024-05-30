const api = {
  getStudyMaterial: async (topic) => {
    try {
      const response = await axios.get(`https://api.gpt-4o.com/study-material/${topic}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching study material:", error);
      return null;
    }
  },
  
  sendUserQuery: async (query) => {
    try {
      const response = await axios.post("https://api.gpt-4o.com/query", { query });
      return response.data;
    } catch (error) {
      console.error("Error sending user query:", error);
      return null;
    }
  },
  
  blockWebsite: (website) => {
    try {
      chrome.webRequest.onBeforeRequest.addListener(
        (details) => {
          if (details.url.includes(website)) {
            chrome.tabs.update(details.tabId, { url: "https://blockpage.com" });
          }
        },
        { urls: ["<all_urls>"] },
        ["blocking"]
      );
    } catch (error) {
      console.error("Error blocking website:", error);
    }
  },
  
  saveStudyNotes: (notes) => {
    try {
      localStorage.setItem("studyNotes", notes);
    } catch (error) {
      console.error("Error saving study notes:", error);
    }
  },
  
  getStudyNotes: () => {
    try {
      return localStorage.getItem("studyNotes") || "";
    } catch (error) {
      console.error("Error getting study notes:", error);
      return "";
    }
  }
};

export default api;