class Notification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }

  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class EmailNotification extends Notification {}

class SMSNotification extends Notification {}

const notiEmail = new EmailNotification(
  "1",
  "1-1-2024",
  "Hello world",
  "hello@world.com"
);

const notiSms = new SMSNotification(
  "1",
  "1-1-2024",
  "Hello world",
  "0987654321"
);

notiEmail.send();
notiSms.send();
