import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { Provider as StyletronProvider } from 'styletron-react';
import { Server, Sheet } from 'styletron-engine-atomic/index';
import { styletron } from '../helpers/styletron';

function MyDocument({ stylesheets }: { stylesheets: Sheet[] }) {
  return (
    <Html>
      <Head>
        {stylesheets.map((sheet, i) => (
          <style
            className="_styletron_hydrate_"
            dangerouslySetInnerHTML={{ __html: sheet.css }}
            media={sheet.attrs.media}
            data-hydrate={sheet.attrs['data-hydrate']}
            key={i}
          />
        ))}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (context: DocumentContext) => {
  const renderPage = () =>
    context.renderPage({
      // eslint-disable-next-line react/display-name
      enhanceApp: (App) => (props) =>
        (
          <StyletronProvider value={styletron}>
            <App {...props} />
          </StyletronProvider>
        ),
    });

  const initialProps = await Document.getInitialProps({
    ...context,
    renderPage,
  });
  const stylesheets = (styletron as Server).getStylesheets() || [];
  return { ...initialProps, stylesheets };
};

export default MyDocument;
