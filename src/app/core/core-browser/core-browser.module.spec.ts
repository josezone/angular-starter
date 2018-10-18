import { CoreBrowserModule } from './core-browser.module';

describe('CoreBrowserModule', () => {
  let coreBrowserModule: CoreBrowserModule;

  beforeEach(() => {
    coreBrowserModule = new CoreBrowserModule( coreBrowserModule);
  });

  it('should create an instance', () => {
    expect(coreBrowserModule).toBeTruthy();
  });
});
