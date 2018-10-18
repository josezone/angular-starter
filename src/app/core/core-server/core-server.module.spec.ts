import { CoreServerModule } from './core-server.module';

describe('CoreServerModule', () => {
  let coreServerModule: CoreServerModule;

  beforeEach(() => {
    coreServerModule = new CoreServerModule(coreServerModule);
  });

  it('should create an instance', () => {
    expect(coreServerModule).toBeTruthy();
  });
});
