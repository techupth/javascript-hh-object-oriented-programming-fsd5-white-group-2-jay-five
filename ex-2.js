class Notification {
  constructor(notificatiobId, crearedTime, content, receiver,) {
    this.notificatiobId = notificatiobId;
    this.crearedTime = crearedTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class EmailNotification extends Notification {
//   constructor(notificatiobId, crearedTime, content, receiver) {
//     super(notificatiobId, crearedTime, content);
//     this.receiver = receiver;
//   }
//   send() {
//     console.log(`Notification has been sent to ${this.receiver}`);
//   }
}

class SMSNotification extends Notification {
//   constructor(notificatiobId, crearedTime, content, phoneNumber) {
//     super(notificatiobId, crearedTime, content);
//     this.phoneNumber = phoneNumber;
//   }
//   send() {
//     console.log(`Notification has been sent to ${this.phoneNumber}`);
//   }
// }
}
const testNotification = new EmailNotification(
    "1234",
    "12.46",
    "test-noti",
    "thanwalokwattanakul@gmail.com"
  );
  testNotification.send();
  const testSMSNotification = new SMSNotification(
    "1234",
    "12.41",
    "test-noti",
    "094XXXXXXX"
  );
  testSMSNotification.send();
  