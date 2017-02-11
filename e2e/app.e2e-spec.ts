import { PaginaDownloadPage } from './app.po';

describe('pagina-download App', function() {
  let page: PaginaDownloadPage;

  beforeEach(() => {
    page = new PaginaDownloadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
