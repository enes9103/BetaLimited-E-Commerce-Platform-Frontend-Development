export function getStorageData(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Veri alınamadı:', error);
      return null;
    }
  }
  
  export function setStorageData(key, value) {
    try {
      const data = JSON.stringify(value);
      localStorage.setItem(key, data);
    } catch (error) {
      console.error('Veri kaydedilemedi:', error);
    }
  }
  