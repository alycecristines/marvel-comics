// describe('Example', () => {
//   beforeEach(async () => {
//     await device.reloadReactNative();
//   });

//   it('should have welcome screen', async () => {
//     await expect(element(by.id('welcome'))).toBeVisible();
//   });

//   it('should show hello screen after tap', async () => {
//     await element(by.id('hello_button')).tap();
//     await expect(element(by.text('Hello!!!'))).toBeVisible();
//   });

//   it('should show world screen after tap', async () => {
//     await element(by.id('world_button')).tap();
//     await expect(element(by.text('World!!!'))).toBeVisible();
//   });
// });

describe('Home', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  // it('should open drawer', async () => {
  //   expect(element(by.id('bars'))).toBeVisible();
  //   await element(by.id('bars')).tap();
  //   await expect(element(by.id('drawer'))).toBeVisible();
  // });

  it('teste', async () => {
    await expect(element(by.text('Marvel Now'))).toBeVisible();
  });
});
