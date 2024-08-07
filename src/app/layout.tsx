import '../index.css'
import { Analytics } from '@vercel/analytics/react';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="La JW Corp est une agence de développement et de conseil qui vous accompagne pour vos projets Blockchain, de la conception à la réalisation. Solutions clés en main: Marketplace NFT, Tokens ERC20, plateforme de vote DAO ou tout autres dApps..."
          />
          <meta
            name="keywords"
            content="Bitcoin, NFT, Blockchain, ERC20, ERC721, Ethereum"
          />
          <meta name="author" content="JW Corp" />
          <link
            href="https://fonts.googleapis.com/css?family=PT+Serif:400,400i,700|Montserrat:100,200,300,300i,400,500,600,700,800,900"
            rel="stylesheet"
            type="text/css"
          />
          <title>JW Corp - Blockchain Solutions</title>
        </head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <div id="root">{children}<Analytics /></div>
        </body>
      </html>
    </>
  );
}
