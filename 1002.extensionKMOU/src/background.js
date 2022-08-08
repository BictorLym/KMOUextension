// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// });
function openNewTab(){
  whale.browserAction.onClicked.addListener(() => {
    whale.tabs.create({
        url: `http://news.naver.com/`
    });
  })
}
