"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTitleNotificationIcon = setTitleNotificationIcon;
exports.clearTitleNotificationIcon = clearTitleNotificationIcon;
const notificationIcons = /[🔴🟠🟡🟢🔵🟣💬]/gu;
function setTitleNotificationIcon(message) {
    document.title = `${message} ${document.title.replace(notificationIcons, "")}`;
}
function clearTitleNotificationIcon() {
    document.title = document.title.replace(notificationIcons, "");
}
//# sourceMappingURL=window.js.map