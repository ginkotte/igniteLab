import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'Teste',
      category: 'social',
      recipientId: 'teste',
    });

    expect(notification).toBeTruthy();
  });
});