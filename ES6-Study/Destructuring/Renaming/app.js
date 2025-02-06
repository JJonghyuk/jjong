// 이렇게 해도 되지만 이러면, 값이 없을때 오류 가 나올 수 있음.
function saveSettings(settings) {
  console.log(settings);
}

saveSettings({
  followAlert: true,
  unfollowAlert: true,
  mrkAlert: true,
  themeColor: "green",
});

// 아래 처럼 사용
function saveSettings2({ follow, alert, mkt, color = "blue" }) {
  console.log(follow, color);
}

saveSettings2({
  follow: true,
  alert: true,
  mkt: false,
});

function saveSettingss({ notifications, color: { theme } }) {
  console.log(notifications, theme);
}

saveSettingss({
  notifications: {
    follow: true,
    alert: true,
    mkt: false,
  },
  color: {
    theme: "blue",
  },
});
